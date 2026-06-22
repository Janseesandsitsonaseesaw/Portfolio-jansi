// Local fallback data — mirrors the FastAPI /api/profile response shape.
// useProfile() tries the API first and falls back to this so the site
// never breaks if the backend isn't running.

export const profileFallback = {
  name: 'Jansi Doshi',
  title: 'Software Engineer',
  email: 'jansidoshi4@gmail.com',
  phone: '+91 9811834641',
  github: 'https://github.com/jansidoshi4',
  linkedin: 'https://linkedin.com/in/jansidoshi',
  resume_url: '/resume.pdf',
  education: [
    {
      institution: 'Manipal Institute of Technology',
      location: 'Manipal',
      degree: 'B.Tech in Information Technology',
      years: '2024–2028',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'DBMS',
        'Computer Networks',
        'System Design',
      ],
    },
    {
      institution: 'Amity International School',
      location: 'Gurugram',
      degree: 'Higher Secondary (Class XII), CBSE Board',
      years: '2024',
      coursework: [],
    },
    {
      institution: 'Narayana eTechno School',
      location: 'Gurugram',
      degree: 'Secondary (Class X), CBSE Board',
      years: '2022',
      coursework: [],
    },
  ],
  experience: [
    {
      role: 'AI Engineering Intern',
      company: 'EMB Global',
      location: 'Gurugram',
      period: 'May 2026 – July 2026',
      points: [
        'Architected and deployed production AI inference pipelines (LLMs, FastAPI), building scalable REST APIs that connect AI models to client-facing products.',
      ],
    },
  ],
  projects: [
    {
      id: 'hisaab',
      name: 'Hisaab SmartPOS',
      stack: 'React, FastAPI, PostgreSQL, Supabase',
      summary:
        'A production-deployed POS system for real-time billing and inventory across multiple retail clients, with a concurrency-safe checkout pipeline and an AI assistant for natural-language inventory queries.',
      github: 'https://github.com/Janseesandsitsonaseesaw/Hisaab',
      live: 'https://hisaab-omega.vercel.app/',
    },
    {
      id: 'nova',
      name: 'Nova AI',
      stack: 'React, FastAPI, OpenRouter API',
      summary:
        'A distributed client-server system translating natural language into executable SQL, with dynamic query generation and real-time result visualization.',
      github: 'https://github.com/Janseesandsitsonaseesaw/Nova-AI',
      live: null,
    },
    {
      id: 'hotel-management',
      name: 'Hotel Management System',
      stack: 'Java, JavaFX, Maven',
      summary:
        'A concurrent desktop booking system supporting simultaneous bookings and GST-based billing, with real-time revenue analytics and role-based access control.',
      github: 'https://github.com/Janseesandsitsonaseesaw/Hotel-Manager',
      live: null,
    },
    {
      id: 'portfolio',
      name: 'Personal Portfolio',
      stack: 'React, JavaScript, CSS',
      summary:
        'A fully interactive retro desktop OS simulation with custom window management and a Dock, optimized for rendering performance.',
      github: 'https://github.com/Janseesandsitsonaseesaw/Portfolio-jansi',
      live: null,
    },
  ],
  skills: {
    Languages: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
    Frontend: ['React', 'Next.js', 'Vite', 'HTML', 'CSS'],
    Backend: ['FastAPI', 'Flask', 'REST APIs', 'JWT Authentication', 'RBAC'],
    Databases: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase'],
    'AI & ML': ['LLMs', 'OpenRouter API', 'Gemini API', 'OCR', 'Prompt Engineering', 'Agentic Workflows'],
    Tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Maven', 'Render', 'Vercel'],
  },
  volunteering: [
    {
      role: 'Organising Committee Member, Ops & HRD',
      event: "Cultural Event (Revels), Manipal Institute of Technology",
      year: '2025',
      points: [
        "Contributed to database management for Revels, MIT Manipal's biggest annual cultural fest, coordinating logistics across multi-day operations.",
      ],
    },
  ],
}
