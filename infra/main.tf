resource "aws_s3_bucket" "bucket" {
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

// REVIEWD UNTIL HERE

resource "aws_route53_record" "yeyom_tech" {
  zone_id = data.aws_route53_zone.yeyom.id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.yeyom_tech.domain_name
    zone_id                = aws_cloudfront_distribution.yeyom_tech.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_cloudfront_distribution" "yeyom_tech" {
  origin {
    domain_name = aws_s3_bucket.yeyom_tech.website_endpoint
    origin_id   = "yeyom-tech-s3-origin"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    target_origin_id       = "yeyom-tech-s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn       = var.certificate_arn
    ssl_support_method        = "sni-only"
    minimum_protocol_version  = "TLSv1.2_2019"
  }
}


