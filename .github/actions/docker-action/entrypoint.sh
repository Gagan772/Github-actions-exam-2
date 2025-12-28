#!/bin/sh -l

# CONCEPT 30: Docker Container Action
# This script runs INSIDE a Docker container

echo "🐳 Hello from Docker container!"
echo "👋 Greeting: Hello $1!"

# Get current time
TIME=$(date)
echo "⏰ Time: $TIME"

# Set output (works with GitHub Actions)
echo "time=$TIME" >> $GITHUB_OUTPUT

echo "✅ Docker action completed!"
