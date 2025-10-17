#!/bin/bash

# Start backend
cd backend
npm run dev 2>&1 | sed 's/^/[back] /' &
BACK_PID=$!

# Start frontend
cd ../frontend
npm run dev 2>&1 | sed 's/^/[front] /' &
FRONT_PID=$!

# Wait for both processes
wait $BACK_PID
wait $FRONT_PID
