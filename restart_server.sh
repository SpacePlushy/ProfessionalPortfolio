#!/bin/bash

# Find and kill the process listening on port 5000
PID=$(lsof -t -i:5000)
if [ ! -z "$PID" ]; then
  echo "Stopping server with PID: $PID"
  kill $PID
  # Wait a moment for the port to be released
  sleep 2
else
  echo "No server found running on port 5000."
fi

# Start the server
echo "Starting server..."
npm run dev
