#!/bin/bash

# Kill any process running on port 3000 (default Vite dev port)
PID=$(lsof -t -i:3000)
if [ ! -z "$PID" ]; then
  echo "Stopping process on port 3000 with PID: $PID"
  kill $PID
  sleep 2
else
  echo "No process found running on port 3000."
fi

# Run Vite directly in development mode
echo "Starting Vite dev server..."
cd /Users/spaceplushy/Documents/Projects/Personal-Portfolio
npx vite --config vite.config.ts
