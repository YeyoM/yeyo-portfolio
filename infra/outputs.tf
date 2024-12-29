output "s3_bucket_terraform_state_arn" {
  value = aws_s3_bucket.terraform_bucket.arn
}

output "s3_bucket_portfolio_arn" {
  value = aws_s3_bucket.yeyom_tech.arn
}

output "s3_bucket_portfolio_www_arn" {
  value = aws_s3_bucket.www_yeyom_tech.arn
}

output "s3_bucket_terraform_state_id" {
  value = aws_s3_bucket.terraform_bucket.id
}

output "s3_bucket_portfolio_id" {
  value = aws_s3_bucket.yeyom_tech.id
}
