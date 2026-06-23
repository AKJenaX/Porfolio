# Formula 1 Telemetry Dashboard Portfolio

Personal portfolio repository of Anup Kumar Jena, a Computer Science undergraduate specializing in backend architecture, scalable APIs, and cloud services. This project implements an interactive Formula 1 telemetry dashboard inspired by the Red Bull Racing design system, showcasing full-stack application development, AI integrations, and low-latency system designs.

## Current Focus Areas

* Backend Engineering (Python, Node.js, FastAPI, REST APIs)
* AI/ML Integrations (Local model orchestration, OpenAI APIs, LLM systems)
* Cloud Infrastructure (Docker containerization, CI/CD pipelines, Cloud Services)
* Full-Stack Capabilities (React, responsive telemetry interfaces, stateful coordination)

---

## Live Website

The production build of the portfolio is deployed and accessible at:
[https://portfolio.anupjena.dev](https://portfolio.anupjena.dev) *(Placeholder)*

---

## Features

### 3D Telemetry Hero
Interactive 3D canvas built with React Three Fiber and @react-three/drei, showcasing real-time rotating telemetry rings, vector coordinate loops, holographic dashboard panels, and particle field simulations that dynamically respond to mouse parallax movements.

### Red Bull Racing UI
A customized dark mode layout utilizing Red Bull Racing's branding tokens:
* Primary Background: #060B26
* Secondary Blue: #091430
* Red Bull Blue: #1E5BC6
* Red Bull Red: #DC052D
* Yellow Accent: #F7D417
* Custom scan lines, telemetry grids, and carbon fiber backgrounds.

### Interactive Project Diagnostics
Progressive disclosure architecture for case studies. Clicking the diagnostics trigger opens a custom full-screen console rendered via React Portals, detailing:
* Problem: The real-world operational challenges solved.
* Architecture: Component mapping and structural text data flow diagrams.
* Challenges: Technical constraints, performance bottlenecks, and engineering tradeoffs.
* Outcome: Performance metrics and lessons learned.

### In-Browser Resume Preview
Integrated resume viewing flow supporting target external navigation with target="_blank" and rel="noopener noreferrer" options, removing automated file downloads for a clean recruiter preview experience.

### Responsive Design
Custom media queries adapting multi-column grid layouts, stats cards, and interactive consoles across desktop and mobile devices.

### Vercel Analytics Integration
Global analytics tracking initialized at the application root, capturing telemetry views and engagement metrics across the single-page application lifecycle.

### Performance Optimization
* Lazy-loading of heavy 3D canvases and R3F context panels to optimize initial page loading metrics.
* Module code-splitting of Three.js modules.
* DPR clamping for high-density mobile screens to reduce rendering load.
* Write-coalescing algorithms and local memory optimizations for underlying datasets.

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Frontend & UI** | React, Vite, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3 |
| **3D Renderers** | Three.js, React Three Fiber, @react-three/drei |
| **Backend** | Python, FastAPI, Node.js, Express.js, REST APIs |
| **Databases & Cache** | MySQL, PostgreSQL, MongoDB, MongoDB Atlas, Redis, SQLite |
| **Cloud & DevOps** | Docker, Docker Compose, GitHub Actions, Vercel, Azure, AWS/GCP, Linux, Bash |
| **AI/ML & Utilities** | OpenAI API (GPT-4o), Ollama (Local LLM Server), NumPy (Vectorized haversine lookup) |

---

## Project Architecture

The codebase follows a modular React component structure with localized 3D engines and custom lifecycle hooks:

```
src/
├── assets/            # Static assets and SVG graphics
├── components/        # UI components and modules
│   ├── hero3d/        # Three.js canvas engines (HeroScene, TelemetryRing, HologramPanel, Particles)
│   ├── Hero.jsx       # Header telemetry bar, title, CTA links, and social navigation
│   ├── About.jsx      # Driver identification card and stats breakdown
│   ├── Skills.jsx     # Reorganized technical specification categories (5 groups)
│   ├── Projects.jsx   # Case studies, React Portals, and diagnostics tab panels
│   ├── Experience.jsx # Career history, timelines, and milestones
│   ├── Contact.jsx    # Communication console, role status variables, and email links
│   ├── Navbar.jsx     # Persistent navigation controls and driver identity markers
│   ├── ScrollProgress.# Visual progress indicator linked to window scroll viewport
│   └── LoadingScreen. # Telemetry sync load screen with simulated stage gates
├── hooks/             # Custom lifecycle hooks (useReveal, etc.)
├── index.css          # Design system variables, animations, and custom scrollbar rules
├── App.jsx            # Application root, cursor coordinate tracking, and Analytics mount
└── main.jsx           # StrictMode mounting and index stylesheet imports
```

---

## Key Sections

### Hero
Dynamic entry sequence with real-time running lap timer, live status indicator, F1 driver identity label (#19), and core call-to-actions.

### About
Driver Profile card displaying professional status, educational affiliations, and quantitative metrics (projects deployed, tech stack size, lines of code written).

### Skills
Technical Specifications categorized into 5 systems: Engine (Backend), Power Unit (Python & AI), Electronics (Cloud & DevOps), Fuel Systems (Databases), and Aerodynamics (Full Stack & Frontend).

### Projects
recruiter-focused engineering case studies. Rather than standard cards, it uses telemetry tabs displaying database write buffers, microsecond IP geolocation Lookups, multi-agent token budgets, and Reinforcement Learning task routing.

### Experience
Championship history showcasing roles, technical achievements, and backend/infrastructure milestones.

### Contact
A mock pit wall communication console displaying primary role parameters, current focus areas, and direct email triggers.

---

## Performance & Accessibility

* **Asset Compresson**: SVG vector files are utilized for badges, cards, and icons to minimize asset download footprints.
* **Aria Attributes**: Semantic HTML5 structures and screen-reader labels applied across all control fields and links.
* **Keyboard Navigation**: Standard focus outlines and keyboard listeners (`ESC` close triggers for modal states) implemented.
* **Responsive Scopes**: Custom `@media (pointer: fine)` rules isolating scrollbar customizations and parallax transformations for touch-based devices.

---

## Local Development

Prerequisites:
* Node.js (version 18 or higher)
* npm (version 9 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/AKJenaX/Porfolio.git
cd Porfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
The application will run locally at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle files will be generated inside the `dist/` directory.

### 5. Preview the Production Build
```bash
npm run preview
```

---

## Deployment

The portfolio is set up for automatic deployment on **Vercel** connected directly to the GitHub repository:

1. Import the repository in the Vercel Dashboard.
2. Select the framework preset as **Vite**.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Add any environment variables required by the codebase.
5. Deploy. Subsequent pushes to the `main` branch will automatically trigger production builds.

---

## Future Improvements

* **System Architecture Diagrams**: Integrate interactive SVG flowcharts directly inside the Telemetry tab panels.
* **Enhanced Performance Metrics**: Log diagnostic modal events to the Vercel Analytics dashboard to measure reader engagement.
* **Structured API Logging**: Standardize API instrumentation metrics for all demo microservices.
* **Custom Domain Mapping**: Configure direct DNS routing for a clean portfolio domain.

---

## Connect With Me

* **GitHub**: [https://github.com/AKJenaX](https://github.com/AKJenaX)
* **LinkedIn**: [https://www.linkedin.com/in/anup-kumar-jena](https://www.linkedin.com/in/anup-kumar-jena)
* **Email**: [jenaanupkumar824@gmail.com](mailto:jenaanupkumar824@gmail.com)
* **Portfolio**: [https://github.com/AKJenaX/Porfolio](https://github.com/AKJenaX/Porfolio)
