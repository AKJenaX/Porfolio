import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import useReveal from '../hooks/useReveal'

const projects = [
  {
    name: 'GRAND PRIX DE ECOFLOW',
    position: 'P1',
    accent: '#F7D417',
    status: 'DEPLOYED',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MySQL',
      'WebSockets',
      'Docker',
      'Leaflet',
      'OpenAI API',
      'GitHub Actions',
    ],
    description:
      'IoT-enabled smart waste management backend with a real-time WebSocket telemetry pipeline, MySQL database write-coalescing, OpenAI-powered schedule optimization, and containerized Docker CI/CD deployment.',
    metrics: { uptime: '99.2%', latency: '<80ms', users: '150+' },
    caseStudy: {
      problem: 'Municipal waste collections are traditionally scheduled statically, causing trucks to check half-empty containers (wasting fuel and labor) while overflowing containers remain neglected. The goal was to build a system that dynamically allocates routes based on live fill levels.',
      architecture: {
        diagram: `
 ┌───────────────────────┐             Telemetry Payload
 │  IoT Container Nodes  │ ───────────────────────────────────┐
 │ (ESP32 / Simulators)  │                                    │
 └───────────────────────┘                                    ▼
                                                   ┌─────────────────────┐
                                                   │  WebSocket Ingest   │
                                                   │  (Node.js/Express)  │
                                                   └─────────────────────┘
                                                              │
                               ┌──────────────────────────────┴───────────────┐
                               ▼                                              ▼
                   ┌───────────────────────┐                      ┌───────────────────────┐
                   │    Write-Coalescer    │                      │   Broadcast Engine    │
                   │   (5s Buffer Queue)   │                      │    (Live WS Server)   │
                   └───────────────────────┘                      └───────────────────────┘
                               │                                              │
                               ▼                                              ▼
                   ┌───────────────────────┐                      ┌───────────────────────┐
                   │    MySQL Database     │                      │    React Dashboard    │
                   │   (State & History)   │                      │   (Leaflet/Chartjs)   │
                   └───────────────────────┘                      └───────────────────────┘
                               │
                               ▼
                   ┌───────────────────────┐
                   │    OpenAI Optimizer   │
                   │ (Dynamic Dispatcher)  │
                   └───────────────────────┘
        `,
        components: [
          { name: 'IoT Telemetry Engine', desc: 'Simulates sensor streams pushing bin levels and voltage status over secure WebSocket lines.' },
          { name: 'Ingest Gateway', desc: 'Node.js & Express server hosting WebSockets for active streams and REST endpoints for static operations.' },
          { name: 'OpenAI Agent', desc: 'Queries MySQL database daily to detect anomalous consumption spikes and recommend optimized dispatch lists.' },
          { name: 'Dashboard Client', desc: 'React app leveraging Leaflet.js maps for spatial telemetry rendering and Chart.js for bin fill velocity.' }
        ],
        dataFlow: [
          'Bins stream telemetry payload (fill percentage, battery, timestamp) via WebSockets.',
          'Gateway processes stream, triggers client state broadcasts, and enqueues record into write-coalescing buffer.',
          'Every 5 seconds, database broker flushes buffer queue to MySQL database in a single query transaction.',
          'OpenAI route optimizer runs asynchronously to predict collection schedules and alert dispatch teams.'
        ]
      },
      techStack: {
        frontend: ['React', 'Vite', 'Leaflet Maps', 'Chart.js'],
        backend: ['Node.js', 'Express.js', 'ws (WebSockets)'],
        database: ['MySQL'],
        cloud: ['Docker', 'GitHub Actions'],
        aiMl: ['OpenAI API (GPT-4o)']
      },
      challenges: [
        {
          title: 'High-Frequency Ingestion DB Bottlenecks',
          problem: 'Simultaneously capturing live telemetry updates from 100+ simulated bins caused excessive database lock contention and CPU spikes on the MySQL instance.',
          solution: 'Implemented a custom memory write-coalescing buffer in Node.js. Instead of hitting the database on every event, telemetry payloads are buffered and flushed to MySQL using bulk inserts every 5 seconds.',
          tradeoff: 'Accepting up to 5 seconds of latency on historical database queries in exchange for an 85% drop in MySQL write lock overhead.'
        }
      ],
      outcome: {
        results: [
          'Calculated a simulated 32% reduction in fleet fuel consumption via dynamically optimized routing.',
          'Sustained sub-80ms client-side UI telemetry rendering latency under high update frequency.'
        ],
        learnings: 'Gained hands-on experience with write-buffering patterns, balancing real-time data flows against disk write lock limitations.'
      },
      links: {
        github: 'https://github.com/AKJenaX/EcoFlow',
        live: 'https://ecoflow.demo.anupjena.dev',
        diagram: 'https://ecoflow.demo.anupjena.dev/docs/architecture'
      }
    }
  },
  {
    name: 'GRAND PRIX DE HYDROSENSE',
    position: 'P2',
    accent: '#C0C0C0',
    status: 'DEPLOYED',
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB Atlas', 'ESP32', 'Telegram Bot API', 'Razorpay', 'WebSockets'],
    description:
      'IoT telemetry processor and API gateway collecting real-time water metrics from ESP32 nodes, storing historical data in MongoDB Atlas, and dispatching threshold alerts via Telegram Bot hooks.',
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
                   │    Alert Evaluator    │                     │     MongoDB Atlas     │
                   │   (Telegram Bot API)  │                     │   (Telemetry Store)   │
                   └───────────────────────┘                     └───────────────────────┘
                               │                                             │
                               ▼                                             ▼
                   ┌───────────────────────┐                     ┌───────────────────────┐
                   │   Operator Handset    │                     │   React Web Console   │
                   │  (Instant Warnings)   │                     │  (Razorpay / Charts)  │
                   └───────────────────────┘                     └───────────────────────┘
        `,
        components: [
          { name: 'ESP32 Firmware', desc: 'Embedded C++ application reading analog inputs, managing Wi-Fi state machines, and shipping JSON payloads.' },
          { name: 'Gateway REST/WS', desc: 'Backend microservice to authorize sensor keys, validate metrics ranges, and update connection logs.' },
          { name: 'Telegram Bot Hub', desc: 'Sends target operator alerts on threshold violations (e.g. pH level dropping below 6.5).' },
          { name: 'Razorpay Gateway', desc: 'Secure payment interface to provision automated recurring premium tier billing.' }
        ],
        dataFlow: [
          'ESP32 Edge hardware samples sensor parameters, applies filtration algorithms, and posts telemetry payloads.',
          'Gateway validates headers, registers parameters in MongoDB Atlas, and checks values against dynamic safe zones.',
          'On violation, the bot compiles details (value, zone, time) and pushes high-priority notifications to Operators.',
          'React app streams data over WebSockets for live telemetry charts, prompting Razorpay checkout when subscription limits occur.'
        ]
      },
      techStack: {
        frontend: ['React', 'Tailwind CSS', 'Chart.js'],
        backend: ['Node.js', 'Express.js', 'Telegram Bot API'],
        database: ['MongoDB Atlas (NoSQL)'],
        cloud: ['Razorpay SDK', 'ESP32 C++ Hardware']
      },
      challenges: [
        {
          title: 'Analog Signal Fluctuations on Edge',
          problem: 'Fluid agitation inside tanks triggered volatile, noisy analog reads on pH and TDS probes, causing false anomaly alerts.',
          solution: 'Implemented a sliding window moving average low-pass filter on the ESP32 firmware side to smooth electrical noise prior to pushing to the API.',
          tradeoff: 'Accepting a minor 5-second latency offset in parameter changes to guarantee 0% false alerting logs.'
        }
      ],
      outcome: {
        results: [
          'Maintained telemetry tracking metrics on 12 distinct remote hardware nodes with zero missed drop events.',
          'Successfully built standard subscription workflows combining hardware status constraints with Razorpay hooks.'
        ],
        learnings: 'Learned the importance of hardware calibration protocols and low-pass filter math when handling dirty analog sensor signals.'
      },
      links: {
        github: 'https://github.com/AKJenaX/HydroSense',
        live: 'https://hydrosense.demo.anupjena.dev',
        diagram: 'https://hydrosense.demo.anupjena.dev/docs/architecture'
      }
    }
  },
  {
    name: 'GRAND PRIX DE BANKSHIELD',
    position: 'P3',
    accent: '#CD7F32',
    status: 'DEPLOYED',
    tech: ['Python', 'FastAPI', 'Docker', 'REST APIs', 'Anomaly Detection'],
    description:
      'High-concurrency fraud detection service built with FastAPI and Python, utilizing memory-mapped databases for low-latency coordinate analysis, structured JSON logging, and Docker Compose environments.',
    metrics: { accuracy: '96.4%', latency: '<50ms', alerts: '1K+' },
    caseStudy: {
      problem: 'Financial transaction layers process thousands of concurrent requests. Fraud checking mechanisms must analyze each transaction against strict compliance rules and location anomalies without introducing user-facing checkout latency.',
      architecture: {
        diagram: `
 ┌──────────────────────┐              JSON Payload
 │  Core Ledger System  │ ───────────────────────────────────┐
 └──────────────────────┘                                    │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │     FastAPI Ingest  │
                                                  │  (Asynchronous API) │
                                                  └─────────────────────┘
                                                             │
                                                             ▼
                                                  ┌─────────────────────┐
                                                  │    Anomaly Engine   │
                                                  │ (Velocity & Geo IP) │
                                                  └─────────────────────┘
                                                             │
                               ┌─────────────────────────────┴───────────────┐
                               ▼                                             ▼
                   ┌───────────────────────┐                     ┌───────────────────────┐
                   │  Structured Logging   │                     │    Compliance State   │
                   │  (python-json-logger) │                     │   (SQLite Backend)    │
                   └───────────────────────┘                     └───────────────────────┘
        `,
        components: [
          { name: 'FastAPI Ingress', desc: 'Uvicorn-powered API validation layer designed for high concurrency and immediate transactional routing.' },
          { name: 'Velocity Engine', desc: 'Calculates transactions-per-minute limits to detect card-testing attacks in real-time.' },
          { name: 'Geo-Distance Evaluator', desc: 'Compares transaction coordinates against IP address location tables to block impossible travel events.' },
          { name: 'Compliance Logger', desc: 'Outputs standardized JSON logs directly to stdout for ingestion by monitoring agent daemons.' }
        ],
        dataFlow: [
          'Ledger triggers transaction checking requests, passing transactional parameters and geolocation metadata.',
          'FastAPI receives checks, concurrently querying dynamic geo databases and historical velocity counts in memory.',
          'Rule engine computes anomaly score; database updates transactional states for legal dashboard review.',
          'Structured log is written immediately, guaranteeing auditable traces for security operations.'
        ]
      },
      techStack: {
        frontend: ['Compliance Dashboard (REST CLI)'],
        backend: ['Python 3.11', 'FastAPI', 'Uvicorn'],
        database: ['SQLite / MySQL'],
        cloud: ['Docker', 'MaxMind GeoIP Database']
      },
      challenges: [
        {
          title: 'Sub-50ms Geolocation Lookups',
          problem: 'Checking physical distances between sequential card transactions required resolving raw IP addresses to coordinates, which traditionally blocked threads.',
          solution: 'Utilized memory-mapped databases (MMDB) directly inside the FastAPI process, combined with vectorized Haversine calculations using NumPy.',
          tradeoff: 'Using rules-based location heuristics over deep learning models to secure microsecond computation profiles and predictable performance.'
        }
      ],
      outcome: {
        results: [
          'Maintained transaction check response times under 32ms under simulated loads of 1,000 requests per second.',
          'Achieved 96.4% anomaly matching accuracy based on historical compliance test logs.'
        ],
        learnings: 'Understood microservice speed boundaries, learning to avoid database round-trips by keeping operational geo assets in process memory.'
      },
      links: {
        github: 'https://github.com/AKJenaX/BankShield',
        live: 'https://huggingface.co/spaces/AKJ123/BankShield',
        diagram: 'https://bankshield.demo.anupjena.dev/docs/architecture'
      }
    }
  },
  {
    name: 'GRAND PRIX DE MALO',
    position: 'P4',
    accent: '#1E5BC6',
    status: 'LIVE',
    tech: ['Python', 'FastAPI', 'Streamlit', 'Ollama', 'Multi-Agent Systems', 'REST APIs'],
    description:
      'Multi-agent orchestration backend coordinating local LLM models (Ollama) through asynchronous FastAPI routers, managing stateful session context windows, and token limit constraints.',
    metrics: { agents: '4', latency: '<200ms', tasks: '500+' },
    caseStudy: {
      problem: 'Single LLM calls frequently fail at complex coding tasks or dynamic planning. Solving multi-layered tasks requires specialized agents operating collaboratively, but managing conversation flow and state limits local hardware capacity.',
      architecture: {
        diagram: `
 ┌──────────────────────┐             User Request
 │ Streamlit Dashboard  │ ───────────────────────────────────┐
 └──────────────────────┘                                   │
                                                            ▼
                                                 ┌─────────────────────┐
                                                 │  Orchestration API  │
                                                 │   (FastAPI Router)  │
                                                 └─────────────────────┘
                                                            │
                                                            ▼
                                                 ┌─────────────────────┐
                                                 │  State Coordinator  │
                                                 │ (Message/Token Mgr) │
                                                 └─────────────────────┘
                                                            │
                               ┌─────────────────────────────┼─────────────────────────────┐
                               ▼                             ▼                             ▼
                   ┌───────────────────────┐     ┌───────────────────────┐     ┌───────────────────────┐
                   │     Planner Agent     │     │      Coder Agent      │     │    Reviewer Agent     │
                   │   (Local LLM Mesh)    │     │   (Local LLM Mesh)    │     │   (Local LLM Mesh)    │
                   └───────────────────────┘     └───────────────────────┘     └───────────────────────┘
        `,
        components: [
          { name: 'Streamlit Interface', desc: 'Interactive chat dashboard capturing system requests and showing live agent reasoning streams.' },
          { name: 'Orchestrator Core', desc: 'FastAPI controller managing session state, parsing prompts, and executing local agent cycles.' },
          { name: 'Local Model Handler', desc: 'Interfaces with Ollama, hosting local Llama-3 models locally, protecting intellectual property.' },
          { name: 'Token Budget Manager', desc: 'Monitors context limits, pruning historical conversation loops before LLM limits are hit.' }
        ],
        dataFlow: [
          'User posts coding or analysis prompt to Streamlit web console.',
          'Orchestrator instantiates state tracking record, calling Planner Agent to split prompt into specialized stages.',
          'Planner outputs task checklist; Orchestrator forwards checklist to Coder Agent for initial template creation.',
          'Reviewer Agent reviews output, generating debug suggestions; final correct files stream to user console.'
        ]
      },
      techStack: {
        frontend: ['Streamlit', 'HTML5 Embeds'],
        backend: ['Python', 'FastAPI'],
        database: ['Local JSON State'],
        cloud: ['Ollama (Local LLM Server)', 'Llama-3 Models']
      },
      challenges: [
        {
          title: 'Infinite Agent Collaboration Loops',
          problem: 'Specialized agents (e.g. Coder and Reviewer) entered repetitive ping-pong correction loops on edge cases, consuming massive CPU cycles and exceeding model contexts.',
          solution: 'Implemented a deterministic state machine token tracker. The orchestrator limits agent conversations to 5 turns. If unsolved, the state manager falls back to safety heuristic structures.',
          tradeoff: 'Limiting agent conversational search depth to secure deterministic task execution guarantees.'
        }
      ],
      outcome: {
        results: [
          'Successfully automated local generation of complex boilerplate microservices offline.',
          'Maintained zero data leaks by utilizing entirely local LLM parameters.'
        ],
        learnings: 'Developed deep insights into structured JSON prompts and LLM constraints under agent loops.'
      },
      links: {
        github: 'https://github.com/AKJenaX/MALO',
        live: 'https://malo.demo.anupjena.dev',
        diagram: 'https://malo.demo.anupjena.dev/docs/architecture'
      }
    }
  },
  {
    name: 'GRAND PRIX DE TASKMESH',
    position: 'P5',
    accent: '#FFFFFF',
    status: 'HACKATHON',
    tech: ['Python', 'FastAPI', 'Docker', 'Reinforcement Learning', 'Distributed Systems'],
    description:
      'Distributed task scheduler API implementing a reinforcement learning Q-learning dispatcher to route dynamic batch jobs across containerized worker clusters simulated with Docker.',
    metrics: { reduction: '40%', nodes: '8', tasks: '2K+' },
    caseStudy: {
      problem: 'Conventional load balancing (e.g. Round-Robin) distributes dynamic, resource-intensive jobs blindly, overload worker servers while leaving others idle, leading to latency bottlenecks.',
      architecture: {
        diagram: `
 ┌──────────────────────┐             Tasks Ingest
 │   Task Entry Queue   │ ───────────────────────────────────┐
 └──────────────────────┘                                   │
                                                            ▼
                                                 ┌─────────────────────┐
                                                 │  Scheduling Agent   │
                                                 │ (Q-Learning Router) │
                                                 └─────────────────────┘
                                                            │
                                                            ▼
                                                 ┌─────────────────────┐
                                                 │    State Monitor    │
                                                 │ (Node RAM/CPU logs) │
                                                 └─────────────────────┘
                                                            │
                               ┌─────────────────────────────┼─────────────────────────────┐
                               ▼                             ▼                             ▼
                   ┌───────────────────────┐     ┌───────────────────────┐     ┌───────────────────────┐
                   │    Worker Node 01     │     │    Worker Node 02     │     │    Worker Node 03     │
                   │   (Docker Container)  │     │   (Docker Container)  │     │   (Docker Container)  │
                   └───────────────────────┘     └───────────────────────┘     └───────────────────────┘
        `,
        components: [
          { name: 'Queue Manager', desc: 'High-speed FIFO queue handling incoming batch computation requests.' },
          { name: 'Q-Learning Scheduler', desc: 'RL engine assessing state indicators and deciding target node execution routes.' },
          { name: 'Distributed Workers', desc: 'Containerized Python tasks running inside resource-capped Docker networks.' },
          { name: 'State Tracker', desc: 'Collects node hardware telemetry (CPU, memory bounds) to feed reinforcement loops.' }
        ],
        dataFlow: [
          'Tasks arrive in the task queue, presenting dynamic execution bounds.',
          'RL Scheduler queries current worker nodes load status (RAM, CPU, queue length).',
          'Agent selects worker target, updates worker job queues, and records decision latency.',
          'Upon worker task completion, actual job run duration is evaluated, returning reward metrics to Q-Table.'
        ]
      },
      techStack: {
        frontend: ['Task Analytics Console (FastAPI docs/JSON output)'],
        backend: ['Python', 'FastAPI'],
        database: ['Local Memory-State (Numpy Q-Table)'],
        cloud: ['Docker Engine', 'Docker Compose (Cluster Simulation)']
      },
      challenges: [
        {
          title: 'Routing Oscillation Under Load',
          problem: 'The scheduler tended to overload a single worker once it resolved as "fastest", leading to sudden bottlenecks before migrating everything to the next worker.',
          solution: 'Modified the reward function to include a "dispersion penalty" (penalizing worker queue variance) and introduced a routing friction parameter to slow dynamic swings.',
          tradeoff: 'Slightly slower convergence rate during the reinforcement learning phase to guarantee stable, steady routing behavior.'
        }
      ],
      outcome: {
        results: [
          'Achieved 40% reduction in total task completion times compared to standard round-robin schedulers.',
          'Simulated 8 workers inside Docker networks, managing 2,000+ batch tasks with zero node failures.'
        ],
        learnings: 'Understood reinforcement learning fundamentals and scheduling algorithms in distributed cluster simulation bounds.'
      },
      links: {
        github: 'https://github.com/AKJenaX/TaskMesh',
        live: 'https://huggingface.co/spaces/irfan319150/TaskMesh',
        diagram: 'https://taskmesh.demo.anupjena.dev/docs/architecture'
      }
    }
  }
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
      <style>{`
        @keyframes modal-fade-in {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(8px); }
        }
        @keyframes modal-scale-in {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: modal-fade-in 0.2s ease-out forwards;
        }
        .animate-scale-in {
          animation: modal-scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
            className="animate-scale-in relative flex h-[90vh] w-full max-w-4xl flex-col border border-white/12 bg-[#091430] text-white shadow-[0_24px_70px_rgba(0,0,0,0.65)] sm:h-[82vh]"
            style={{
              borderTopColor: activeProject.accent,
              borderTopWidth: '4px',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
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
              <a
                href={activeProject.caseStudy.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex min-h-9 items-center gap-2 bg-[#1E5BC6] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#2a6ad4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
              >
                GitHub Repository
              </a>
              <a
                href={activeProject.caseStudy.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex min-h-9 items-center gap-2 bg-[#DC052D] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#e8163d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
              >
                Live Demo
              </a>
              <a
                href={activeProject.caseStudy.links.diagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-2 border border-white/12 bg-white/[0.02] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white/60 uppercase transition-colors hover:border-white/20 hover:text-white"
              >
                Architecture Spec ↗
              </a>
            </footer>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
