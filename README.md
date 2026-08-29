# Formula 1 Telemetry Dashboard Portfolio

[![Live Deployment](https://img.shields.io/badge/LIVE%20DEMO-porfolio--anup.vercel.app-DC052D?style=for-the-badge&logo=vercel&logoColor=white)](https://porfolio-anup.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GITHUB-AKJenaX%2FPorfolio-1E5BC6?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AKJenaX/Porfolio)
[![Driver Number](https://img.shields.io/badge/DRIVER-%2322%20ANUP%20KUMAR%20JENA-F7D417?style=for-the-badge&logo=formula1&logoColor=black)](https://porfolio-anup.vercel.app)

Personal portfolio of **Anup Kumar Jena** (#22), a Computer Science undergraduate specializing in high-throughput backend architecture, real-time WebSocket pipelines, and AI systems. Designed as an authentic **Formula 1 Telemetry Console** inspired by the Oracle Red Bull Racing design system.

---

## 🌐 Live Deployment

The production build is deployed and accessible at:
👉 **[https://porfolio-anup.vercel.app](https://porfolio-anup.vercel.app)**

---

## 🏎️ Key Features

### 1. 3D Telemetry Hero Scene
- Interactive 3D canvas built with **React Three Fiber** and **@react-three/drei**.
- Dynamic rotating telemetry rings, particle velocity fields, holographic dashboard panels, and smooth mouse parallax tracking.

### 2. Race Control Command Palette (`Ctrl + K` / `Cmd + K`)
- High-speed, keyboard-first modal popup (inspired by Raycast & Spotlight).
- Instant keyboard navigation across sectors (`01 Driver Profile` → `05 Pit Wall Radio`).
- Direct fast-track jump to featured race projects (`P1 DcoY`, `P2 TaskMesh`, `P3 EcoFlow`, `P4 HydroSense`).
- 1-click recruiter quick actions: download resume PDF, copy direct email/phone to clipboard with animated feedback.

### 3. Interactive Animated Architecture Diagrams (Project Modals)
- Deep-dive engineering diagnostics modals with interactive SVG data-flow pipelines:
  - **DcoY**: Real-time Dijkstra graph traversal, live threat simulation trigger, and automated decoy honeypot trap deflection counter.
  - **TaskMesh**: 41-dimensional observation state buffer feeding a Policy Gradient RL scheduling agent across a 3-node compute cluster with simulated workload burst balancing.
  - **EcoFlow**: Live IoT fill-level telemetry (50–90%) feeding an OSRM road geometry engine with simulated dynamic fleet rerouting.
  - **HydroSense**: Real-time ESP32 multi-sensor edge low-pass filtering, in-memory buffer, and instant Telegram Bot threshold warning stream.

### 4. Oracle Red Bull Racing Design Aesthetics
- Curated motorsport dark-mode palette:
  - **Grid Dark Background**: `#060B26`
  - **Carbon Composite Blue**: `#091430`
  - **Oracle Blue**: `#1E5BC6`
  - **Red Bull Crimson**: `#DC052D`
  - **Championship Gold**: `#F7D417`
- High-contrast typography, terminal scanline animations, carbon-fiber textures, and custom magnetic cursor hover glows.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend & UI** | React 19, Vite, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3 |
| **3D Graphics** | Three.js, React Three Fiber, @react-three/drei |
| **Backend & APIs** | Python, FastAPI, Node.js, Express.js, WebSockets, REST APIs |
| **Databases & Cache** | MySQL, MongoDB Atlas (Motor async), SQLite, SQLAlchemy & Alembic |
| **Cloud & DevOps** | Docker, GitHub Actions CI/CD, Vercel, Linux/Unix, Bash |
| **AI/ML & IoT** | PyTorch, Scikit-learn, Policy Gradients (RL), OpenAI API, Groq API, ESP32 Microcontrollers |
| **Telemetry & Analytics** | Vercel Analytics, Custom Viewport Observers (`useReveal`) |

---

## 📁 Project Architecture

```
src/
├── assets/                    # Static brand badges and SVG graphics
├── components/
│   ├── hero3d/                # 3D canvas engines (HeroScene, TelemetryRing, HologramPanel, Particles)
│   ├── projectflow/           # Interactive animated SVG data-flow architecture pipelines
│   │   └── ProjectArchitectureFlow.jsx
│   ├── Hero.jsx               # Hero telemetry bar, running lap timer, live status indicator (#22)
│   ├── About.jsx              # Driver profile ID card, education, and career telemetry stats
│   ├── Skills.jsx             # 6 technical specification modules (Engine, Power Unit, Aero, Fuel, Electronics, Telemetry)
│   ├── Projects.jsx           # Race entries (P1–P4) with full recruiter diagnostics modals
│   ├── Experience.jsx         # Championship standings & timeline milestones
│   ├── Contact.jsx            # Pit wall radio console, encrypted channels, and email transmission
│   ├── Navbar.jsx             # Sticky top navigation, active sector tracking, and Ctrl+K search trigger
│   ├── CommandPalette.jsx     # Race Control keyboard-first palette (Ctrl+K / Cmd+K)
│   ├── ScrollProgress.jsx     # Top telemetry progress bar
│   ├── LoadingScreen.jsx      # Initial telemetry sync loader
│   └── SectionDivider.jsx     # F1 apex kerb gradient section dividers
├── hooks/                     # Custom hooks (useReveal)
├── index.css                  # Core design tokens, telemetry scanlines, and cursor glow utilities
├── App.jsx                    # Application root, mouse-glow tracking, and Analytics mount
└── main.jsx                   # React StrictMode entry point
```

---

## 🏆 Featured Race Entries (Projects)

1. **GRAND PRIX DE DCOY (P1)**
   - *Active Defense & Cyber Deception Console*
   - Python, FastAPI, React, TypeScript, SQLAlchemy, Scikit-learn (Isolation Forest), Docker, Dijkstra Graph Traversal.
   - [Live Demo](https://dcoy-anup.vercel.app) • [GitHub](https://github.com/AKJenaX/DcoY)

2. **GRAND PRIX DE TASKMESH (P2)**
   - *RL-Driven Adaptive Distributed Task Scheduler*
   - Python, FastAPI, React, PyTorch, Reinforcement Learning (OpenEnv), Policy Gradients, WebSockets.
   - [Live Demo](https://task-mesh-anup.vercel.app) • [GitHub](https://github.com/AKJenaX/TaskMesh)

3. **GRAND PRIX DE ECOFLOW (P3)**
   - *Smart Waste Logistics & Dynamic Route Optimization*
   - Node.js, Express.js, React, Tailwind CSS, OSRM Road Geometry Graph, WebSockets, Docker, TOTP MFA.
   - [Live Demo](https://eco-flow-neon.vercel.app) • [GitHub](https://github.com/AKJenaX/EcoFlow)

4. **GRAND PRIX DE HYDROSENSE (P4)**
   - *IoT Water Quality Monitoring & Telemetry Gateway*
   - Node.js, Express.js, React, ESP32 Firmware (C++), Telegram Bot API, Razorpay, WebSockets.
   - [GitHub](https://github.com/AKJenaX/HydroSense)

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AKJenaX/Porfolio.git
cd Porfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Local dev server runs at: `http://localhost:5173/`

### Production Build & Linting

```bash
# Run production build
npm run build

# Run ESLint validation
npm run lint

# Preview production build
npm run preview
```

---

## 🚀 Deployment

This project is connected directly to **Vercel** with automatic continuous deployment triggered on every push to the `main` branch.

- **Production URL**: [https://porfolio-anup.vercel.app](https://porfolio-anup.vercel.app)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 📬 Pit Wall Radio // Connect

- **Driver**: Anup Kumar Jena (#22)
- **Email**: [jenaanupkumar824@gmail.com](mailto:jenaanupkumar824@gmail.com)
- **Phone**: [+91 8260779661](tel:+918260779661)
- **GitHub**: [github.com/AKJenaX](https://github.com/AKJenaX)
- **LinkedIn**: [linkedin.com/in/anup-kumar-jena](https://linkedin.com/in/anup-kumar-jena)
