from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import router
import os


app = FastAPI(title="Saarthi AI")


origins = [o for o in os.getenv("CORS_ALLOWED_ORIGINS", "http://localhost:5173").split(",")]


app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)


app.include_router(router)


@app.get("/health")
async def health():
return {"status": "ok"}