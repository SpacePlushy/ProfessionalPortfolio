#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project directory
PROJECT_DIR="/Users/spaceplushy/Documents/Projects/Personal-Portfolio"
VITE_PORT=5173
EXPRESS_PORT=5000

# Function to print colored messages
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to check if a port is in use
is_port_in_use() {
    local port=$1
    lsof -i:$port >/dev/null 2>&1
    return $?
}

# Function to kill process running on a specific port
kill_process_on_port() {
    local port=$1
    local pid=$(lsof -t -i:$port 2>/dev/null)
    
    if [ ! -z "$pid" ]; then
        print_message "$YELLOW" "Stopping process on port $port with PID: $pid"
        kill $pid 2>/dev/null || kill -9 $pid 2>/dev/null
        sleep 2
        
        # Verify it's actually stopped
        if is_port_in_use $port; then
            print_message "$RED" "Failed to stop process on port $port. Please check manually."
            return 1
        else
            print_message "$GREEN" "Successfully stopped process on port $port."
            return 0
        fi
    else
        print_message "$BLUE" "No process found running on port $port."
        return 0
    fi
}

# Function to check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_message "$RED" "npm is not installed or not in PATH. Please install Node.js and npm."
        exit 1
    fi
}

# Function to check if node_modules exists, if not run npm install
check_dependencies() {
    if [ ! -d "$PROJECT_DIR/node_modules" ]; then
        print_message "$YELLOW" "node_modules not found. Running npm install..."
        cd "$PROJECT_DIR" && npm install
        
        if [ $? -ne 0 ]; then
            print_message "$RED" "Failed to install dependencies. Please check for errors."
            exit 1
        fi
        
        print_message "$GREEN" "Dependencies installed successfully."
    fi
}

# Function to start the Vite development server
start_vite_dev() {
    print_message "$BLUE" "Starting Vite development server..."
    cd "$PROJECT_DIR"
    
    # Start Vite in the background
    npx vite --config vite.config.ts &
    VITE_PID=$!
    
    # Wait for Vite to start
    local timeout=30
    local counter=0
    while ! is_port_in_use $VITE_PORT && [ $counter -lt $timeout ]; do
        sleep 1
        ((counter++))
        echo -n "."
    done
    echo ""
    
    if is_port_in_use $VITE_PORT; then
        print_message "$GREEN" "Vite development server started successfully at http://localhost:$VITE_PORT"
        print_message "$BLUE" "Press Ctrl+C to stop the server."
        
        # Save PID to file for later cleanup
        echo $VITE_PID > "$PROJECT_DIR/.vite.pid"
        
        # Wait for user to press Ctrl+C
        wait $VITE_PID
    else
        print_message "$RED" "Failed to start Vite development server. Check for errors."
        exit 1
    fi
}

# Function to start in production mode
start_production() {
    print_message "$BLUE" "Starting in production mode..."
    cd "$PROJECT_DIR"
    
    # Check if build exists, if not, build the project
    if [ ! -d "$PROJECT_DIR/dist" ]; then
        print_message "$YELLOW" "Build not found. Running npm run build..."
        npm run build
        
        if [ $? -ne 0 ]; then
            print_message "$RED" "Build failed. Please check for errors."
            exit 1
        fi
    fi
    
    # Start the production server
    NODE_ENV=production node dist/index.js &
    SERVER_PID=$!
    
    # Wait for server to start
    local timeout=30
    local counter=0
    while ! is_port_in_use $EXPRESS_PORT && [ $counter -lt $timeout ]; do
        sleep 1
        ((counter++))
        echo -n "."
    done
    echo ""
    
    if is_port_in_use $EXPRESS_PORT; then
        print_message "$GREEN" "Production server started successfully at http://localhost:$EXPRESS_PORT"
        print_message "$BLUE" "Press Ctrl+C to stop the server."
        
        # Save PID to file for later cleanup
        echo $SERVER_PID > "$PROJECT_DIR/.server.pid"
        
        # Wait for user to press Ctrl+C
        wait $SERVER_PID
    else
        print_message "$RED" "Failed to start production server. Check for errors."
        exit 1
    fi
}

# Main execution starts here
print_message "$BLUE" "Portfolio Website Starter"
print_message "$BLUE" "========================="

# Check if npm is installed
check_npm

# Check for dependencies
check_dependencies

# Kill any existing processes on the ports we need
kill_process_on_port $VITE_PORT
kill_process_on_port $EXPRESS_PORT

# Parse command line arguments
MODE="dev"
if [ "$1" = "prod" ] || [ "$1" = "production" ]; then
    MODE="prod"
fi

# Trap Ctrl+C to clean up
trap 'print_message "$YELLOW" "Stopping servers..."; kill_process_on_port $VITE_PORT; kill_process_on_port $EXPRESS_PORT; print_message "$GREEN" "Servers stopped."; exit 0' INT

# Start the appropriate server based on mode
if [ "$MODE" = "dev" ]; then
    start_vite_dev
else
    start_production
fi
