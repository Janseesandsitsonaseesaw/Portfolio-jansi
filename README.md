# Jansi Doshi — Portfolio

An editorial, vintage-newspaper-styled portfolio site. Black & white only,
broadsheet layout, engraved illustrations instead of screenshots.

## Stack

- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend:** FastAPI (serves profile data + a contact endpoint)

## Running locally

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env   # then fill in your real RESEND_API_KEY
uvicorn main:app --reload --port 8000
```

#### Setting up the contact form (Resend)

Contact form messages get emailed to you via [Resend](https://resend.com).

1. Sign up at resend.com (free tier: 3,000 emails/month, 100/day).
2. Create an API key from the dashboard.
3. Copy `backend/.env.example` to `backend/.env` and paste your key into `RESEND_API_KEY`.
4. `CONTACT_TO_EMAIL` is where messages get sent — defaults to your resume email.
5. `CONTACT_FROM_EMAIL` defaults to Resend's shared sandbox address
   (`onboarding@resend.dev`), which works immediately with no setup. Once
   you verify your own domain on Resend, you can switch this to something
   like `contact@yourdomain.com`.

When deploying the backend (Render, Railway, etc.), set these same three
variables in that platform's environment variable settings — don't commit
`.env` itself.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. The frontend fetches `/api/profile` from
the backend at `http://localhost:8000`; if the backend isn't running, it
silently falls back to the local data in `src/data/profileFallback.js` so
the site still works standalone.

## What you'll want to fill in

- **Project links:** `live` URLs in `backend/main.py` (`get_profile`) and
  `frontend/src/data/profileFallback.js` are placeholder `"#"` — drop in
  real deployed URLs when ready. GitHub links currently point to the
  profile (`github.com/Janseesandsitsonaseesaw`); update per-project if you have
  separate repo URLs.
- **Resume:** `frontend/public/resume.pdf` already contains your uploaded
  resume — swap the file if you update it.

## Structure

```
frontend/
  src/
    components/   — all UI sections (Masthead, Hero, About, Projects, etc.)
    data/          — local fallback profile data
    hooks/         — useProfile() data-fetching hook
    styles/        — global CSS (paper texture, print rules, typography)
  public/
    resume.pdf     — downloadable résumé
backend/
  main.py          — FastAPI app, /api/profile + /api/contact
  requirements.txt
```

## Notes on the design

- Strictly black/white/paper — no color, no gradients.
- Fonts: Playfair Display (headlines), Libre Baskerville (body),
  IBM Plex Mono (labels/eyebrows/captions).
- The hero illustration is hand-drawn SVG line art styled as an engraving
  (browser window + dashboard), not a real screenshot — per the brief.
- CGPA and percentage are intentionally omitted from Education.
- Scroll reveals use Framer Motion's `whileInView`, respecting
  `prefers-reduced-motion`.
