import { useState } from 'react'

// 1. DcoY: Active Defense & Cyber Deception Flow
function DcoYFlow() {
  const [isAttackSimulated, setIsAttackSimulated] = useState(false)
  const [deflectedCount, setDeflectedCount] = useState(482)

  const triggerAttack = () => {
    setIsAttackSimulated(true)
    setDeflectedCount((c) => c + 1)
    setTimeout(() => setIsAttackSimulated(false), 2400)
  }

  return (
    <div className="border border-white/10 bg-[#060B26] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3">
        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase">
          <span className="h-2 w-2 rounded-full bg-[#DC052D] shadow-[0_0_8px_#DC052D]" style={{ animation: 'status-blink 1.5s infinite' }} />
          <span className="font-bold text-white/90">INTERACTIVE GRAPH // ACTIVE DECEPTION PIPELINE</span>
        </div>
        <button
          type="button"
          onClick={triggerAttack}
          className="magnetic-btn rounded border border-[#DC052D]/40 bg-[#DC052D]/15 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#DC052D] hover:text-white"
        >
          {isAttackSimulated ? 'DEFLECTING ATTACK...' : '⚡ SIMULATE INTRUSION ATTACK'}
        </button>
      </div>

      {/* Responsive Animated SVG Diagram */}
      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 760 260" className="min-w-[640px] w-full text-white font-mono select-none">
          <defs>
            <linearGradient id="dcoy-threat" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC052D" />
              <stop offset="100%" stopColor="#F7D417" />
            </linearGradient>
            <linearGradient id="dcoy-safe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E5BC6" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          {/* Inflow path */}
          <path
            d="M 140 130 L 260 130"
            fill="none"
            stroke={isAttackSimulated ? '#DC052D' : '#1E5BC6'}
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-pulse"
          />

          {/* Divergence to Decoy (Top branch) */}
          <path
            d="M 380 130 C 440 130, 460 65, 520 65"
            fill="none"
            stroke={isAttackSimulated ? '#DC052D' : '#DC052D88'}
            strokeWidth={isAttackSimulated ? '4' : '2.5'}
            strokeDasharray="6 4"
          />

          {/* Divergence to Real Service (Bottom branch) */}
          <path
            d="M 380 130 C 440 130, 460 195, 520 195"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />

          {/* Moving Packet Stream Animation */}
          <circle r="4" fill={isAttackSimulated ? '#DC052D' : '#F7D417'}>
            <animateMotion
              path="M 140 130 L 260 130"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>

          {isAttackSimulated && (
            <circle r="5" fill="#DC052D">
              <animateMotion
                path="M 380 130 C 440 130, 460 65, 520 65"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {!isAttackSimulated && (
            <circle r="4" fill="#22C55E">
              <animateMotion
                path="M 380 130 C 440 130, 460 195, 520 195"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* Node 1: Client Ingress */}
          <g transform="translate(20, 95)">
            <rect width="120" height="70" rx="4" fill="#091430" stroke={isAttackSimulated ? '#DC052D' : '#1E5BC6'} strokeWidth="1.5" />
            <text x="60" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F7D417">CLIENT INGRESS</text>
            <text x="60" y="46" textAnchor="middle" fontSize="8" fill="#FFFFFF99">Traffic &amp; Scans</text>
            <text x="60" y="58" textAnchor="middle" fontSize="7" fill={isAttackSimulated ? '#DC052D' : '#22C55E'}>
              {isAttackSimulated ? 'THREAT DETECTED' : 'STANDARD INFLOW'}
            </text>
          </g>

          {/* Node 2: FastAPI Gateway & Dijkstra Inspection */}
          <g transform="translate(260, 90)">
            <rect width="140" height="80" rx="4" fill="#091430" stroke="#1E5BC6" strokeWidth="2" />
            <text x="70" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E5BC6">FASTAPI GATEWAY</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Dijkstra Attack-Path</text>
            <text x="70" y="56" textAnchor="middle" fontSize="8" fill="#F7D417">Graph Routing Engine</text>
            <text x="70" y="70" textAnchor="middle" fontSize="7" fill="#22C55E">LATENCY &lt;15ms</text>
          </g>

          {/* Node 3A: Decoy Honeypot (Dijkstra Trap) */}
          <g transform="translate(520, 25)">
            <rect
              width="210"
              height="80"
              rx="4"
              fill="#18040a"
              stroke="#DC052D"
              strokeWidth={isAttackSimulated ? '2.5' : '1.5'}
            />
            <text x="105" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#DC052D">
              DECOY HONEYPOT // TRAP
            </text>
            <text x="105" y="40" textAnchor="middle" fontSize="8" fill="#FFFFFF80">
              Synthetic Vulnerabilities (Flask)
            </text>
            <text x="105" y="54" textAnchor="middle" fontSize="8" fill="#F7D417">
              Intruder Containment Sandbox
            </text>
            <text x="105" y="70" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#DC052D">
              DEFLECTIONS: {deflectedCount}
            </text>
          </g>

          {/* Node 3B: Legitimate Protected Backend */}
          <g transform="translate(520, 155)">
            <rect width="210" height="80" rx="4" fill="#04140e" stroke="#22C55E" strokeWidth="1.5" />
            <text x="105" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#22C55E">
              LEGITIMATE SERVICE ROUTE
            </text>
            <text x="105" y="40" textAnchor="middle" fontSize="8" fill="#FFFFFF80">
              Zero-Trust Token Verifier
            </text>
            <text x="105" y="54" textAnchor="middle" fontSize="8" fill="#1E5BC6">
              Production Database / APIs
            </text>
            <text x="105" y="70" textAnchor="middle" fontSize="7" fill="#22C55E">
              ISOLATION: 100% UNTOUCHED
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between border-t border-white/8 pt-2 font-mono text-[8px] sm:text-[9px] text-white/45 uppercase">
        <span>DATA PIPELINE: REAL-TIME GRAPH TRAVERSAL &amp; DECEPTION</span>
        <span className="text-[#22C55E]">STATUS: ACTIVE DEFENSE OPERATIONAL</span>
      </div>
    </div>
  )
}

// 2. TaskMesh: RL-Driven Adaptive Job Scheduler Flow
function TaskMeshFlow() {
  const [burstMode, setBurstMode] = useState(false)
  const [scheduledJobs, setScheduledJobs] = useState(1284)

  const triggerBurst = () => {
    setBurstMode(true)
    setScheduledJobs((j) => j + 35)
    setTimeout(() => setBurstMode(false), 2400)
  }

  return (
    <div className="border border-white/10 bg-[#060B26] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3">
        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase">
          <span className="h-2 w-2 rounded-full bg-[#F7D417] shadow-[0_0_8px_#F7D417]" style={{ animation: 'status-blink 1.5s infinite' }} />
          <span className="font-bold text-white/90">INTERACTIVE PIPELINE // RL SCHEDULER MATRIX</span>
        </div>
        <button
          type="button"
          onClick={triggerBurst}
          className="magnetic-btn rounded border border-[#F7D417]/40 bg-[#F7D417]/15 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#F7D417] hover:text-black"
        >
          {burstMode ? 'BALANCING SPIKE...' : '⚡ SIMULATE WORKLOAD BURST'}
        </button>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 760 260" className="min-w-[640px] w-full text-white font-mono select-none">
          {/* Paths connecting stream to RL and Worker Nodes */}
          <path d="M 130 130 L 230 130" fill="none" stroke="#F7D417" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M 370 130 L 460 130" fill="none" stroke="#1E5BC6" strokeWidth="2.5" strokeDasharray="5 3" />

          {/* RL to 3 Workers */}
          <path d="M 570 130 C 610 130, 620 60, 650 60" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 570 130 L 650 130" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 570 130 C 610 130, 620 200, 650 200" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 3" />

          {/* Animated Particles */}
          <circle r="4" fill="#F7D417">
            <animateMotion path="M 130 130 L 230 130" dur={burstMode ? '0.6s' : '1.2s'} repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#1E5BC6">
            <animateMotion path="M 370 130 L 460 130" dur={burstMode ? '0.6s' : '1.2s'} repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#22C55E">
            <animateMotion path="M 570 130 C 610 130, 620 60, 650 60" dur="1.1s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#22C55E">
            <animateMotion path="M 570 130 L 650 130" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#22C55E">
            <animateMotion path="M 570 130 C 610 130, 620 200, 650 200" dur="1.3s" repeatCount="indefinite" />
          </circle>

          {/* Node 1: Job Ingestion Stream */}
          <g transform="translate(10, 90)">
            <rect width="120" height="80" rx="4" fill="#091430" stroke="#F7D417" strokeWidth="1.5" />
            <text x="60" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F7D417">TASK INGESTION</text>
            <text x="60" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Synthetic &amp; Real</text>
            <text x="60" y="56" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Job Queues</text>
            <text x="60" y="70" textAnchor="middle" fontSize="7" fill={burstMode ? '#DC052D' : '#F7D417'}>
              {burstMode ? 'BURST: 350 JOBS/S' : 'RATE: 85 JOBS/S'}
            </text>
          </g>

          {/* Node 2: 41-Dim State Buffer */}
          <g transform="translate(230, 85)">
            <rect width="140" height="90" rx="4" fill="#091430" stroke="#1E5BC6" strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E5BC6">STATE BUFFER</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF90">41-Dim Observation</text>
            <text x="70" y="56" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Queue Depths &amp; Latency</text>
            <text x="70" y="70" textAnchor="middle" fontSize="8" fill="#F7D417">Normalized Matrix</text>
            <text x="70" y="82" textAnchor="middle" fontSize="7" fill="#22C55E">JITTER &lt;2ms</text>
          </g>

          {/* Node 3: Policy Gradient RL Agent */}
          <g transform="translate(430, 80)">
            <rect width="140" height="100" rx="4" fill="#0e0724" stroke="#A855F7" strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A855F7">RL AGENT (POLICY)</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF90">Deep Q / Policy Grad</text>
            <text x="70" y="58" textAnchor="middle" fontSize="8" fill="#F7D417">Adaptive Reward Opt</text>
            <text x="70" y="74" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Action Dispatch</text>
            <text x="70" y="90" textAnchor="middle" fontSize="7" fill="#22C55E">
              TOTAL JOBS: {scheduledJobs}
            </text>
          </g>

          {/* Node 4: Compute Cluster Nodes */}
          <g transform="translate(630, 30)">
            <rect width="120" height="50" rx="3" fill="#091430" stroke="#22C55E" strokeWidth="1" />
            <text x="60" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#22C55E">WORKER 01 (GPU)</text>
            <text x="60" y="38" textAnchor="middle" fontSize="8" fill="#FFFFFF80">LOAD: {burstMode ? '78%' : '42%'}</text>
          </g>
          <g transform="translate(630, 105)">
            <rect width="120" height="50" rx="3" fill="#091430" stroke="#22C55E" strokeWidth="1" />
            <text x="60" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#22C55E">WORKER 02 (CPU)</text>
            <text x="60" y="38" textAnchor="middle" fontSize="8" fill="#FFFFFF80">LOAD: {burstMode ? '82%' : '48%'}</text>
          </g>
          <g transform="translate(630, 175)">
            <rect width="120" height="50" rx="3" fill="#091430" stroke="#22C55E" strokeWidth="1" />
            <text x="60" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#22C55E">WORKER 03 (IO)</text>
            <text x="60" y="38" textAnchor="middle" fontSize="8" fill="#FFFFFF80">LOAD: {burstMode ? '64%' : '38%'}</text>
          </g>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between border-t border-white/8 pt-2 font-mono text-[8px] sm:text-[9px] text-white/45 uppercase">
        <span>DYNAMIC SCHEDULER: ADAPTIVE REINFORCEMENT LEARNING DISPATCH</span>
        <span className="text-[#22C55E]">OPTIMIZATION GAIN: +28.4% THROUGHPUT</span>
      </div>
    </div>
  )
}

// 3. EcoFlow: Smart Waste Logistics & Dynamic Route Optimization
function EcoFlowFlow() {
  const [fillSpike, setFillSpike] = useState(false)
  const [routeDistance, setRouteDistance] = useState(14.8)

  const triggerSpike = () => {
    setFillSpike(true)
    setRouteDistance(11.2)
    setTimeout(() => {
      setFillSpike(false)
      setRouteDistance(14.8)
    }, 2800)
  }

  return (
    <div className="border border-white/10 bg-[#060B26] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3">
        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase">
          <span className="h-2 w-2 rounded-full bg-[#1E5BC6] shadow-[0_0_8px_#1E5BC6]" style={{ animation: 'status-blink 1.5s infinite' }} />
          <span className="font-bold text-white/90">INTERACTIVE ROUTING // OSRM DYNAMIC FLEET PIPELINE</span>
        </div>
        <button
          type="button"
          onClick={triggerSpike}
          className="magnetic-btn rounded border border-[#1E5BC6]/40 bg-[#1E5BC6]/15 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#1E5BC6] hover:text-white"
        >
          {fillSpike ? 'RE-ROUTING FLEET...' : '⚡ TRIGGER SENSOR FILL SPIKE (>90%)'}
        </button>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 760 260" className="min-w-[640px] w-full text-white font-mono select-none">
          {/* Paths */}
          <path d="M 130 130 L 230 130" fill="none" stroke="#1E5BC6" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M 370 130 L 470 130" fill="none" stroke="#F7D417" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M 610 130 L 670 130" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeDasharray="5 3" />

          {/* Animated Waypoint Pulses */}
          <circle r="4" fill="#1E5BC6">
            <animateMotion path="M 130 130 L 230 130" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#F7D417">
            <animateMotion path="M 370 130 L 470 130" dur="1.0s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#22C55E">
            <animateMotion path="M 610 130 L 670 130" dur="0.8s" repeatCount="indefinite" />
          </circle>

          {/* Node 1: IoT Smart Bin Sensor Nodes */}
          <g transform="translate(10, 85)">
            <rect width="120" height="90" rx="4" fill="#091430" stroke={fillSpike ? '#DC052D' : '#1E5BC6'} strokeWidth="1.5" />
            <text x="60" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E5BC6">IOT SENSORS</text>
            <text x="60" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Ultrasonic Level</text>
            <text x="60" y="58" textAnchor="middle" fontSize="8" fill={fillSpike ? '#DC052D' : '#F7D417'}>
              {fillSpike ? 'BIN #07: 94% FULL' : 'BIN #07: 42%'}
            </text>
            <text x="60" y="74" textAnchor="middle" fontSize="7" fill={fillSpike ? '#DC052D' : '#22C55E'}>
              {fillSpike ? 'CRITICAL TRIGGER' : 'NOMINAL (50-90%)'}
            </text>
          </g>

          {/* Node 2: WebSocket Telemetry Broker */}
          <g transform="translate(230, 85)">
            <rect width="140" height="90" rx="4" fill="#091430" stroke="#1E5BC6" strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E5BC6">WS TELEMETRY HUB</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Real-Time Ingestion</text>
            <text x="70" y="58" textAnchor="middle" fontSize="8" fill="#F7D417">MFA TOTP Secure</text>
            <text x="70" y="74" textAnchor="middle" fontSize="7" fill="#22C55E">STREAM: 60 FPS SYNC</text>
          </g>

          {/* Node 3: OSRM Dynamic Routing Graph */}
          <g transform="translate(470, 80)">
            <rect width="140" height="100" rx="4" fill="#120c24" stroke="#F7D417" strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F7D417">OSRM GRAPH ENGINE</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF90">Road Geometry Graph</text>
            <text x="70" y="58" textAnchor="middle" fontSize="8" fill="#1E5BC6">Turn Restrictions</text>
            <text x="70" y="74" textAnchor="middle" fontSize="8" fill={fillSpike ? '#DC052D' : '#22C55E'}>
              {fillSpike ? '⚡ RE-CALCULATING' : 'OPTIMAL ROUTE'}
            </text>
            <text x="70" y="90" textAnchor="middle" fontSize="7" fill="#F7D417">
              DISTANCE: {routeDistance} KM
            </text>
          </g>

          {/* Node 4: Municipal Dispatch Console */}
          <g transform="translate(670, 85)">
            <rect width="80" height="90" rx="4" fill="#091430" stroke="#22C55E" strokeWidth="1.5" />
            <text x="40" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#22C55E">DISPATCH</text>
            <text x="40" y="46" textAnchor="middle" fontSize="8" fill="#FFFFFF80">Live Map</text>
            <text x="40" y="64" textAnchor="middle" fontSize="8" fill="#F7D417">Truck Nav</text>
            <text x="40" y="78" textAnchor="middle" fontSize="7" fill="#22C55E">24H FORECAST</text>
          </g>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between border-t border-white/8 pt-2 font-mono text-[8px] sm:text-[9px] text-white/45 uppercase">
        <span>LOGISTICS ENGINE: DYNAMIC RE-ROUTING WITH OSRM ROAD NETWORK MATRIX</span>
        <span className="text-[#22C55E]">FUEL &amp; ROUTE REDUCTION: -22.6% MILEAGE</span>
      </div>
    </div>
  )
}

// 4. HydroSense: IoT Water Quality & Telemetry Flow
function HydroSenseFlow() {
  const [leakAlert, setLeakAlert] = useState(false)

  const triggerLeak = () => {
    setLeakAlert(true)
    setTimeout(() => setLeakAlert(false), 2400)
  }

  return (
    <div className="border border-white/10 bg-[#060B26] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3">
        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase">
          <span className="h-2 w-2 rounded-full bg-[#22C55E]" style={{ animation: 'status-blink 1.5s infinite' }} />
          <span className="font-bold text-white/90">INTERACTIVE TELEMETRY // HARDWARE TO BOT ALERT STREAM</span>
        </div>
        <button
          type="button"
          onClick={triggerLeak}
          className="magnetic-btn rounded border border-[#22C55E]/40 bg-[#22C55E]/15 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#22C55E] hover:text-black"
        >
          {leakAlert ? 'TRIGGERING ALERT...' : '⚡ SIMULATE TURBIDITY BREACH'}
        </button>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 760 260" className="min-w-[640px] w-full text-white font-mono select-none">
          {/* Paths */}
          <path d="M 130 130 L 230 130" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M 370 130 L 470 130" fill="none" stroke="#1E5BC6" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M 610 130 L 670 130" fill="none" stroke={leakAlert ? '#DC052D' : '#F7D417'} strokeWidth="2.5" strokeDasharray="5 3" />

          {/* Animated Particles */}
          <circle r="4" fill="#22C55E">
            <animateMotion path="M 130 130 L 230 130" dur="1.1s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#1E5BC6">
            <animateMotion path="M 370 130 L 470 130" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={leakAlert ? '#DC052D' : '#F7D417'}>
            <animateMotion path="M 610 130 L 670 130" dur="0.7s" repeatCount="indefinite" />
          </circle>

          {/* Node 1: ESP32 Edge Sensor Cluster */}
          <g transform="translate(10, 85)">
            <rect width="120" height="90" rx="4" fill="#091430" stroke="#22C55E" strokeWidth="1.5" />
            <text x="60" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#22C55E">ESP32 SENSORS</text>
            <text x="60" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">pH, TDS, Turbidity</text>
            <text x="60" y="58" textAnchor="middle" fontSize="8" fill="#F7D417">Low-Pass Filter C++</text>
            <text x="60" y="74" textAnchor="middle" fontSize="7" fill={leakAlert ? '#DC052D' : '#22C55E'}>
              {leakAlert ? 'ANOMALY DETECTED' : 'SAMPLE: 10 HZ'}
            </text>
          </g>

          {/* Node 2: Node.js Express Gateway */}
          <g transform="translate(230, 85)">
            <rect width="140" height="90" rx="4" fill="#091430" stroke="#1E5BC6" strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E5BC6">NODE GATEWAY</text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF80">In-Memory Map Store</text>
            <text x="70" y="58" textAnchor="middle" fontSize="8" fill="#F7D417">Timezone Cron Reset</text>
            <text x="70" y="74" textAnchor="middle" fontSize="7" fill="#22C55E">LATENCY &lt;120ms</text>
          </g>

          {/* Node 3: Alert Evaluator & Telegram Bot */}
          <g transform="translate(470, 80)">
            <rect width="140" height="100" rx="4" fill="#18040a" stroke={leakAlert ? '#DC052D' : '#F7D417'} strokeWidth="2" />
            <text x="70" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill={leakAlert ? '#DC052D' : '#F7D417'}>
              TELEGRAM BOT HUB
            </text>
            <text x="70" y="42" textAnchor="middle" fontSize="8" fill="#FFFFFF90">Instant Warning Bot</text>
            <text x="70" y="58" textAnchor="middle" fontSize="8" fill="#1E5BC6">Daily Limit Breach</text>
            <text x="70" y="74" textAnchor="middle" fontSize="8" fill={leakAlert ? '#DC052D' : '#22C55E'}>
              {leakAlert ? '⚠️ ALERT SENT TO BOT' : 'MONITORING NOMINAL'}
            </text>
            <text x="70" y="90" textAnchor="middle" fontSize="7" fill="#F7D417">
              AUTO SHUTOFF READY
            </text>
          </g>

          {/* Node 4: Web Console & Razorpay Top-Up */}
          <g transform="translate(670, 85)">
            <rect width="80" height="90" rx="4" fill="#091430" stroke="#22C55E" strokeWidth="1.5" />
            <text x="40" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#22C55E">CONSOLE</text>
            <text x="40" y="46" textAnchor="middle" fontSize="8" fill="#FFFFFF80">React UI</text>
            <text x="40" y="64" textAnchor="middle" fontSize="8" fill="#F7D417">Razorpay</text>
            <text x="40" y="78" textAnchor="middle" fontSize="7" fill="#22C55E">TOP-UP OK</text>
          </g>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between border-t border-white/8 pt-2 font-mono text-[8px] sm:text-[9px] text-white/45 uppercase">
        <span>IOT PIPELINE: CONTINUOUS EDGE FILTERING, IN-MEMORY BUFFER &amp; INSTANT BOT DISPATCH</span>
        <span className="text-[#22C55E]">UPTIME: 98.5% STABLE TELEMETRY</span>
      </div>
    </div>
  )
}

// Master component router for projects
export default function ProjectArchitectureFlow({ projectName }) {
  if (projectName.includes('DCOY')) {
    return <DcoYFlow />
  }
  if (projectName.includes('TASKMESH')) {
    return <TaskMeshFlow />
  }
  if (projectName.includes('ECOFLOW')) {
    return <EcoFlowFlow />
  }
  if (projectName.includes('HYDROSENSE')) {
    return <HydroSenseFlow />
  }
  return null
}
