#!/bin/bash

# Development script to run Jekyll and TailwindCSS together

echo "🚀 Starting development environment..."
echo "📦 Jekyll will run on http://localhost:4000"
echo "🎨 TailwindCSS will watch for changes"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping all processes..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set up trap to cleanup on Ctrl+C
trap cleanup INT TERM

# Start TailwindCSS in watch mode
echo "Starting TailwindCSS..."
npm run dev &

# Start Jekyll with Docker
echo "Starting Jekyll..."
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish 4000:4000 \
  --publish 35729:35729 \
  jekyll/jekyll:latest \
  jekyll serve --force_polling --livereload &

# Wait for both processes
echo ""
echo "✅ Development environment running!"
echo "🌐 Visit http://localhost:4000"
echo "Press Ctrl+C to stop"
echo ""

# Keep script running
wait