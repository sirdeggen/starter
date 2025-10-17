# Full-Stack TypeScript App

A simple full-stack application demonstrating a React frontend communicating with an Express backend, both built with TypeScript and utilizing the @bsv/sdk library for Bitcoin SV operations.

## Features

- **Frontend**: Vite + React + TypeScript with "Hello World" display and API testing buttons.
- **Backend**: Express + TypeScript with CORS enabled, handling GET and POST requests with BSV key operations.
- **Development**: Auto-restarting dev servers with colored, prefixed logs for easy debugging.
- **Linting**: Configured with ts-standard for consistent code style.

## Tech Stack

- Frontend: React 19, TypeScript 5.9, Vite 7.1
- Backend: Express 5.1, TypeScript 5.9, @bsv/sdk 1.8
- Development: Nodemon for backend watching, Vite for frontend hot reload

## Getting Started

### Prerequisites

- Node.js (v22 or later)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd starter
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install && cd ..
   cd backend && npm install && cd ..
   ```

### Running the Application

To run both frontend and backend simultaneously with combined logs:

```bash
./dev.sh
```

This will start:
- Backend on http://localhost:3000 (auto-restarts on changes)
- Frontend on http://localhost:5173 (hot reloads on changes)

Logs are prefixed and colored:
- Backend: `[back]` (requests in blue, responses in green)
- Frontend: `[front]` (in yellow)

Alternatively, run individually:
- Backend: `cd backend && npm run dev`
- Frontend: `cd frontend && npm run dev`

### Building for Production

- Frontend: `cd frontend && npm run build`
- Backend: `cd backend && npm run build`

## API Endpoints

### GET /
Returns a JSON object with a random BSV address.

### POST /act
Accepts JSON with `data` and `key` (WIF), adds backend-specific data and derived address.

## Development

- **Linting**: Run `npm run lint` in respective directories.
- **Testing**: Frontend buttons test the API endpoints.
- **Modifying**:
  - Frontend: Edit `frontend/src/App.tsx` for UI changes.
  - Backend: Edit `backend/src/index.ts` for API logic.
  - Dependencies: Update versions in `package.json` and run `npm install`.
  - Dev script: Modify `dev.sh` for custom startup behavior.

## Project Structure

```
/
├── frontend/          # React app
│   ├── src/
│   │   ├── App.tsx    # Main component
│   │   └── main.tsx   # Entry point
│   └── package.json
├── backend/           # Express server
│   ├── src/
│   │   └── index.ts   # Server logic
│   └── package.json
├── dev.sh             # Combined dev runner
└── README.md
```
