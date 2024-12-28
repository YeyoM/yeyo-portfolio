terraform {
  backend "s3" {
    bucket = "yeyo-terraform-state-bucket"
    key    = "terraform/state"
    region = "us-east-1"
  }
}

