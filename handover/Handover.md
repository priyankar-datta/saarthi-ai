# Handover & Setup Notes — Saarthi AI

## Quick start (Codespace)
1. Open GitHub Codespace and create a new workspace.
2. Copy repo files into the workspace.
3. Create a `.env` in `backend/` from `.env.example` and set `OPENAI_API_KEY`.

### Run backend
cd backend/app python -m venv venv source venv/bin/activate pip install -r requirements.txt uvicorn app.main:app –reload –port 8000

### Run frontend
cd frontend/client npm install npm run dev # open https://127.0.0.1:5173 or http://localhost:5173

## Tests
- Use the sample leads in `backend/app/dummy_data.json`
- POST to `/api/score_lead` and `/api/generate_script` via curl or Postman.

## Deployment (Render)
1. Push code to GitHub.
2. Import `render.yaml` in Render or create two services (backend + static frontend). Provide `OPENAI_API_KEY` in Render secrets.
3. Set CORS_ALLOWED_ORIGINS to include deployed frontend URL.

## Known issues
- JSON parse errors from model responses: use fallback extraction approach in routes.
- Rate limit or API key errors: ensure billing & key validity.