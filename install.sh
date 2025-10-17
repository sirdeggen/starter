#!/bin/bash

echo "Installing dependencies for frontend..."
cd frontend
npm install
if [ $? -ne 0 ]; then
  echo "Failed to install frontend dependencies"
  exit 1
fi

echo "Installing dependencies for backend..."
cd ../backend
npm install
if [ $? -ne 0 ]; then
  echo "Failed to install backend dependencies"
  exit 1
fi

echo "All dependencies installed successfully!"
cd ..
