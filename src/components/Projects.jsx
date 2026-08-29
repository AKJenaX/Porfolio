import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import useReveal from '../hooks/useReveal'

const projects = [
  {
    name: 'GRAND PRIX DE DCOY',
    position: 'P1',
    accent: '#00F0FF',
    status: 'DEPLOYED',
    tech: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'SQLAlchemy',
      'Scikit-learn',
      'Docker',
      'JWT',
      'WebSockets',
    ],
    description:
      'Active defense and threat deception console combining Scikit-learn Isolation Forest anomaly scoring, automated honeypot misdirection, MITRE ATT&CK-tagged rule engine, and Dijkstra attack-path graph tracing across network topology.',
    metrics: { tests: '101 Passed', endpoints: 'REST & WS', auth: 'JWT + bcrypt' },
    caseStudy: {
      problem:
        'Traditional security monitoring relies heavily on passive log collection and static threshold alerts, causing alert fatigue and delayed incident response. DcoY actively intercepts telemetry, calculates continuous anomaly scores using machine learning, routes suspicious traffic to virtual honeypots, and structures forensic evidence into trackable cases.',
      architecture: {
        diagram: `
 ┌──────────────────────┐             HTTP / WS Telemetry
 │  User Browser (SPA)  │ ───────────────────────────────────┐
 └──────────────────────┘                                    │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │  Cloudflare Pages   │
                                                  │    (Edge CDN)       │
                                                  └─────────────────────┘
                                                             │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │   Render Backend    │
                                                  │  (FastAPI Router)   │
                                                  └─────────────────────┘
                                                             │
                                ┌────────────────────────────┴────────────────────────────┐
                                ▼                                                         ▼
                    ┌───────────────────────┐                                 ┌───────────────────────┐
                    │ Isolation Forest & ML │                                 │ Dijkstra Path Graph   │
                    │ (Anomaly Evaluator)   │                                 │ (Attacker Topology)   │
                    └───────────────────────┘                                 └───────────────────────┘
                                │                                                         │
                                ▼                                                         ▼
                    ┌───────────────────────┐                                 ┌───────────────────────┐
                    │ Honeypot Misdirection │                                 │  SQLAlchemy / SQLite  │
                    │   (Decoy Routing)     │                                 │  (Alembic Migrations) │
                    └───────────────────────┘                                 └───────────────────────┘
        `,
        components: [
          {
            name: 'Threat Detection Engine',
            desc: 'Scikit-learn Isolation Forest model scoring telemetry anomalies alongside MITRE ATT&CK-tagged rule evaluation.',
          },
          {
            name: 'Honeypot Misdirection Router',
            desc: 'Dynamically maps high-risk IP addresses to synthetic honeypot listeners (SSH, HTTP, Database traps).',
          },
          {
            name: 'Attack Path Graph Engine',
            desc: 'Calculates compromise propagation paths using Dijkstra shortest-path algorithms across network topology.',
          },
          {
            name: 'Hardened Auth & Observability',
            desc: 'JWT sessions with bcrypt hashing, SHA-256 hashed API keys with constant-time comparison, request-correlation IDs, and Prometheus metrics.',
          },
        ],
        dataFlow: [
          'Live telemetry streams over WebSocket and REST endpoints with unique X-Request-ID headers for end-to-end tracing.',
          'Isolation Forest model computes real-time anomaly scores while rule engine evaluates MITRE ATT&CK threshold triggers.',
          'High-risk threat actors trigger dynamic misdirection to decoy honeypots and Dijkstra path graph recalculation.',
          'Forensic evidence and incident cases persist via SQLAlchemy with Alembic schema migration management.',
        ],
      },
      techStack: {
        frontend: ['React 18', 'TypeScript 5', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
        backend: ['Python 3.11', 'FastAPI', 'Uvicorn', 'Pytest (101 Tests)', 'Prometheus Metrics'],
        database: ['SQLite', 'SQLAlchemy ORM', 'Alembic Migrations'],
        cloud: ['Docker', 'Docker Compose', 'Cloudflare Pages (Frontend)', 'Render (Backend)'],
        aiMl: ['Scikit-learn (Isolation Forest)', 'Dijkstra Graph Algorithms', 'Pandas & NumPy'],
      },
      challenges: [
        {
          title: 'Alert Fatigue from Static Detection Rules',
          problem:
            'Traditional threshold alerting produces high false-positive rates during benign network traffic spikes, overloading SOC analysts.',
          solution:
            'Combined unsupervised Scikit-learn Isolation Forest anomaly scoring with a dynamic MITRE ATT&CK rule engine to rank threat severity dynamically before triggering alerts.',
          tradeoff: 'Requiring initial feature vector normalization in exchange for eliminating static alert noise.',
        },
        {
          title: 'Secure Authentication & API Key Tracing',
          problem:
            'Microservice endpoints exposed to public networks require low-overhead authentication without timing attack vulnerabilities on API key verification.',
          solution:
            'Implemented JWT session authorization with bcrypt password hashing and SHA-256 hashed API keys utilizing constant-time string comparisons (hmac.compare_digest).',
          tradeoff: 'Small cryptographic hashing overhead per request to prevent side-channel timing attacks.',
        },
      ],
      outcome: {
        results: [
          'Built and verified a resilient active defense console backed by 101 passing Pytest unit and integration tests.',
          'Deployed production stack to Cloudflare Pages (frontend) and Render (backend) with Docker containers and Alembic schema migrations.',
        ],
        learnings:
          'Gained deep expertise in active defense paradigms, constant-time cryptographic practices, and graph traversal algorithms for threat propagation modeling.',
      },
      links: {
        github: 'https://github.com/AKJenaX/DcoY',
        live: 'https://dcoy.pages.dev',
        diagram: 'https://github.com/AKJenaX/DcoY#architecture',
      },
    },
  },
  {
    name: 'GRAND PRIX DE TASKMESH',
    position: 'P2',
    accent: '#FFFFFF',
    status: 'HACKATHON',
    tech: ['Python', 'PyTorch', 'FastAPI', 'OpenEnv', 'Policy Gradient RL'],
    description:
      'Distributed task scheduler API implementing a PyTorch policy-gradient agent operating in a custom 41-dimensional OpenEnv observation space to dynamically route bursty workloads across scheduling queues.',
    metrics: { delayReduction: '15%+', obsSpace: '41-dim', actionSpace: '20 discrete' },
    caseStudy: {
      problem:
        'Conventional load balancing (e.g. FIFO, Shortest-Job-First) relies on static heuristics that fail under bursty, unpredictable workloads—causing critical tasks to stall behind background operations.',
      architecture: {
        diagram: `
 ┌──────────────────────┐             Task Ingestion Queue
 │   Task Entry Queue   │ ───────────────────────────────────┐
 └──────────────────────┘                                    │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │  Policy Gradient RL │
                                                  │  (PyTorch / OpenEnv)│
                                                  └─────────────────────┘
                                                             │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │ Shaped Reward Engine│
                                                  │ (Wait/Priority Math)│
                                                  └─────────────────────┘
                                                             │
                                ┌────────────────────────────┼────────────────────────────┐
                                ▼                            ▼                            ▼
                    ┌───────────────────────┐    ┌───────────────────────┐    ┌───────────────────────┐
                    │    41-Dim Obs Space   │    │  20-Discrete Actions  │    │ FastAPI Telemetry API │
                    │ (Time/Queue Features) │    │  (Selected Task Index)│    │  (Training Engine)    │
                    └───────────────────────┘    └───────────────────────┘    └───────────────────────┘
        `,
        components: [
          {
            name: 'OpenEnv Scheduling Env',
            desc: 'Custom environment featuring a 41-dimensional observation space (time, queued task priorities & durations) and a 20-index discrete action space.',
          },
          {
            name: 'Policy-Gradient Agent',
            desc: 'PyTorch RL model trained with a shaped reward function balancing execution speed, urgency, and illegal-action penalties.',
          },
          {
            name: 'Shaped Reward Engine',
            desc: 'Computes reward = (priority * 10) - wait_time with a severe -100 penalty for illegal scheduling choices.',
          },
          {
            name: 'FastAPI Backend & Telemetry',
            desc: 'Backend microservice driving queue simulations, tracking state transitions, and serving inference endpoints.',
          },
        ],
        dataFlow: [
          'Tasks enter the scheduling queue with dynamic priority levels and execution duration bounds.',
          'Policy-gradient agent observes the 41-dim environment state and selects the optimal task index from the 20 discrete actions.',
          'Selected task executes while the reward function computes penalties for queue wait times and multipliers for high priority.',
          'RL model adjusts policy weights over 300 training episodes, eliminating illegal moves and optimizing throughput.',
        ],
      },
      techStack: {
        frontend: ['Task Analytics Console (FastAPI docs / JSON output)'],
        backend: ['Python 3.11', 'FastAPI', 'PyTorch'],
        database: ['In-Memory Queue State'],
        cloud: ['Docker', 'OpenEnv Framework'],
        aiMl: ['Policy Gradient RL', 'PyTorch', 'Hugging Face TRL Concepts', 'OpenEnv'],
      },
      challenges: [
        {
          title: 'Static Heuristic Starvation Under Bursty Workloads',
          problem:
            'Traditional scheduling heuristics (FIFO, SJF) cannot adapt to unpredictable task bursts, leading to extreme tail latencies for critical jobs.',
          solution:
            'Built a custom OpenEnv environment with shaped rewards penalizing wait times and rewarding urgent task dispatch, trained via PyTorch policy gradients.',
          tradeoff: 'Requiring model training iterations over 300 episodes in exchange for dynamic policy adaptability.',
        },
      ],
      outcome: {
        results: [
          'Consistently reduced average task delay by over 15% compared to baseline static heuristics (FIFO, SJF).',
          'Built as part of a 3-person team for OpenEnv Hackathon India 2026, owning backend integration and core model training.',
        ],
        learnings:
          'Mastered custom OpenEnv environment design, reward shaping math, and policy-gradient RL training pipelines for real-time algorithmic decision-making.',
      },
      links: {
        github: 'https://github.com/AKJenaX/TaskMesh',
        diagram: 'https://github.com/AKJenaX/TaskMesh#readme',
      },
    },
  },
  {
    name: 'GRAND PRIX DE ECOFLOW',
    position: 'P3',
    accent: '#F7D417',
    status: 'DEPLOYED',
    tech: [
      'React 19',
      'Node.js',
      'Express',
      'MySQL',
      'WebSockets',
      'Docker',
      'Leaflet',
      'OpenAI API',
      'GitHub Actions',
    ],
    description:
      'Municipal fleet-ops platform with forced MFA (TOTP + QR), OSRM live route re-optimization (50–90% threshold), real-time IoT WebSocket telemetry (fill %, GPS, smoke, tilt), 24h predictive forecasting, and OpenAI operator queries.',
    metrics: { routeSaved: '32% Fuel', liveTelemetry: '<80ms WS', mfaSecurity: 'TOTP + RBAC' },
    caseStudy: {
      problem:
        'Municipal waste collections are traditionally scheduled statically, causing trucks to check half-empty bins while overflowing containers remain neglected. EcoFlow builds a secure, real-time fleet operations system with live OSRM route re-optimization, forced TOTP MFA, and 24-hour predictive accumulation modeling.',
      architecture: {
        diagram: `
 ┌───────────────────────┐             IoT Sensor Telemetry
 │  IoT Container Nodes  │ ───────────────────────────────────┐
 │ (Fill %, GPS, Smoke)  │                                    │
 └───────────────────────┘                                    ▼
                                                   ┌─────────────────────┐
                                                   │  WebSocket Ingest   │
                                                   │  (Node.js/Express)  │
                                                   └─────────────────────┘
                                                              │
                                ┌──────────────────────────────┴───────────────┐
                                ▼                                              ▼
                    ┌───────────────────────┐                      ┌───────────────────────┐
                    │    OSRM Route Engine  │                      │   Broadcast Engine    │
                    │ (Live Re-Optimization)│                      │    (Live WS Server)   │
                    └───────────────────────┘                      └───────────────────────┘
                                │                                              │
                                ▼                                              ▼
                    ┌───────────────────────┐                      ┌───────────────────────┐
                    │    MySQL Database     │                      │   Leaflet Dashboard   │
                    │ (Normalized + Audit)  │                      │ (Fleet Telemetry/Maps)│
                    └───────────────────────┘                      └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ OpenAI & 24h Forecast │
                    │ (Predictive & Query)  │
                    └───────────────────────┘
        `,
        components: [
          {
            name: 'MFA & RBAC Security Engine',
            desc: 'Forced MFA with TOTP and QR code enrollment alongside role-based access control and full audit logging.',
          },
          {
            name: 'OSRM Route Re-Optimizer',
            desc: 'Calculates dynamic collection routes on OSRM road geometry against adjustable bin-fill thresholds (50–90%).',
          },
          {
            name: 'Real-Time WebSocket Pipeline',
            desc: 'Streams multi-sensor IoT metrics (fill %, GPS, smoke, tilt) into a filterable Leaflet dashboard for fleet operators.',
          },
          {
            name: 'Predictive Service & OpenAI Assistant',
            desc: '24-hour waste accumulation forecasting and anomaly detection on MySQL, with an OpenAI assistant for operator natural language queries.',
          },
        ],
        dataFlow: [
          'IoT nodes stream sensor telemetry (fill %, GPS coordinates, smoke, tilt) via WebSockets to Express gateway.',
          'Gateway evaluates bin-fill thresholds (50–90%) and recalculates collection routes dynamically via OSRM.',
          'State updates broadcast live to the Leaflet operator map interface with sub-80ms rendering latency.',
          'Normalized MySQL schema stores audit logs, while 24h predictive models and OpenAI assistant answer operator queries.',
        ],
      },
      techStack: {
        frontend: ['React 19', 'Vite', 'Leaflet Maps', 'Tailwind CSS', 'WebSockets'],
        backend: ['Node.js', 'Express.js', 'ws (WebSockets)', 'OSRM Engine'],
        database: ['MySQL (Normalized Schema)', 'Audit Logging'],
        cloud: ['Docker', 'GitHub Actions CI/CD', 'Vercel'],
        aiMl: ['OpenAI API (Assistant & Forecasting)', 'Anomaly Detection'],
      },
      challenges: [
        {
          title: 'Dynamic Route Optimization with Road Geometry Constraints',
          problem:
            'Static municipal collection schedules cause trucks to visit low-priority bins while overflowing containers cause delays and fuel waste.',
          solution:
            'Integrated OSRM road geometry calculations to dynamically recalculate collection sequences on the fly when bin fill levels cross 50–90% thresholds.',
          tradeoff: 'Real-time routing calculation overhead balanced with cached distance matrix lookups.',
        },
        {
          title: 'Fleet Security & Multi-Tenant Authorization',
          problem:
            'Single-factor JWT baselines leave municipal control consoles susceptible to credential stuffing and unauthorized dispatch commands.',
          solution:
            'Engineered forced MFA with TOTP and QR code enrollment, pairing it with strict role-based access control and tamper-evident audit logging.',
          tradeoff: 'Extra enrollment step for dispatch operators in return for hardened municipal system integrity.',
        },
      ],
      outcome: {
        results: [
          'Cut route inefficiency by building live route re-optimization on OSRM road geometry with 50–90% adjustable fill thresholds.',
          'Shipped CI/CD via GitHub Actions to Vercel, with Docker for dev/prod parity end to end.',
        ],
        learnings:
          'Mastered OSRM route graph integration, TOTP MFA security implementations, and high-frequency WebSocket state streaming.',
      },
      links: {
        github: 'https://github.com/AKJenaX/EcoFlow',
        live: 'https://eco-flow-neon.vercel.app',
        diagram: 'https://github.com/AKJenaX/EcoFlow#readme',
      },
    },
  },
  {
    name: 'GRAND PRIX DE HYDROSENSE',
    position: 'P4',
    accent: '#C0C0C0',
    status: 'DEPLOYED',
    tech: [
      'Node.js',
      'Express.js',
      'React',
      'In-Memory (Map)',
      'ESP32',
      'Telegram Bot API',
      'Razorpay',
      'WebSockets',
    ],
    description:
      'IoT telemetry processor and API gateway collecting real-time water metrics from ESP32 nodes into an in-memory Map store, enforcing daily usage limits, and dispatching alerts via Telegram Bot hooks.',
    metrics: { uptime: '98.5%', latency: '<120ms', sensors: '12' },
    caseStudy: {
      problem: 'Remote water tanks and storage systems are highly susceptible to sudden overflow issues and rapid quality degradation. Manual checks are infrequent, causing delayed actions that lead to equipment damage or health concerns.',
      architecture: {
        diagram: `
 ┌──────────────────────┐            Telemetry Inflow
 │  ESP32 Edge Sensors  │ ───────────────────────────────────┐
 │ (pH, TDS, turbidity) │                                    │
 └──────────────────────┘                                    ▼
                                                   ┌─────────────────────┐
                                                   │  Telemetry Gateway  │
                                                   │  (Node.js/Express)  │
                                                   └─────────────────────┘
                                                              │
                                ┌─────────────────────────────┴───────────────┐
                                ▼                                             ▼
                    ┌───────────────────────┐                     ┌───────────────────────┐
                    │    Alert Evaluator    │                     │   In-Memory Store     │
                    │   (Telegram Bot API)  │                     │        (Map)          │
                    └───────────────────────┘                     └───────────────────────┘
                                │                                             │
                                ▼                                             ▼
                    ┌───────────────────────┐                     ┌───────────────────────┐
                    │   Operator Handset    │                     │   React Web Console   │
                    │  (Instant Warnings)   │                     │  (Razorpay / Charts)  │
                    └───────────────────────┘                     └───────────────────────┘
        `,
        components: [
          {
            name: 'ESP32 Firmware',
            desc: 'Embedded C++ application reading analog inputs, managing Wi-Fi state machines, and shipping JSON payloads over WebSockets.',
          },
          {
            name: 'Gateway REST/WS',
            desc: 'Node.js Express backend microservice processing telemetry streams into an in-memory Map store.',
          },
          {
            name: 'Telegram Bot Hub',
            desc: 'Sends target operator alerts on threshold violations and daily usage limit breaches.',
          },
          {
            name: 'Razorpay Gateway',
            desc: 'Secure payment interface to purchase additional water usage allocation overage.',
          },
        ],
        dataFlow: [
          'ESP32 edge hardware samples sensor parameters and streams real-time telemetry payloads over WebSockets.',
          'Gateway validates headers, stores current state in an in-memory Map, and checks values against dynamic safe zones.',
          'Tiered daily usage limits (home/apartment/commercial/industry) reset automatically at midnight Asia/Kolkata timezone.',
          'On limit breaches or sensor anomalies, Telegram Bot pushes immediate warnings while React console enables Razorpay top-ups.',
        ],
      },
      techStack: {
        frontend: ['React', 'Tailwind CSS', 'Chart.js'],
        backend: ['Node.js', 'Express.js', 'Telegram Bot API', 'WebSockets'],
        database: ['In-memory (Map) — no persistent database'],
        cloud: ['Razorpay SDK', 'ESP32 C++ Hardware'],
      },
      challenges: [
        {
          title: 'Analog Signal Fluctuations on Edge',
          problem:
            'Fluid agitation inside tanks triggered volatile, noisy analog reads on pH and TDS probes, causing false anomaly alerts.',
          solution:
            'Implemented a sliding window moving average low-pass filter on the ESP32 firmware side to smooth electrical noise prior to pushing to the API.',
          tradeoff: 'Accepting a minor 5-second latency offset in parameter changes to guarantee 0% false alerting logs.',
        },
      ],
      outcome: {
        results: [
          'Built an ESP32-to-dashboard real-time telemetry pipeline replacing delayed billing cycles with live usage visibility.',
          'Led backend development on a 4-person team during Samsung Innovation Campus training.',
        ],
        learnings:
          'Learned real-time WebSocket protocol handling, timezone-aware cron reset patterns, and hardware sensor signal calibration.',
      },
      links: {
        github: 'https://github.com/AKJenaX/HydroSense',
        diagram: 'https://github.com/AKJenaX/HydroSense#readme',
      },
    },
  },
]

