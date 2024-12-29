resource "aws_iam_user" "deploy_user" {
  name = "YeyoPortfolioDeployGithubAction"

  tags = {
    (var.aws_access_key_id_github_actions) = "Github Action"
    (var.aws_access_key_id_deploy)         = "Deploy Portfolio Infra"
  }
}

resource "aws_iam_policy" "deploy_user_policy" {
  name        = "yeyom-portfolio-delpoy-github-action"
  description = "Github Action for deploying Yeyom Portfolio"
  policy      = <<EOT
  {
    "Version" : "2012-10-17",
    "Statement" : [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "route53:*",
                "cloudfront:*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "iam:ListUsers",
                "iam:ListUserPolicies",
                "iam:GetUser",
                "iam:GetUserPolicy",
                "iam:GetPolicy",
                "iam:GetPolicyVersion",
                "iam:ListAttachedUserPolicies",
                "sts:GetSessionToken"
            ],
            "Resource": "*"
        }
    ]
  }
  EOT
}

resource "aws_iam_user_policy_attachment" "deploy_user_policy_attachment" {
  user       = aws_iam_user.deploy_user.name
  policy_arn = aws_iam_policy.deploy_user_policy.arn
}

resource "aws_s3_bucket" "terraform_bucket" {
  bucket = var.s3_bucket_name_terraform_state
}

resource "aws_s3_bucket" "yeyom_tech" {
  bucket = var.s3_bucket_name_portfolio
}

resource "aws_s3_bucket_website_configuration" "yeyom_tech" {
  bucket = aws_s3_bucket.yeyom_tech.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket" "www_yeyom_tech" {
  bucket = var.s3_bucket_name_portfolio_www
}

resource "aws_s3_bucket_website_configuration" "www_yeyom_tech" {
  bucket = aws_s3_bucket.www_yeyom_tech.id

  redirect_all_requests_to {
    host_name = var.domain_name
    protocol  = "https"
  }
}

resource "aws_route53_zone" "yeyom" {
  name    = var.domain_name
  comment = "YeyoM websites"
}

# A record for yeyom.tech
resource "aws_route53_record" "yeyom_tech_a" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.a_record_name
    zone_id                = aws_cloudfront_distribution.yeyom_tech.hosted_zone_id
    evaluate_target_health = false
  }
}

# AAAA record for yeyom.tech
resource "aws_route53_record" "yeyom_tech_aaaa" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = var.aaaa_record_name
    zone_id                = aws_cloudfront_distribution.yeyom_tech.hosted_zone_id
    evaluate_target_health = false
  }
}

# NS record for yeyom.tech
resource "aws_route53_record" "yeyom_tech_ns" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = var.domain_name
  type    = "NS"
  ttl     = 172800

  records = var.ns_records_names
}

# SOA record for yeyom.tech
resource "aws_route53_record" "yeyom_tech_soa" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = var.domain_name
  type    = "SOA"
  ttl     = 900

  records = [
    var.soa_record_name
  ]
}

# A record for www.yeyom.tech
resource "aws_route53_record" "www_yeyom_tech_a" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = var.www_a_record_name
    zone_id                = aws_cloudfront_distribution.yeyom_tech.hosted_zone_id
    evaluate_target_health = false
  }
}

# AAAA record for www.yeyom.tech
resource "aws_route53_record" "www_yeyom_tech_aaaa" {
  zone_id = aws_route53_zone.yeyom.zone_id
  name    = "www.${var.domain_name}"
  type    = "AAAA"

  alias {
    name                   = var.www_aaaa_record_name
    zone_id                = aws_cloudfront_distribution.yeyom_tech.hosted_zone_id
    evaluate_target_health = false
  }
}

# CloudFront origin access control
resource "aws_cloudfront_origin_access_control" "yeyom_tech" {
  name                              = var.s3_origin_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  description                       = ""
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "yeyom_tech" {
  price_class = "PriceClass_All"
  aliases = [
    var.domain_name,
    "www.${var.domain_name}",
  ]

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  http_version        = "http2"
  default_root_object = "index.html"
  is_ipv6_enabled     = true
  enabled             = true

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  origin {
    connection_attempts = 3
    connection_timeout  = 10
    domain_name         = var.s3_website_origin_name
    origin_id           = var.s3_website_origin_id

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols = [
        "SSLv3",
        "TLSv1",
        "TLSv1.1",
        "TLSv1.2",
      ]
    }
  }

  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = var.s3_origin_name
    origin_access_control_id = aws_cloudfront_origin_access_control.yeyom_tech.id
    origin_id                = var.s3_origin_id
  }

  default_cache_behavior {
    cache_policy_id  = var.cache_policy_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.s3_origin_id

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }
}
