#! /bin/bash

# Define the Docker image name
IMAGE_NAME="nextjs-builder"

# Build the Docker image
docker build -t $IMAGE_NAME .

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Docker build failed."
  exit 1
fi

# Run the Docker container
docker run --name temp-nextjs-build $IMAGE_NAME

# Check if the container ran successfully
if [ $? -ne 0 ]; then
  echo "Docker run failed."
  # Clean up
  docker rm temp-nextjs-build
  exit 1
fi

# Clean up
docker rm temp-nextjs-build

echo "Build successful!"
exit 0
