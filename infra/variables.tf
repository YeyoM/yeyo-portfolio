variable "aws_region" {
  description = "AWS Region"
  default     = "us-east-1"
  type        = string
}

variable "s3_bucket_name_terraform_state" {
  description = "Name of the S3 bucket for the Terraform state"
  default     = "yeyo-terraform-state-bucket"
  type        = string
}

variable "s3_bucket_name_portfolio" {
  description = "Name of the S3 bucket for the portfolio"
  default     = "yeyom.tech"
  type        = string
}

variable "s3_bucket_name_portfolio_www" {
  description = "Name of the S3 bucket for the portfolio"
  default     = "www.yeyom.tech"
  type        = string
}

variable "domain_name" {
  description = "Domain name"
  default     = "yeyom.tech"
  type        = string
}

variable "certificate_arn" {
  description = "Certificate ARN"
  default     = "certificate-arn"
  type        = string
}
