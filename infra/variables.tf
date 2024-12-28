variable "aws_region" {
  description = "AWS Region"
  type        = string
  nullable    = false
}

variable "s3_bucket_name_terraform_state" {
  description = "Name of the S3 bucket for the Terraform state"
  type        = string
  nullable    = false
}

variable "s3_bucket_name_portfolio" {
  description = "Name of the S3 bucket for the portfolio"
  type        = string
  nullable    = false
}

variable "s3_bucket_name_portfolio_www" {
  description = "Name of the S3 bucket for the portfolio"
  type        = string
  nullable    = false
}

variable "domain_name" {
  description = "Domain name"
  type        = string
  nullable    = false
}

variable "acm_certificate_arn" {
  description = "Certificate ARN"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "aws_access_key_id_github_actions" {
  description = "AWS Access Key ID for the GitHub Actions user"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "aws_access_key_id_deploy" {
  description = "AWS Access Key ID for the deploy user"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "a_record_name" {
  description = "A record name"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "aaaa_record_name" {
  description = "AAAA record name"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "ns_records_names" {
  description = "NS record name"
  type        = list(string)
  nullable    = false
  sensitive   = true
}

variable "soa_record_name" {
  description = "SOA record name"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "www_a_record_name" {
  description = "A record name for www"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "www_aaaa_record_name" {
  description = "AAAA record name for www"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "s3_origin_name" {
  description = "S3 origin name"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "s3_origin_id" {
  description = "S3 origin ID"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "s3_website_origin_name" {
  description = "S3 website origin name"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "s3_website_origin_id" {
  description = "S3 website origin ID"
  type        = string
  nullable    = false
  sensitive   = true
}

variable "cache_policy_id" {
  description = "Cache policy ID"
  type        = string
  nullable    = false
  sensitive   = true
}