const statusColors = {
  DEPLOYED: '#22c55e',
  LIVE: '#22c55e',
  HACKATHON: '#1E5BC6',
}

const tabs = [
  { id: 'specs', label: 'TELEMETRY & SPECS' },
  { id: 'diagnostics', label: 'DIAGNOSTICS' },
  { id: 'outcome', label: 'SESSION OUTCOME' },
]

function Projects() {
  const [sectionRef, isVisible] = useReveal(0.12)
  const [activeProject, setActiveProject] = useState(null)
  const [activeTab, setActiveTab] = useState('specs')

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      }
    }
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown)
      // Prevent body scrolling
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const openDiagnostics = (project) => {
    setActiveProject(project)
    setActiveTab('specs')
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
    >
      {/* Section sweep calibration line */}
      {isVisible && (
        <div className="section-sweep-line" style={{ '--sweep-color': '#F7D417' }} />
      )}
      <style>{`
        @keyframes modal-fade-in {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(8px); }
        }
        @keyframes modal-scale-in {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes hud-scan {
          0% { top: 0%; opacity: 0.8; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-fade-in {
          animation: modal-fade-in 0.2s ease-out forwards;
        }
        .animate-scale-in {
          animation: modal-scale-in 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.15) forwards;
        }
        .modal-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--modal-accent, #DC052D), transparent);
          box-shadow: 0 0 12px var(--modal-accent, #DC052D);
          pointer-events: none;
          z-index: 50;
          animation: hud-scan 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .tab-btn {
          position: relative;
          transition: color 0.2s ease;
        }
        .tab-btn::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 2px;
          background-color: var(--tab-accent, #DC052D);
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .tab-btn.active {
          color: white;
        }
        .tab-btn.active::after {
          transform: scaleX(1);
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .project-card {
          box-shadow: var(--card-shadow-normal);
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
        }
        .project-card:hover {
          box-shadow: var(--card-shadow-hover);
        }
      `}</style>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_28%,rgba(30,91,198,0.1),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#F7D417]/45 to-transparent" />
        <p className="mb-12 font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">04</span> — RACE ENTRIES
        </p>
        <h2
          id="projects-heading"
          className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/65 sm:text-2xl"
        >
          Every Grand Prix represents a real engineering challenge solved through software.
        </h2>

        <div className={`stagger-children mt-12 space-y-4 sm:space-y-5 ${isVisible ? 'is-visible' : ''}`}>
          {projects.map((project) => {
            const { name, position, accent, status, tech, description, metrics } = project
            return (
              <article
                key={name}
                className="border-trace cursor-glow group relative overflow-hidden border border-l-4 border-white/8 bg-[#091430] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 project-card"
                style={{
                  '--project-accent': accent,
                  '--card-shadow-normal': `-5px 0 18px ${accent}1a, 0 18px 45px rgba(0,0,0,0.2)`,
                  '--card-shadow-hover': `-5px 0 25px ${accent}33, 0 24px 50px rgba(0,0,0,0.45)`,
                  borderLeftColor: accent,
                  backgroundImage:
                    'linear-gradient(110deg, rgba(255,255,255,0.02), transparent 48%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
                }}
              >
                <div className="grid sm:grid-cols-[5.5rem_minmax(0,1fr)]">
                  {/* Position badge */}
                  <div className="flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-4 sm:flex-col sm:justify-start sm:border-r sm:border-b-0 sm:px-3 sm:py-6">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase">Position</span>
                    <span
                      className="font-mono text-3xl leading-none font-black italic sm:mt-3 sm:text-4xl"
                      style={{
                        color: accent,
                        textShadow: `0 0 20px ${accent}44`,
                      }}
                    >
                      {position}
                    </span>
                  </div>

                  <div className="relative min-w-0 p-5 sm:p-6 lg:p-7">
                    {/* Hover Red Bull red-blue gradient animation flow background overlay */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, #DC052D 0%, #091430 50%, #1E5BC6 100%)',
                        backgroundSize: '200% 200%',
                        animation: 'gradient-flow 8s ease infinite',
                        zIndex: 0,
                      }}
                    />
                    <div className="relative z-10">
                      {/* Header row */}
                      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                        <h3
                          className="text-xl leading-tight font-black italic tracking-[-0.02em] uppercase sm:text-2xl lg:text-3xl"
                          style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
                        >
                          {name}
                        </h3>
                        <span
                          className="flex shrink-0 items-center gap-2 rounded-full border bg-[#060B26] px-3 py-1 font-mono text-[9px] font-bold tracking-[0.18em] uppercase"
                          style={{ borderColor: accent, color: accent }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor: statusColors[status] || accent,
                              boxShadow: `0 0 6px ${statusColors[status] || accent}88`,
                              animation: 'status-blink 2s ease-in-out infinite',
                            }}
                          />
                          {status}
                        </span>
                      </div>

                      <div className="mt-4 h-px w-full bg-gradient-to-r from-white/12 to-transparent" />
                      <p className="mt-4 max-w-5xl text-sm leading-7 text-white/52 sm:text-base sm:leading-8">{description}</p>

                      {/* Telemetry metrics — visible on hover */}
                      <div className="mt-4 grid max-h-0 grid-cols-3 gap-2 overflow-hidden opacity-0 transition-[max-height,opacity,margin] duration-400 ease-out group-hover:mt-5 group-hover:max-h-24 group-hover:opacity-100">
                        {Object.entries(metrics).map(([key, value]) => (
                          <div key={key} className="border border-white/8 bg-[#060B26]/60 p-2.5">
                            <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/30 uppercase">{key}</p>
                            <p className="mt-1 font-mono text-sm font-black" style={{ color: accent }}>
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech chips */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {tech.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border bg-[#060B26] px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-[box-shadow,background-color] duration-200 hover:bg-white/[0.02] hover:shadow-[0_0_10px_var(--project-accent)] sm:text-xs"
                            style={{ borderColor: accent, color: accent }}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
                        <a
                          href={project.caseStudy.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="magnetic-btn inline-flex min-h-10 items-center gap-2 bg-[#1E5BC6] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#2a6ad4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                          </svg>
                          GitHub
                        </a>
                        {project.caseStudy.links?.live && (
                          <a
                            href={project.caseStudy.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="magnetic-btn inline-flex min-h-10 items-center gap-2 bg-[#DC052D] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#e8163d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                          >
                            Live Demo ↗
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openDiagnostics(project)}
                          className="inline-flex min-h-10 cursor-pointer items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white/65 uppercase transition-[border-color,color] hover:border-[var(--project-accent)] hover:text-[var(--project-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                        >
                          Diagnostics <span aria-hidden="true">📊</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Recruiter-Focused Engineering Case Study Modal */}
      {activeProject && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[#060B26]/90 p-4 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="animate-scale-in relative flex h-[90vh] w-full max-w-4xl flex-col border border-white/12 bg-[#091430] text-white shadow-[0_24px_70px_rgba(0,0,0,0.65)] sm:h-[82vh] overflow-hidden"
            style={{
              borderTopColor: activeProject.accent,
              borderTopWidth: '4px',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Sweep Calibration Line */}
            <div className="modal-scanline" style={{ '--modal-accent': activeProject.accent }} />
            {/* Modal Top Telemetry Strip */}
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 bg-black/20 px-6 py-4 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animation: 'status-blink 1.5s infinite' }} />
                <span>Diagnostics open / Telemetry Live</span>
              </div>
              <div className="flex items-center gap-4">
                <span>POS / {activeProject.position}</span>
                <span>STATUS / {activeProject.status}</span>
              </div>
            </header>

            {/* Title & Close Button */}
            <div className="flex items-center justify-between px-6 pt-5">
              <div>
                <h3
                  id="case-study-title"
                  className="text-2xl leading-none font-black italic tracking-tight uppercase sm:text-3xl"
                  style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
                >
                  {activeProject.name}
                </h3>
                <p className="mt-1 font-mono text-[9px] font-bold tracking-[0.16em] uppercase" style={{ color: activeProject.accent }}>
                  Engineering Case Study
                </p>
              </div>
              <button
                type="button"
                aria-label="Close diagnostics panel"
                onClick={() => setActiveProject(null)}
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.02] text-white/60 transition-[border-color,color,box-shadow] hover:border-[#DC052D] hover:text-[#DC052D] hover:shadow-[0_0_12px_rgba(220,5,45,0.4)]"
              >
                ✕
              </button>
            </div>

            {/* Telemetry Tabs */}
            <nav className="mt-6 flex border-b border-white/8 px-6 font-mono text-[9px] font-bold tracking-[0.18em] sm:text-xs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn px-4 py-3 text-white/40 uppercase ${activeTab === tab.id ? 'active' : 'hover:text-white/70'}`}
                  style={{ '--tab-accent': activeProject.accent }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin">
              {activeTab === 'specs' && (
                <section className="space-y-6 animate-fade-in">
                  {/* Categorized Tech Stack */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">01 / TECH CLASSIFICATION</h4>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {Object.entries(activeProject.caseStudy.techStack).map(([layer, list]) => (
                        <div key={layer} className="border border-white/5 bg-black/10 p-3">
                          <p className="font-mono text-[8px] font-black tracking-widest text-[#F7D417] uppercase">{layer}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {list.map((t) => (
                              <span key={t} className="bg-[#060B26] border border-white/8 px-2 py-0.5 font-mono text-[9px] font-medium text-white/70">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* System Architecture Diagram */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">02 / PIPELINE ARCHITECTURE</h4>
                    <div className="relative mt-3">
                      <pre className="font-mono text-[8px] sm:text-[10px] leading-tight bg-black/50 p-4 overflow-x-auto text-[#22c55e] border border-white/8 whitespace-pre">
                        {activeProject.caseStudy.architecture.diagram.trim()}
                      </pre>
                    </div>
                  </div>

                  {/* Key Components */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">03 / KEY COMPONENTS</h4>
                      <ul className="mt-3 space-y-2.5 font-sans text-xs sm:text-sm text-white/70">
                        {activeProject.caseStudy.architecture.components.map((comp) => (
                          <li key={comp.name} className="border-l border-white/12 pl-3">
                            <strong className="block text-white font-mono tracking-wide uppercase text-[10px]" style={{ color: activeProject.accent }}>{comp.name}</strong>
                            <span className="block mt-0.5 leading-relaxed text-white/60">{comp.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">04 / DATA TRANSIT FLOW</h4>
                      <ol className="mt-3 list-decimal list-inside space-y-2.5 font-sans text-xs sm:text-sm text-white/60">
                        {activeProject.caseStudy.architecture.dataFlow.map((flow) => (
                          <li key={flow} className="leading-relaxed pl-1">
                            <span className="text-white/70">{flow}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'diagnostics' && (
                <section className="space-y-6 animate-fade-in">
                  {/* Problem Statement */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">01 / REAL-WORLD PROBLEM</h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{activeProject.caseStudy.problem}</p>
                  </div>

                  {/* Challenges Section */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">02 / CORE ENGINEERING CHALLENGES</h4>
                    <div className="mt-3 space-y-4">
                      {activeProject.caseStudy.challenges.map((challenge) => (
                        <div key={challenge.title} className="border border-white/8 bg-black/10 p-4">
                          <h5 className="font-mono text-[11px] font-black tracking-wide text-white uppercase" style={{ color: activeProject.accent }}>
                            ★ {challenge.title}
                          </h5>
                          <div className="mt-3 grid gap-4 md:grid-cols-2">
                            <div>
                              <p className="font-mono text-[8px] tracking-widest text-[#DC052D] uppercase">THE PROBLEM &amp; CONSTRAINT</p>
                              <p className="mt-1 text-xs leading-relaxed text-white/60">{challenge.problem}</p>
                            </div>
                            <div>
                              <p className="font-mono text-[8px] tracking-widest text-[#22c55e] uppercase">THE RESOLUTION</p>
                              <p className="mt-1 text-xs leading-relaxed text-white/60">{challenge.solution}</p>
                            </div>
                          </div>
                          <div className="mt-3 border-t border-white/5 pt-3">
                            <p className="font-mono text-[8px] tracking-widest text-white/40 uppercase">TRADE-OFFS INVOLVED</p>
                            <p className="mt-1 text-xs leading-relaxed text-white/60 italic">{challenge.tradeoff}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'outcome' && (
                <section className="space-y-6 animate-fade-in">
                  {/* Key Metrics */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">01 / QUANTITATIVE OUTCOME</h4>
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {Object.entries(activeProject.metrics).map(([key, value]) => (
                        <div key={key} className="border border-white/8 bg-black/20 p-4 text-center">
                          <p className="font-mono text-[8px] font-bold tracking-widest text-white/30 uppercase">{key}</p>
                          <p className="mt-1 font-mono text-2xl font-black italic tracking-wide" style={{ color: activeProject.accent }}>
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accomplishments */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">02 / CORE ACCOMPLISHMENTS</h4>
                    <ul className="mt-3 space-y-2">
                      {activeProject.caseStudy.outcome.results.map((result) => (
                        <li key={result} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
                          <span className="text-[#22c55e] font-bold font-mono">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key takeaways */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">03 / KEY LEARNING TAKEAways</h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 bg-[#060B26]/40 p-4 border border-white/5 italic">
                      &quot;{activeProject.caseStudy.outcome.learnings}&quot;
                    </p>
                  </div>
                </section>
              )}
            </div>

            {/* Modal Footer (Action Links) */}
            <footer className="flex flex-wrap items-center gap-3 border-t border-white/8 bg-black/10 px-6 py-4">
              {activeProject.caseStudy.links.github && (
                <a
                  href={activeProject.caseStudy.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex min-h-9 items-center gap-2 bg-[#1E5BC6] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#2a6ad4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                >
                  GitHub Repository
                </a>
              )}
              {activeProject.caseStudy.links.live && (
                <a
                  href={activeProject.caseStudy.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex min-h-9 items-center gap-2 bg-[#DC052D] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#e8163d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                >
                  Live Demo
                </a>
              )}
              {activeProject.caseStudy.links.diagram && (
                <a
                  href={activeProject.caseStudy.links.diagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-2 border border-white/12 bg-white/[0.02] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white/60 uppercase transition-colors hover:border-white/20 hover:text-white"
                >
                  Architecture Spec ↗
                </a>
              )}
            </footer>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
