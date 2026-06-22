import os
import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime

load_dotenv()

app = FastAPI(title="Jansi Doshi Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Resend config (contact form -> email) ---
# Set these as environment variables wherever you deploy the backend
# (Render, Railway, etc.). Never hardcode the API key in this file.
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "jansidoshi4@gmail.com")
# Resend requires the "from" address to be on a domain you've verified
# with them. Until you verify your own domain, Resend's shared sandbox
# address "onboarding@resend.dev" works fine for testing.
CONTACT_FROM_EMAIL = os.environ.get("CONTACT_FROM_EMAIL", "onboarding@resend.dev")


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/")
def root():
    return {"status": "ok", "service": "jansi-portfolio-api"}


@app.get("/api/health")
def health():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}


@app.get("/api/profile")
def get_profile():
    """Returns core resume data for the frontend (single source of truth)."""
    return {
        "name": "Jansi Doshi",
        "title": "Software Engineer",
        "email": "jansidoshi4@gmail.com",
        "phone": "+91 9811834641",
        "github": "https://github.com/jansidoshi4",
        "linkedin": "https://linkedin.com/in/jansidoshi",
        "education": [
            {
                "institution": "Manipal Institute of Technology",
                "location": "Manipal",
                "degree": "B.Tech in Information Technology",
                "years": "2024–2028",
                "coursework": [
                    "Data Structures & Algorithms",
                    "Operating Systems",
                    "DBMS",
                    "Computer Networks",
                    "System Design",
                ],
            },
            {
                "institution": "Amity International School",
                "location": "Gurugram",
                "degree": "Higher Secondary (Class XII), CBSE Board",
                "years": "2024",
                "coursework": [],
            },
            {
                "institution": "Narayana eTechno School",
                "location": "Gurugram",
                "degree": "Secondary (Class X), CBSE Board",
                "years": "2022",
                "coursework": [],
            },
        ],
        "experience": [
            {
                "role": "AI Engineering Intern",
                "company": "EMB Global",
                "location": "Gurugram",
                "period": "May 2026 – July 2026",
                "points": [
                    "Architected and deployed production AI inference pipelines (LLMs, FastAPI), building scalable REST APIs that connect AI models to client-facing products.",
                ],
            }
        ],
        "projects": [
            {
                "id": "hisaab",
                "name": "Hisaab SmartPOS",
                "stack": "React, FastAPI, PostgreSQL, Supabase",
                "summary": "A production-deployed POS system for real-time billing and inventory across multiple retail clients, with a concurrency-safe checkout pipeline and an AI assistant for natural-language inventory queries.",
                "github": "https://github.com/Janseesandsitsonaseesaw/Hisaab",
                "live": "https://hisaab-omega.vercel.app/",
            },
            {
                "id": "nova",
                "name": "Nova AI",
                "stack": "React, FastAPI, OpenRouter API",
                "summary": "A distributed client-server system translating natural language into executable SQL, with dynamic query generation and real-time result visualization.",
                "github": "https://github.com/Janseesandsitsonaseesaw/Nova-AI",
                "live": None,
            },
            {
                "id": "hotel-management",
                "name": "Hotel Management System",
                "stack": "Java, JavaFX, Maven",
                "summary": "A concurrent desktop booking system supporting simultaneous bookings and GST-based billing, with real-time revenue analytics and role-based access control.",
                "github": "https://github.com/Janseesandsitsonaseesaw/Hotel-Manager",
                "live": None,
            },
            {
                "id": "portfolio",
                "name": "Personal Portfolio",
                "stack": "React, JavaScript, CSS",
                "summary": "A fully interactive retro desktop OS simulation with custom window management and a Dock, optimized for rendering performance.",
                "github": "https://github.com/Janseesandsitsonaseesaw/Portfolio-jansi",
                "live": None,
            },
        ],
        "skills": {
            "Languages": ["Python", "Java", "JavaScript", "SQL", "C"],
            "Frontend": ["React", "Next.js", "Vite", "HTML", "CSS"],
            "Backend": ["FastAPI", "Flask", "REST APIs", "JWT Authentication", "RBAC"],
            "Databases": ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
            "AI & ML": ["LLMs", "OpenRouter API", "Gemini API", "OCR", "Prompt Engineering", "Agentic Workflows"],
            "Tools": ["Git", "GitHub", "Docker", "Postman", "VS Code", "Maven", "Render", "Vercel"],
        },
        "volunteering": [
            {
                "role": "Organising Committee Member, Ops & HRD",
                "event": "Cultural Event (Revels), Manipal Institute of Technology",
                "year": "2025",
                "points": [
                    "Contributed to database management for Revels, MIT Manipal's biggest annual cultural fest, coordinating logistics across multi-day operations."
                ],
            }
        ],
    }


@app.post("/api/contact")
async def submit_contact(payload: ContactMessage):
    if not RESEND_API_KEY:
        # Fails loudly in dev if the key isn't set, instead of silently
        # dropping messages.
        raise HTTPException(
            status_code=500,
            detail="Email sending isn't configured yet (missing RESEND_API_KEY).",
        )

    html_body = f"""
        <p><strong>New message from your portfolio site</strong></p>
        <p><strong>Name:</strong> {payload.name}</p>
        <p><strong>Email:</strong> {payload.email}</p>
        <p><strong>Message:</strong></p>
        <p>{payload.message}</p>
    """

    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": f"Portfolio Contact Form <{CONTACT_FROM_EMAIL}>",
                "to": [CONTACT_TO_EMAIL],
                "reply_to": payload.email,
                "subject": f"New portfolio message from {payload.name}",
                "html": html_body,
            },
        )

    if response.status_code >= 400:
        raise HTTPException(
            status_code=502,
            detail=f"Resend rejected the message: {response.text}",
        )

    return {"status": "received", "message": "Thanks for reaching out — I'll get back to you soon."}