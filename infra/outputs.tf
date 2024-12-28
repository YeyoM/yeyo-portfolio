output "s3_bucket_terraform_state_arn" {
  value = aws_s3_bucket.terraform_bucket.arn
}
