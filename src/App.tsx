/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  Cpu, 
  Award, 
  Milestone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Compass, 
  Server, 
  TrendingUp, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Wrench, 
  Network, 
  User, 
  MapPin, 
  ChevronRight, 
  Search, 
  FileText, 
  HelpCircle, 
  BookOpen, 
  Volume2, 
  Trophy,
  Activity,
  UserCheck,
  BarChart3,
  LineChart
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types for Portfolio Data
interface CommandOutput {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
}

interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  org: string;
  date: string;
  credentialId?: string;
  desc: string;
  category: "award" | "certification" | "project";
  color: string;
}

export default function App() {
  // Terminal Interactive State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<CommandOutput[]>([
    {
      id: "init",
      command: "system --boot",
      output: (
        <span className="text-[#00f5ff]">
          [BOOT] NEURAL_CORE.v26 · 2026.STABLE initialized successfully.<br />
          [VERIFY] Clearance Level: BUILDER_CLASS_Ω<br />
          [STREAM] Ready to receive secure commands. Type <span className="text-[#ff00aa] font-bold">help</span> to list endpoints.
        </span>
      ),
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [activeCodeLine, setActiveCodeLine] = useState<number | null>(null);
  const [isRunningPython, setIsRunningPython] = useState(false);
  const [pythonOutput, setPythonOutput] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Filter tech stack category
  const [techFilter, setTechFilter] = useState<"all" | "languages" | "ai" | "tools">("all");

  // Local Time clock state
  const [currentTime, setCurrentTime] = useState(new Date());

  // User Interactive Checklist
  const [checkedMilestones, setCheckedMilestones] = useState<Record<string, boolean>>({
    "Q2_2026": true,
    "Q3_2026": false,
    "Q4_2026": false,
    "Q1_2027": false,
    "2027": false,
  });

  // Power BI & Statistics Core States
  const [selectedBiTab, setSelectedBiTab] = useState<"powerbi" | "stats">("powerbi");
  const [daxFunction, setDaxFunction] = useState<string>("CALCULATE");
  const [daxResult, setDaxResult] = useState<string>("Click 'Execute' to calculate measures");
  const [isDaxProcessing, setIsDaxProcessing] = useState<boolean>(false);
  const [daxLogs, setDaxLogs] = useState<string[]>([
    "[READY] Power BI DAX engine v1.4 loaded.",
    "[DAX] CALCULATE(SUM(IngestedData), IngestedData[Confidence] > 0.88)"
  ]);
  const [statsMean, setStatsMean] = useState<number>(50);
  const [statsStdDev, setStatsStdDev] = useState<number>(15);
  const [statsConfidence, setStatsConfidence] = useState<number>(95);
  const [statsIsHypothesisValid, setStatsIsHypothesisValid] = useState<boolean | null>(null);
  const [statsZScore, setStatsZScore] = useState<number>(2.14);
  const [statsPValue, setStatsPValue] = useState<number>(0.016);

  // Sound effects fallback (synthesized web audio)
  const playBeep = (freq = 800, duration = 0.08, type: OscillatorType = "sine") => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Browser blocked audio or not supported
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs, pythonOutput, isRunningPython]);

  // Power BI DAX execution simulation
  const executeDaxFormula = (formulaType: string) => {
    if (isDaxProcessing) return;
    setIsDaxProcessing(true);
    setDaxLogs([`[EXECUTE] Launching DAX compilation pipeline for: ${formulaType}`]);
    
    // Play synth boot sequence sound
    playBeep(440, 0.08, "sine");
    setTimeout(() => playBeep(554.37, 0.08, "sine"), 120);
    setTimeout(() => playBeep(659.25, 0.08, "sine"), 240);
    setTimeout(() => playBeep(880, 0.15, "triangle"), 360);

    const steps = [
      { delay: 400, text: "[PARSING] Lexical scan of DAX statement... OK" },
      { delay: 800, text: `[CONTEXT] Evaluating ${formulaType} filters on Neural_Telemetry table...` },
      { delay: 1200, text: "[COMPUTING] Initializing parallel thread allocation across 52 cycles..." },
      { delay: 1600, text: "[OPTIMIZER] VertiPaq engine compression ratio: 4.8x. Executing direct query..." },
      { delay: 2000, text: "[SUCCESS] Context filters applied. Generating tabular model rows..." }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setDaxLogs(prev => [...prev, step.text]);
      }, step.delay);
    });

    setTimeout(() => {
      let finalVal = "";
      if (formulaType === "CALCULATE") {
        finalVal = "94.8% Active Efficiency";
      } else if (formulaType === "DIVIDE") {
        finalVal = "88.42% Mean Core Precision";
      } else if (formulaType === "SWITCH") {
        finalVal = "STABLE (Clearance: BUILDER_CLASS_Ω)";
      } else {
        finalVal = "1.54M Operational Records Processed";
      }
      setDaxResult(finalVal);
      setIsDaxProcessing(false);
    }, 2200);
  };

  // Live Statistics calculation (Normal curve rendering helper and hypothesis testing)
  useEffect(() => {
    // Standard Z score calculation based on Mean, StdDev, and confidence
    // Null hypothesis mean is 50. Let's calculate if statsMean is significantly different from 50.
    const sampleSize = 25; // fixed
    const hypotheticalMean = 50;
    
    // Z = (mean - hypotheticalMean) / (stdDev / sqrt(N))
    const se = statsStdDev / Math.sqrt(sampleSize);
    const z = se === 0 ? 0 : Number(((statsMean - hypotheticalMean) / se).toFixed(2));
    
    // Approximate P-Value from Z-Score (Two-tailed) using rational approximation
    const absZ = Math.abs(z);
    // Standard normal cumulative distribution approximation
    const t = 1 / (1 + 0.2316419 * absZ);
    const d = 0.3989423 * Math.exp(-absZ * absZ / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    let pValue = Number((2 * prob).toFixed(4));
    if (isNaN(pValue)) pValue = 0.0001;
    
    // Critical value for chosen confidence
    let alpha = 0.05;
    if (statsConfidence === 90) alpha = 0.10;
    if (statsConfidence === 99) alpha = 0.01;

    setStatsZScore(z);
    setStatsPValue(pValue);
    setStatsIsHypothesisValid(pValue < alpha);
  }, [statsMean, statsStdDev, statsConfidence]);

  // Terminal commands handling
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    playBeep(900, 0.06);
    executeCommand(cmd);
    setTerminalInput("");
  };

  const executeCommand = (cmd: string) => {
    let output: string | React.ReactNode = "";
    
    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p className="text-gray-400">Available neural interface protocols:</p>
            <p><span className="text-[#00f5ff] font-mono">whoami</span> - Execute system profile compiler class (Python run)</p>
            <p><span className="text-[#00f5ff] font-mono">tech-stack</span> - List integrated engineering modules</p>
            <p><span className="text-[#00f5ff] font-mono">achievements</span> - Print classified project logs and credentials</p>
            <p><span className="text-[#00f5ff] font-mono">roadmap</span> - Check mission directives & Q2-Q4 milestones</p>
            <p><span className="text-[#00f5ff] font-mono">funfacts</span> - Fetch personality indices</p>
            <p><span className="text-[#00f5ff] font-mono">clear</span> - Flush visual display buffer</p>
          </div>
        );
        break;
      case "whoami":
        output = "Starting Python class instantiation compiler...";
        runPythonSimulation();
        break;
      case "tech-stack":
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[#7b61ff] font-bold">// Languages:</span>
              <p>Python (Grade A), SQL, Java, C++, C, HTML5</p>
            </div>
            <div>
              <span className="text-[#7b61ff] font-bold">// AI & Data Science:</span>
              <p>LangChain, RAG Systems, Vertex AI, Statistics, Scikit-Learn, Pandas, NumPy</p>
            </div>
            <div>
              <span className="text-[#7b61ff] font-bold">// Tools & Design:</span>
              <p>GitHub, VS Code, Power BI, Supabase, Figma, Google Cloud, Postman</p>
            </div>
            <div>
              <span className="text-[#00f5ff] font-bold">// Target:</span>
              <p>AI Generalist &rarr; Quant AI &rarr; Agentic Systems</p>
            </div>
          </div>
        );
        break;
      case "achievements":
        output = (
          <div className="space-y-2">
            <p><span className="text-amber-400 font-bold">🥇 IEEE Award</span>: 1st Place - Cognitive Combat @ Techno Whiz '25</p>
            <p><span className="text-emerald-400 font-bold">🚀 Live Project</span>: Farm Fresh Poultry E-Commerce Platform (Shipped)</p>
            <p><span className="text-[#00f5ff] font-bold">☁️ Cloud Certified</span>: Google Cloud Skill Badges Earned (4x Badges)</p>
            <p><span className="text-[#7b61ff] font-bold">🐍 Python Expert</span>: Certified Grade A (IANT Computer Education)</p>
          </div>
        );
        break;
      case "roadmap":
        output = (
          <div className="space-y-1">
            <p><span className="text-emerald-400 font-bold">[COMPLETED]</span> Q2 2026: ML models on real Kaggle datasets</p>
            <p><span className="text-yellow-400 font-bold">[ACTIVE]</span> Q3 2026: First LangChain + RAG powered app deployed</p>
            <p><span className="text-[#7b61ff] font-bold">[LOCKED]</span> Q4 2026: AI + Stock Market prediction system</p>
            <p><span className="text-[#ff00aa] font-bold">[LOCKED]</span> Q1 2027: Agentic AI project — production ready</p>
          </div>
        );
        break;
      case "funfacts":
        output = (
          <ul className="list-disc pl-4 space-y-1 text-gray-300">
            <li>AI Generalist — not just a consumer, but a system builder.</li>
            <li>Firm believer in rigorous Science over superstition.</li>
            <li>Enthusiastically monitors global geopolitics & tech mega-trends.</li>
            <li>Strict daily equilibrium: Gym training + Deep programming.</li>
          </ul>
        );
        break;
      case "clear":
        setTerminalLogs([]);
        return;
      default:
        output = (
          <span className="text-red-400">
            [ERROR] Direct terminal command "{cmd}" not recognized. Try typing "help" to see valid clearance nodes.
          </span>
        );
    }

    setTerminalLogs(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: `⟩ ${cmd}`,
        output,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  };

  // Python Script Execution Simulator
  const runPythonSimulation = () => {
    if (isRunningPython) return;
    setIsRunningPython(true);
    setPythonOutput([]);
    let currentLine = 1;

    const lines = [
      { line: 8, out: "[BOOT]    NEURAL_CORE.v26 · 2026.STABLE initialized successfully" },
      { line: 15, out: "[PROFILE] Loaded: K. Akash | Bengaluru, India 🇮🇳" },
      { line: 18, out: "[EDUCATION] CMR University · B.Tech CSE (3rd Year)" },
      { line: 19, out: "[PYTHON]  Grade A Certification Verified" },
      { line: 20, out: "[CLOUD]   Google Cloud AI Track Certified (4 Skill Badges)" },
      { line: 21, out: "[AWARD]   IEEE Cognitive Combat — 🥇 1st Place Winner" },
      { line: 22, out: "[PRODUCT] Farm Fresh Poultry E-Commerce Platform live & shipped" },
      { line: 27, out: "[STREAM]  Mission set loaded → 6 active threads" },
      { line: 28, out: "[FACTS]   Fun facts loaded → 4 entries" },
      { line: 29, out: "[STATUS]  🟢 ONLINE — Exploring · Building · Winning" }
    ];

    const runNextLine = () => {
      if (currentLine <= 10) {
        const item = lines[currentLine - 1];
        setActiveCodeLine(item.line);
        playBeep(500 + currentLine * 60, 0.05, "triangle");
        setPythonOutput(prev => [...prev, item.out]);
        currentLine++;
        setTimeout(runNextLine, 600);
      } else {
        setIsRunningPython(false);
        setActiveCodeLine(null);
        playBeep(880, 0.15);
      }
    };

    runNextLine();
  };

  // Tech stack list
  const techStack = [
    // Languages
    { name: "Python", category: "languages", proficiency: 95, color: "from-[#00f5ff] to-[#00a3ff]", icon: <Code className="w-5 h-5" />, desc: "Primary language. Custom ML modeling & pipeline design." },
    { name: "SQL", category: "languages", proficiency: 85, color: "from-[#00ff88] to-[#00b3ff]", icon: <Database className="w-5 h-5" />, desc: "Structured query formulation, database optimizations." },
    { name: "Java", category: "languages", proficiency: 75, color: "from-[#ff00aa] to-[#ff6b00]", icon: <Code className="w-5 h-5" />, desc: "Object-oriented structures, CSE Core algorithms." },
    { name: "C++", category: "languages", proficiency: 80, color: "from-[#7b61ff] to-[#ff00aa]", icon: <Code className="w-5 h-5" />, desc: "High-performance processing, algorithms." },
    { name: "C", category: "languages", proficiency: 70, color: "from-[#00f5ff] to-[#7b61ff]", icon: <Code className="w-5 h-5" />, desc: "Low-level structures and system configurations." },
    { name: "HTML5", category: "languages", proficiency: 90, color: "from-[#ff6b00] to-[#ff00aa]", icon: <Code className="w-5 h-5" />, desc: "Interactive presentation templates, semantic structures." },
    // AI / ML
    { name: "LangChain", category: "ai", proficiency: 90, color: "from-[#ff6b00] to-[#00f5ff]", icon: <Brain className="w-5 h-5" />, desc: "Orchestrating agentic models and multi-tool schemas." },
    { name: "RAG Systems", category: "ai", proficiency: 88, color: "from-[#7b61ff] to-[#00ff88]", icon: <Network className="w-5 h-5" />, desc: "Retrieval Augmented Generation for proprietary knowledge bases." },
    { name: "Vertex AI", category: "ai", proficiency: 85, color: "from-[#00f5ff] to-[#7b61ff]", icon: <Cpu className="w-5 h-5" />, desc: "Google Cloud generative models orchestration & prompt deployment." },
    { name: "Statistics", category: "ai", proficiency: 88, color: "from-[#ff00aa] to-[#7b61ff]", icon: <LineChart className="w-5 h-5" />, desc: "Inferential & descriptive models, probability, regression, A/B testing configurations." },
    { name: "Scikit Learn", category: "ai", proficiency: 80, color: "from-[#ff6b00] to-[#ff00aa]", icon: <TrendingUp className="w-5 h-5" />, desc: "Predictive classification, clustering, and regressions." },
    { name: "Pandas", category: "ai", proficiency: 92, color: "from-[#ff00aa] to-[#7b61ff]", icon: <Server className="w-5 h-5" />, desc: "High-density data manipulation, complex frame processing." },
    { name: "NumPy", category: "ai", proficiency: 94, color: "from-[#00f5ff] to-[#00ff88]", icon: <Cpu className="w-5 h-5" />, desc: "N-dimensional matrices, linear algebra formulations." },
    // Tools
    { name: "Google Cloud", category: "tools", proficiency: 85, color: "from-[#ff6b00] to-[#00f5ff]", icon: <Server className="w-5 h-5" />, desc: "Skill Badge holder, cloud engine administration." },
    { name: "Supabase", category: "tools", proficiency: 88, color: "from-[#00ff88] to-[#00f5ff]", icon: <Database className="w-5 h-5" />, desc: "Real-time tables, auth storage, backend engine logic." },
    { name: "Power BI", category: "tools", proficiency: 86, color: "from-[#f2c811] to-[#e15729]", icon: <BarChart3 className="w-5 h-5" />, desc: "Interactive enterprise intelligence dashboarding, DAX expressions, ETL, visual reporting." },
    { name: "GitHub", category: "tools", proficiency: 95, color: "from-[#050010] to-[#7b61ff]", icon: <Github className="w-5 h-5" />, desc: "Repository controls, pipeline automation, collaborative branches." },
    { name: "Figma", category: "tools", proficiency: 80, color: "from-[#7b61ff] to-[#ff00aa]", icon: <Compass className="w-5 h-5" />, desc: "Interface wireframing, high-fidelity responsive vectors." },
    { name: "VS Code", category: "tools", proficiency: 92, color: "from-[#00f5ff] to-[#7b61ff]", icon: <Code className="w-5 h-5" />, desc: "Primary IDE. Highly customized macro structures and shortcuts." },
    { name: "Postman", category: "tools", proficiency: 85, color: "from-[#ff6b00] to-[#ff00aa]", icon: <Wrench className="w-5 h-5" />, desc: "API schema tests, payload validation." }
  ];

  const filteredTech = techFilter === "all" 
    ? techStack 
    : techStack.filter(t => t.category === techFilter);

  // Achievements detailed log
  const achievementsList: Achievement[] = [
    {
      id: "ieee",
      title: "🥇 IEEE 1st Place Champion",
      subtitle: "Cognitive Combat Tournament",
      org: "CMR University · IEEE Bangalore Section",
      date: "July 23, 2025",
      credentialId: "IEEE-SOET-2025-01",
      desc: "Secured First Place in the premium Cognitive Combat Hackathon. Designed and pitched algorithmic solutions, competing against 100+ multi-disciplinary student engineers.",
      category: "award",
      color: "border-pink-500/50 shadow-pink-500/10 text-[#ff00aa]"
    },
    {
      id: "python_cert",
      title: "🐍 Python Grade A Expert",
      subtitle: "Professional Python Certification",
      org: "IANT Computer Education",
      date: "Sept 25, 2024",
      credentialId: "KAR-BL-24-07-0009",
      desc: "Completed advanced Python engineering curriculum with Grade 'A' rating. Covered data structures, Object-Oriented paradigms, network architecture, and script optimization.",
      category: "certification",
      color: "border-cyan-500/50 shadow-cyan-500/10 text-[#00f5ff]"
    },
    {
      id: "farm_fresh",
      title: "🚀 Farm Fresh Platform",
      subtitle: "Poultry E-Commerce Live Application",
      org: "Self-Directed Product Deployment",
      date: "Shipped & Operational",
      desc: "Designed and developed a complete end-to-end poultry e-commerce system. Configured with Figma, backed securely by Supabase real-time storage, utilizing full-stack flow controllers.",
      category: "project",
      color: "border-emerald-500/50 shadow-emerald-500/10 text-emerald-400"
    },
    {
      id: "cloud_cert",
      title: "☁️ Google Cloud AI Expert",
      subtitle: "4x Skill Badges Certified",
      org: "Google Cloud Skills Boost",
      date: "Certified 2025",
      desc: "Earned 4 key industry credentials including: 'Prompt Design in Vertex AI', 'Intro to Generative AI', 'Intro to LLMs', and 'Responsible AI'. Verified on Google Cloud portal.",
      category: "certification",
      color: "border-orange-500/50 shadow-orange-500/10 text-orange-400"
    }
  ];

  // Dynamic status parameters
  const systemStatusList = [
    { label: "IP ADDRESS", value: "103.85.205.10" },
    { label: "CORE TEMPS", value: "42°C [STABLE]" },
    { label: "SYSTEM LOAD", value: "18.4% [NOMINAL]" },
    { label: "COGNITIVE STACK", value: "ACTIVE" },
    { label: "THREAT INDEX", value: "CREATIVE_MAX" }
  ];

  // Simulated git contributions
  const mockContributions = [
    [4, 0, 1, 3, 5, 2, 4],
    [2, 3, 0, 1, 4, 3, 2],
    [5, 4, 2, 3, 1, 0, 5],
    [1, 2, 4, 5, 3, 2, 1],
    [3, 1, 0, 2, 4, 5, 3],
    [4, 5, 2, 1, 3, 4, 2],
    [2, 3, 4, 1, 0, 5, 4],
    [5, 2, 1, 3, 4, 2, 1],
    [1, 4, 3, 5, 2, 0, 3],
    [3, 2, 5, 1, 4, 3, 2],
    [2, 1, 0, 4, 5, 2, 4],
    [4, 3, 2, 1, 3, 5, 1]
  ];

  return (
    <div className="min-h-screen bg-[#050010] text-gray-100 font-sans relative overflow-hidden pb-16">
      
      {/* Background Neon Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(123,97,255,0.15),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,35,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(18,16,35,0.3)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* GLOWING SYSTEM MARGIN CLOCK / HEADER BAR */}
      <div className="w-full bg-[#0d0a1b] border-b border-[#00f5ff]/20 px-4 md:px-8 py-2.5 flex flex-wrap justify-between items-center gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-share text-sm tracking-widest text-[#00f5ff]">
            NEURAL_CORE.v26 // INSTANCE: BENGALURU_IND
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#7b61ff]" />
            <span>UTC: {currentTime.toISOString().replace("T", " ").substring(0, 19)}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#ff00aa]" />
            <span>CLEARANCE: <span className="text-white font-bold">BUILDER_CLASS_Ω</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 relative z-10 space-y-6">

        {/* AI HERO BANNER & BASIC INFO */}
        <div className="relative rounded-2xl border border-[#7b61ff]/30 overflow-hidden bg-[#0d0a1b]/80 backdrop-blur-md shadow-[0_0_40px_rgba(123,97,255,0.1)]">
          
          {/* Main Banner Image Container */}
          <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1b] via-[#0d0a1b]/30 to-transparent z-10" />
            <img 
              src="/src/assets/images/cyber_akash_avatar_1784393572093.jpg" 
              alt="K. Akash Cybernetic Banner" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-85"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 right-4 z-20 bg-black/70 border border-[#00f5ff]/40 px-3 py-1 rounded font-mono text-[10px] text-[#00f5ff] uppercase tracking-wider backdrop-blur-sm">
              NEURAL_CORE // CORE_USER_ONLINE
            </div>
          </div>

          {/* User profile section */}
          <div className="p-6 md:p-8 -mt-12 sm:-mt-16 relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
              {/* Profile Avatar Frame */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-[#050010] border-2 border-[#00f5ff] p-0.5 shadow-[0_0_20px_rgba(0,245,255,0.3)] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/20 to-[#7b61ff]/20 opacity-40 z-10 pointer-events-none" />
                <img 
                  src="/src/assets/images/cyber_akash_avatar_1784393572093.jpg" 
                  alt="K. Akash Cybernetic Avatar" 
                  className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bio & Details */}
              <div className="text-center sm:text-left space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h1 className="text-3xl md:text-4xl font-extrabold font-share tracking-wide bg-gradient-to-r from-white via-slate-100 to-[#00f5ff] bg-clip-text text-transparent">
                    K. AKASH
                  </h1>
                  <span className="bg-[#ff00aa]/20 text-[#ff00aa] border border-[#ff00aa]/30 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                    ONLINE
                  </span>
                </div>
                
                <p className="text-lg text-slate-300 font-mono">
                  &lt;<span className="text-[#00f5ff]">AI Generalist</span> | <span className="text-[#7b61ff]">Builder</span> | <span className="text-emerald-400">Explorer</span> /&gt;
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-y-1 gap-x-4 text-xs text-gray-400 pt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00f5ff]" /> Bengaluru, Karnataka, India 🇮🇳
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#7b61ff]" /> CMR University · B.Tech CSE (3rd Year)
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Chips */}
            <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-col gap-3 font-mono">
              <div className="bg-[#050010] border border-[#7b61ff]/20 rounded-lg p-2 md:w-48 text-center md:text-left">
                <span className="text-[10px] text-gray-500 block uppercase">Threat Level</span>
                <span className="text-xs font-bold text-[#ff00aa] flex items-center justify-center md:justify-start gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> CREATIVE_MAX
                </span>
              </div>
              <div className="bg-[#050010] border border-[#7b61ff]/20 rounded-lg p-2 md:w-48 text-center md:text-left">
                <span className="text-[10px] text-gray-500 block uppercase">IEEE Combat</span>
                <span className="text-xs font-bold text-amber-400 flex items-center justify-center md:justify-start gap-1">
                  <Trophy className="w-3.5 h-3.5" /> 🥇 1st Place Win
                </span>
              </div>
            </div>

          </div>

          {/* Typing Terminal Summary Ribbon */}
          <div className="bg-[#050010] border-t border-[#7b61ff]/20 px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-[#00f5ff] font-bold">⟩</span>
              <span>Active Mission:</span>
              <span className="text-amber-400 font-bold">Agentic AI · LangChain · RAG Systems</span>
            </div>
            <div className="text-[11px] text-[#7b61ff]">
              "Continue Learning, Continue Exploring ∞"
            </div>
          </div>

        </div>

        {/* NEURAL CORE INTERACTIVE TERMINAL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Terminal Console (Cmd shell) - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col rounded-xl border border-[#00f5ff]/30 bg-[#0d0a1b]/95 overflow-hidden shadow-2xl">
            
            {/* Window bar */}
            <div className="bg-[#050010] border-b border-[#00f5ff]/20 px-4 py-2.5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00f5ff]" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
                  INTERACTIVE_CORE_CONSOLE // bash
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Quick Helper Protocol Buttons */}
            <div className="bg-[#100d24] border-b border-[#00f5ff]/10 px-4 py-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mr-1">Quick Protocols:</span>
              <button 
                onClick={() => { playBeep(600, 0.08); executeCommand("whoami"); }}
                className="bg-[#050010] hover:bg-[#7b61ff]/20 text-xs border border-[#7b61ff]/30 text-[#7b61ff] px-2.5 py-1 rounded font-mono transition-all hover:border-[#7b61ff]"
              >
                whoami
              </button>
              <button 
                onClick={() => { playBeep(650, 0.08); executeCommand("tech-stack"); }}
                className="bg-[#050010] hover:bg-[#00f5ff]/20 text-xs border border-[#00f5ff]/30 text-[#00f5ff] px-2.5 py-1 rounded font-mono transition-all hover:border-[#00f5ff]"
              >
                tech-stack
              </button>
              <button 
                onClick={() => { playBeep(700, 0.08); executeCommand("achievements"); }}
                className="bg-[#050010] hover:bg-[#ff00aa]/20 text-xs border border-[#ff00aa]/30 text-[#ff00aa] px-2.5 py-1 rounded font-mono transition-all hover:border-[#ff00aa]"
              >
                achievements
              </button>
              <button 
                onClick={() => { playBeep(750, 0.08); executeCommand("roadmap"); }}
                className="bg-[#050010] hover:bg-yellow-500/20 text-xs border border-yellow-500/30 text-yellow-400 px-2.5 py-1 rounded font-mono transition-all hover:border-yellow-400"
              >
                roadmap
              </button>
              <button 
                onClick={() => { playBeep(800, 0.08); executeCommand("funfacts"); }}
                className="bg-[#050010] hover:bg-emerald-500/20 text-xs border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded font-mono transition-all hover:border-emerald-400"
              >
                funfacts
              </button>
            </div>

            {/* Output Scrollbox */}
            <div className="p-4 flex-1 h-80 overflow-y-auto font-mono text-xs md:text-sm space-y-4">
              {terminalLogs.map(log => (
                <div key={log.id} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#7b61ff]">
                    <span>{log.command}</span>
                    <span className="text-[10px] text-slate-600 font-normal">[{log.timestamp}]</span>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-800 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {log.output}
                  </div>
                </div>
              ))}

              {/* Animated Compilation Logs */}
              {isRunningPython && (
                <div className="space-y-1 border-l-2 border-[#00f5ff] pl-3 py-1 bg-[#00f5ff]/5">
                  <p className="text-[#00f5ff] flex items-center gap-2 font-bold animate-pulse">
                    <Activity className="w-3.5 h-3.5 animate-spin" /> Compiling profile module...
                  </p>
                  <div className="space-y-0.5 text-[11px] text-[#00ff88]">
                    {pythonOutput.map((out, idx) => (
                      <p key={idx}>{out}</p>
                    ))}
                  </div>
                </div>
              )}

              <div ref={terminalEndRef} />
            </div>

            {/* Input Prompt Form */}
            <form onSubmit={handleCommandSubmit} className="bg-[#050010] border-t border-[#00f5ff]/20 p-3 flex items-center gap-2">
              <span className="text-[#00f5ff] font-mono font-bold pl-1 animate-pulse">⟩</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder='Type "help", "whoami", "tech-stack" or "roadmap"...'
                className="bg-transparent text-slate-100 placeholder-slate-600 outline-none flex-1 font-mono text-sm"
              />
              <button 
                type="submit"
                className="bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 text-[#00f5ff] font-mono border border-[#00f5ff]/40 text-xs px-3 py-1.5 rounded transition-colors"
              >
                EXECUTE
              </button>
            </form>

          </div>

          {/* Right Script Code Highlights Pane - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col rounded-xl border border-[#7b61ff]/30 bg-[#0d0a1b]/95 overflow-hidden shadow-2xl">
            
            <div className="bg-[#050010] border-b border-[#7b61ff]/20 px-4 py-2.5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#7b61ff]" />
                <span className="text-xs font-mono font-bold text-slate-300">
                  whoami_class_profile.py
                </span>
              </div>
              <button 
                onClick={runPythonSimulation}
                disabled={isRunningPython}
                className={`flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border transition-all ${
                  isRunningPython 
                    ? "bg-[#7b61ff]/10 text-[#7b61ff]/50 border-transparent cursor-not-allowed" 
                    : "bg-[#7b61ff]/20 text-[#7b61ff] border-[#7b61ff]/40 hover:bg-[#7b61ff] hover:text-white"
                }`}
              >
                <Play className="w-3 h-3" />
                <span>{isRunningPython ? "RUNNING" : "RUN"}</span>
              </button>
            </div>

            {/* Python Code Content */}
            <div className="p-4 flex-1 font-mono text-[11px] leading-relaxed overflow-x-auto text-slate-400 bg-[#050010]/60">
              <pre className="space-y-0.5">
                {[
                  '# !/usr/bin/env python3',
                  'class KAkash:',
                  '    ALIAS     = "NEURAL_CORE.v26"',
                  '    CLEARANCE = "BUILDER_CLASS_Ω"',
                  '    VERSION   = "2026.STABLE"',
                  '    def __init__(self):',
                  '        self.name        = "K. Akash"',
                  '        self.location    = "Bengaluru, Karnataka, India 🇮🇳"',
                  '        self.role        = ["AI Generalist", "Builder", "Explorer"]',
                  '        self.university  = "CMR University · 3rd Year · B.TECH. CSE"',
                  '        self.python      = "Grade A Certified  ·  IANT Computer Education"',
                  '        self.cloud       = "Google Cloud AI Track  ·  4 Skill Badges Earned"',
                  '        self.ieee        = "🥇 1st Place · Cognitive Combat · IEEE · CMR University"',
                  '        self.project     = "Farm Fresh — Poultry E-Commerce App · Shipped & Live"',
                  '        self.motto       = "Continue Learning, Continue Exploring ∞"',
                  '        self.status      = "🟢 ONLINE — Exploring · Building · Winning"',
                  '',
                  '    def current_missions(self) -> list:',
                  '        return [',
                  '            "⚡ Generative AI & Large Language Models",',
                  '            "☁️ Google Cloud Platform & Vertex AI",',
                  '            "🐍 Python · Data Science · Machine Learning",',
                  '            "🛠️ Building real-world AI-powered applications",',
                  '            "🧠 Agentic AI · LangChain · RAG Systems",',
                  '            "📈 AI + Stock Market · Algorithmic Intelligence",',
                  '        ]',
                  '',
                  'boot = KAkash()',
                  'print(f"[STATUS]  {boot.status}")'
                ].map((lineStr, idx) => {
                  const lineNum = idx + 1;
                  const isLineActive = 
                    (lineNum === 1 && activeCodeLine === 8) ||
                    (lineNum === 7 && activeCodeLine === 15) ||
                    (lineNum === 10 && activeCodeLine === 18) ||
                    (lineNum === 11 && activeCodeLine === 19) ||
                    (lineNum === 12 && activeCodeLine === 20) ||
                    (lineNum === 13 && activeCodeLine === 21) ||
                    (lineNum === 14 && activeCodeLine === 22) ||
                    (lineNum === 18 && activeCodeLine === 27) ||
                    (lineNum === 16 && activeCodeLine === 29);

                  return (
                    <div 
                      key={lineNum} 
                      className={`flex items-center w-full rounded ${
                        isLineActive ? "bg-[#00f5ff]/20 text-white font-bold border-l-2 border-[#00f5ff] pl-1" : "pl-1.5"
                      }`}
                    >
                      <span className="text-[9px] text-gray-600 select-none mr-3 w-4 text-right">{lineNum}</span>
                      <span className={
                        lineStr.trim().startsWith('#') 
                          ? "text-slate-500 italic" 
                          : lineStr.includes('"') 
                          ? "text-emerald-300" 
                          : lineStr.includes('def') || lineStr.includes('class') || lineStr.includes('import') || lineStr.includes('return')
                          ? "text-[#7b61ff]" 
                          : "text-slate-300"
                      }>
                        {lineStr}
                      </span>
                    </div>
                  );
                })}
              </pre>
            </div>

            {/* Quick Stats Panel */}
            <div className="bg-[#050010] border-t border-[#7b61ff]/20 p-4 grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="text-gray-500 uppercase text-[10px] block">Execution State</span>
                <span className="text-[#00ff88] font-bold">READY</span>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-[10px] block">Interpreter version</span>
                <span className="text-slate-300">CPython v3.12</span>
              </div>
            </div>

          </div>

        </div>

        {/* SECURE NODE DATA VISUALIZERS - TECH STACK EXPLORER */}
        <div className="rounded-xl border border-[#7b61ff]/20 bg-[#0d0a1b]/80 p-6 md:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold font-share tracking-wider text-[#00f5ff] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00f5ff]" /> ⟩ ls ./tech-stack --recursive
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                Querying modular system packages and expertise indexes
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs bg-[#050010] p-1 rounded-lg border border-[#7b61ff]/20">
              <button 
                onClick={() => { playBeep(500, 0.05); setTechFilter("all"); }}
                className={`px-3 py-1 rounded transition-colors ${techFilter === "all" ? "bg-[#7b61ff] text-white" : "text-gray-400 hover:text-white"}`}
              >
                ALL
              </button>
              <button 
                onClick={() => { playBeep(520, 0.05); setTechFilter("languages"); }}
                className={`px-3 py-1 rounded transition-colors ${techFilter === "languages" ? "bg-[#7b61ff] text-white" : "text-gray-400 hover:text-white"}`}
              >
                LANGUAGES
              </button>
              <button 
                onClick={() => { playBeep(540, 0.05); setTechFilter("ai"); }}
                className={`px-3 py-1 rounded transition-colors ${techFilter === "ai" ? "bg-[#7b61ff] text-white" : "text-gray-400 hover:text-white"}`}
              >
                AI · ML · DATA
              </button>
              <button 
                onClick={() => { playBeep(560, 0.05); setTechFilter("tools"); }}
                className={`px-3 py-1 rounded transition-colors ${techFilter === "tools" ? "bg-[#7b61ff] text-white" : "text-gray-400 hover:text-white"}`}
              >
                TOOLS
              </button>
            </div>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTech.map(tech => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={tech.name}
                  className="bg-[#050010] border border-[#7b61ff]/10 hover:border-[#00f5ff]/40 p-4 rounded-xl group transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${tech.color}`} />
                  
                  <div className="flex justify-between items-start mb-2 pl-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-gray-400 group-hover:text-[#00f5ff] transition-colors">
                        {tech.icon}
                      </span>
                      <h3 className="text-sm font-bold text-slate-200 group-hover:text-white font-mono">
                        {tech.name}
                      </h3>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase bg-[#0d0a1b] px-2 py-0.5 rounded border border-[#7b61ff]/10">
                      {tech.category}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 font-mono mb-4 pl-2 leading-relaxed h-10 overflow-hidden">
                    {tech.desc}
                  </p>

                  {/* Level metrics */}
                  <div className="space-y-1 pl-2">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-500">OPTIMIZATION LEVEL</span>
                      <span className="text-white font-bold">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-[#0d0a1b] h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* HIGH TECH HISTORICAL CONTRIBUTIONS GRAPH */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* GitHub Style Contribution map card - 8 columns */}
          <div className="md:col-span-8 rounded-xl border border-[#00f5ff]/20 bg-[#0d0a1b]/80 p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold font-mono text-[#00f5ff] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#00f5ff]" /> ⟩ git log --graph --neural-map
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                System commits & development velocity over 52 cycles
              </p>
            </div>

            {/* Simulated Grid of git squares */}
            <div className="bg-[#050010] p-4 rounded-xl border border-[#7b61ff]/10 flex flex-col justify-center">
              <div className="flex justify-between text-[9px] text-gray-600 font-mono mb-2">
                <span>AUG</span>
                <span>OCT</span>
                <span>DEC</span>
                <span>FEB</span>
                <span>APR</span>
                <span>JUN</span>
              </div>
              <div className="flex gap-1 overflow-x-auto pb-2">
                {mockContributions.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-1">
                    {col.map((val, rIdx) => {
                      const color = 
                        val === 5 ? "bg-[#00f5ff]" :
                        val === 4 ? "bg-[#00c5ff]/80" :
                        val === 3 ? "bg-[#7b61ff]" :
                        val === 2 ? "bg-[#1f1a3a]" :
                        val === 1 ? "bg-[#110d24]" : "bg-[#0d0a1b]";
                      return (
                        <div 
                          key={rIdx} 
                          title={`Commit cycle intensity: Level ${val}`}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 hover:z-20 ${color}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-1 text-[9px] text-gray-600 font-mono mt-2">
                <span>Less</span>
                <div className="w-2 h-2 bg-[#0d0a1b] rounded-sm" />
                <div className="w-2 h-2 bg-[#110d24] rounded-sm" />
                <div className="w-2 h-2 bg-[#1f1a3a] rounded-sm" />
                <div className="w-2 h-2 bg-[#7b61ff] rounded-sm" />
                <div className="w-2 h-2 bg-[#00f5ff] rounded-sm" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Core System parameters widget - 4 columns */}
          <div className="md:col-span-4 rounded-xl border border-[#ff00aa]/20 bg-[#0d0a1b]/80 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold font-mono text-[#ff00aa] flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#ff00aa]" /> ⟩ ping parameters --all-nodes
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Active core systems telemetry diagnostics
              </p>
            </div>

            <div className="space-y-2 font-mono">
              {systemStatusList.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs bg-[#050010] p-2 rounded border border-[#7b61ff]/10">
                  <span className="text-gray-500">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* POWER BI & STATISTICS INTEGRATED INTELLIGENCE PANEL */}
        <div className="rounded-xl border border-[#f2c811]/30 bg-[#0d0a1b]/80 p-6 md:p-8 space-y-6 relative overflow-hidden">
          {/* Subtle neon glowing gradient background */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#f2c811]/10 to-[#7b61ff]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#7b61ff]/20 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#f2c811] animate-ping" />
                <h2 className="text-xl font-bold font-share tracking-wider text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#f2c811]" /> ⟩ neural_bi_analytics.sh
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Interactive Business Intelligence & Statistical Hypothesis verification engine.
              </p>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center gap-1.5 font-mono text-xs bg-[#050010] p-1 rounded-lg border border-[#7b61ff]/20">
              <button 
                onClick={() => { playBeep(650, 0.05); setSelectedBiTab("powerbi"); }}
                className={`px-3 py-1.5 rounded transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${selectedBiTab === "powerbi" ? "bg-[#f2c811] text-black font-bold shadow-[0_0_12px_rgba(242,200,17,0.3)]" : "text-gray-400 hover:text-white"}`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                POWER BI ENGINE
              </button>
              <button 
                onClick={() => { playBeep(700, 0.05); setSelectedBiTab("stats"); }}
                className={`px-3 py-1.5 rounded transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${selectedBiTab === "stats" ? "bg-[#7b61ff] text-white font-bold shadow-[0_0_12px_rgba(123,97,255,0.4)]" : "text-gray-400 hover:text-white"}`}
              >
                <LineChart className="w-3.5 h-3.5" />
                STATISTICAL CORES
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selectedBiTab === "powerbi" ? (
              <motion.div 
                key="powerbi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Left controls and DAX selector (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#050010] p-5 rounded-xl border border-[#f2c811]/20 space-y-4">
                    <span className="text-xs font-mono text-[#f2c811] font-bold tracking-widest block uppercase">// DAX Query Formulation Nodes</span>
                    
                    <div className="space-y-3">
                      {[
                        { 
                          name: "CALCULATE", 
                          formula: "CALCULATE(SUM(Velocity[Commits]), Velocity[Confidence] > 0.88)", 
                          desc: "Modifies standard filter context to measure peak developer velocity." 
                        },
                        { 
                          name: "DIVIDE", 
                          formula: "DIVIDE(SUM(Model[Precision]), DISTINCTCOUNT(Model[RunID]), 0)", 
                          desc: "Computes safe model precision margins with zero-division protection." 
                        },
                        { 
                          name: "SWITCH", 
                          formula: "SWITCH(TRUE(), [Z_Score] >= 1.96, \"Significant\", \"Nominal\")", 
                          desc: "Dynamic conditional evaluation for statistical clearance limits." 
                        },
                        { 
                          name: "SUMX", 
                          formula: "SUMX(FILTER(Telemetry, [Status] = \"Active\"), [Cycles] * [Frequency])", 
                          desc: "Iterates through row levels to calculate aggregated core cycles." 
                        }
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            playBeep(400 + 100 * item.name.length, 0.05);
                            setDaxFunction(item.name);
                            setDaxLogs([
                              `[STBY] Switched to DAX measure: [${item.name}_Metric]`,
                              `[QUERY] ${item.formula}`
                            ]);
                            setDaxResult("Click 'Execute' to calculate measures");
                          }}
                          className={`w-full text-left p-3 rounded-lg border transition-all text-xs font-mono cursor-pointer ${daxFunction === item.name ? "border-[#f2c811] bg-[#f2c811]/5 text-white" : "border-slate-800 bg-[#0d0a1b]/40 hover:border-[#f2c811]/40 text-slate-400"}`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-[#f2c811]">{item.name}()</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase">DAX EXPRESSION</span>
                          </div>
                          <p className="font-mono text-[10px] text-slate-300 truncate font-light mb-1.5">{item.formula}</p>
                          <p className="text-[10px] text-slate-400 font-sans leading-normal">{item.desc}</p>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => executeDaxFormula(daxFunction)}
                      disabled={isDaxProcessing}
                      className={`w-full py-2.5 rounded-lg text-xs font-mono font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        isDaxProcessing 
                          ? "bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed" 
                          : "bg-gradient-to-r from-[#f2c811] to-[#e15729] text-black shadow-[0_0_15px_rgba(242,200,17,0.2)] hover:shadow-[0_0_20px_rgba(242,200,17,0.4)]"
                      }`}
                    >
                      {isDaxProcessing ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                          COMPILING DAX QUERY...
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-black" />
                          EXECUTE DAX EXPRESSION
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Visual Dashboard & Compilation Terminal (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  {/* Visual Chart Mockup */}
                  <div className="bg-[#050010] border border-[#f2c811]/20 rounded-xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">POWER BI CORE VISUALIZATION</span>
                        <h4 className="text-sm font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
                          Enterprise KPI: [Neural Velocity Accumulations]
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded animate-pulse">
                        LIVE_RENDER
                      </span>
                    </div>

                    {/* SVG Interactive Dashboard Chart */}
                    <div className="h-36 w-full flex items-end justify-between gap-1 bg-[#0d0a1b]/60 border border-slate-800/80 rounded-lg p-3 relative">
                      <div className="absolute top-2 left-2 flex gap-4 text-[9px] font-mono text-slate-500">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#f2c811] rounded-full" />
                          Direct Volume
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#e15729] rounded-full animate-pulse" />
                          Processed Velocity
                        </span>
                      </div>

                      {/* Y Axis grid lines */}
                      <div className="absolute left-0 right-0 top-1/4 border-t border-slate-900/40 pointer-events-none" />
                      <div className="absolute left-0 right-0 top-2/4 border-t border-slate-900/40 pointer-events-none" />
                      <div className="absolute left-0 right-0 top-3/4 border-t border-slate-900/40 pointer-events-none" />

                      {/* Simulated Bar Visual columns */}
                      {[
                        { day: "M1", val1: 45, val2: 30 },
                        { day: "M2", val1: 65, val2: 50 },
                        { day: "M3", val1: 85, val2: 75 },
                        { day: "M4", val1: 55, val2: 40 },
                        { day: "M5", val1: 90, val2: 85 },
                        { day: "M6", val1: 70, val2: 60 },
                        { day: "M7", val1: 98, val2: 94 }
                      ].map((bar, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-end items-center h-full group relative z-10">
                          {/* Value tooltip on hover */}
                          <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-[9px] font-mono px-1.5 py-0.5 rounded border border-[#f2c811]/40 text-white z-20 pointer-events-none">
                            {bar.val1}% / {bar.val2}%
                          </div>
                          
                          <div className="w-full flex gap-0.5 items-end justify-center h-2/3">
                            <motion.div 
                              className="w-2 rounded-t bg-[#f2c811] hover:brightness-110 transition-all"
                              style={{ height: `${bar.val1}%` }}
                              initial={{ height: 0 }}
                              animate={{ height: `${bar.val1}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                            <motion.div 
                              className="w-2 rounded-t bg-[#e15729] hover:brightness-110 transition-all"
                              style={{ height: `${bar.val2}%` }}
                              initial={{ height: 0 }}
                              animate={{ height: `${bar.val2}%` }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            />
                          </div>
                          <span className="text-[9px] text-slate-500 font-mono mt-1">{bar.day}</span>
                        </div>
                      ))}
                    </div>

                    {/* Result and Status */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#0d0a1b]/50 border border-slate-800/80 rounded-lg p-3">
                        <span className="text-[9px] text-slate-500 font-mono block uppercase">OUTPUT KPI RESULT</span>
                        <div className={`text-sm font-bold font-mono mt-1 ${isDaxProcessing ? "text-slate-500 animate-pulse" : "text-[#f2c811]"}`}>
                          {daxResult}
                        </div>
                      </div>
                      <div className="bg-[#0d0a1b]/50 border border-slate-800/80 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <span className="text-[9px] text-slate-500 font-mono block uppercase">ACTIVE MEASURE</span>
                          <span className="text-xs font-bold text-white font-mono mt-1 block">
                            {daxFunction}()_Model
                          </span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      </div>
                    </div>
                  </div>

                  {/* VertiPaq Compilation Console logs */}
                  <div className="bg-[#050010] border border-slate-800 rounded-xl p-4 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-500 border-b border-slate-800/40 pb-1.5 mb-2 text-[10px]">
                      <span>⟩ DAX_ENGINE_LOGS</span>
                      <span>ACTIVE TERMINAL</span>
                    </div>
                    <div className="space-y-1 text-slate-300 h-24 overflow-y-auto font-mono text-[11px] leading-relaxed">
                      {daxLogs.map((log, lIdx) => (
                        <div key={lIdx} className="flex gap-2">
                          <span className="text-slate-600">[{lIdx+1}]</span>
                          <span className={log.startsWith("[SUCCESS]") ? "text-emerald-400" : log.startsWith("[EXECUTE]") ? "text-[#f2c811]" : "text-slate-300"}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="stats"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Left sliders (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#050010] p-5 rounded-xl border border-[#7b61ff]/20 space-y-5">
                    <div>
                      <span className="text-xs font-mono text-[#7b61ff] font-bold tracking-widest block uppercase">// Gaussian Distribution Parameters</span>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-sans leading-normal">
                        Configure mean, variability, and significance standards to dynamically model data populations.
                      </p>
                    </div>

                    {/* Mean Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Sample Mean (μ)</span>
                        <span className="text-[#00f5ff] font-bold">{statsMean}</span>
                      </div>
                      <input 
                        type="range" 
                        min="25" 
                        max="75" 
                        value={statsMean}
                        onChange={(e) => {
                          setStatsMean(Number(e.target.value));
                          playBeep(200 + Number(e.target.value) * 4, 0.02);
                        }}
                        className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#7b61ff]"
                      />
                      <div className="flex justify-between text-[9px] text-slate-600 font-mono">
                        <span>25 (Negative Deviation)</span>
                        <span>50 (H₀ Null)</span>
                        <span>75 (Positive Deviation)</span>
                      </div>
                    </div>

                    {/* StdDev Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Standard Deviation (σ)</span>
                        <span className="text-[#ff00aa] font-bold">{statsStdDev}</span>
                      </div>
                      <input 
                        type="range" 
                        min="5" 
                        max="25" 
                        value={statsStdDev}
                        onChange={(e) => {
                          setStatsStdDev(Number(e.target.value));
                          playBeep(300 + Number(e.target.value) * 6, 0.02);
                        }}
                        className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#7b61ff]"
                      />
                      <div className="flex justify-between text-[9px] text-slate-600 font-mono">
                        <span>5 (Ultra-Tight Variance)</span>
                        <span>25 (Wide Variance)</span>
                      </div>
                    </div>

                    {/* Confidence Multiplier */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-slate-400 block">Confidence Level (1 - α)</span>
                      <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                        {[90, 95, 99].map((conf) => (
                          <button
                            key={conf}
                            onClick={() => {
                              playBeep(600 + conf, 0.05);
                              setStatsConfidence(conf);
                            }}
                            className={`py-2 rounded-lg border text-center font-bold transition-all cursor-pointer ${statsConfidence === conf ? "border-[#7b61ff] bg-[#7b61ff]/10 text-white" : "border-slate-800 bg-[#0d0a1b]/40 hover:border-[#7b61ff]/40 text-slate-400"}`}
                          >
                            {conf}% (α={(1 - conf/100).toFixed(2)})
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Interactive bell curve rendering (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-[#050010] border border-[#7b61ff]/20 rounded-xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">DYNAMIC STATISTICAL MODELLING</span>
                        <h4 className="text-sm font-bold text-white font-mono mt-0.5">
                          Standard Normal Probability Density Function
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono border border-[#00f5ff]/30 text-[#00f5ff] bg-[#00f5ff]/5 px-2 py-0.5 rounded">
                        Z-TEST EQUILIBRIUM
                      </span>
                    </div>

                    {/* Dynamic SVG Normal Curve */}
                    <div className="h-44 w-full bg-[#0d0a1b]/60 border border-slate-800/80 rounded-lg p-3 flex items-center justify-center relative overflow-hidden">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#7b61ff" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#7b61ff" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="criticalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff00aa" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#ff00aa" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Standard background grid */}
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#1f1a3a" strokeWidth="1" />
                        <line x1="200" y1="10" x2="200" y2="110" stroke="#1f1a3a" strokeDasharray="3 3" />

                        {/* Critical values boundary lines */}
                        {/* Mean representation */}
                        <line 
                          x1={200 + (statsMean - 50) * 3} 
                          y1="10" 
                          x2={200 + (statsMean - 50) * 3} 
                          y2="100" 
                          stroke="#00f5ff" 
                          strokeWidth="1.5" 
                          strokeDasharray="2 2"
                        />

                        {/* Generate normal distribution path dynamically */}
                        {(() => {
                          // Standard curve function: y = amplitude * exp(- (x - μ)^2 / (2 * σ^2))
                          const mu = statsMean;
                          const sigma = statsStdDev;
                          const amp = 85; 

                          let dPath = "";
                          let fillPath = "";
                          
                          // Generate 100 points
                          for (let xPos = 0; xPos <= 400; xPos++) {
                            // Translate x to standard scale
                            const xVal = (xPos - 200) / 4 + 50; 
                            const exponent = -Math.pow(xVal - mu, 2) / (2 * Math.pow(sigma, 2));
                            const yVal = 100 - amp * Math.exp(exponent);
                            
                            if (xPos === 0) {
                              dPath += `M ${xPos} ${yVal}`;
                              fillPath += `M ${xPos} 100 L ${xPos} ${yVal}`;
                            } else {
                              dPath += ` L ${xPos} ${yVal}`;
                              fillPath += ` L ${xPos} ${yVal}`;
                            }
                          }
                          fillPath += " L 400 100 Z";

                          return (
                            <>
                              <path d={fillPath} fill="url(#curveGrad)" />
                              <path d={dPath} fill="none" stroke="#7b61ff" strokeWidth="2.5" />
                            </>
                          );
                        })()}

                        {/* Mean label pointer */}
                        <text 
                          x={Math.max(10, Math.min(380, 200 + (statsMean - 50) * 3))} 
                          y="112" 
                          fill="#00f5ff" 
                          fontSize="8" 
                          fontFamily="monospace" 
                          textAnchor="middle"
                        >
                          μ = {statsMean}
                        </text>
                      </svg>

                      {/* Mathematical overlay parameters */}
                      <div className="absolute top-2 right-2 bg-[#050010]/80 border border-slate-800 p-2 rounded text-[9px] font-mono space-y-0.5 text-slate-300">
                        <div>Hypothesis H₀: <span className="text-slate-500">μ = 50</span></div>
                        <div>Hypothesis H₁: <span className="text-[#00f5ff]">μ ≠ 50</span></div>
                      </div>
                    </div>

                    {/* Statistics Metrics Results Panel */}
                    <div className="grid grid-cols-3 gap-3 font-mono text-center">
                      <div className="bg-[#0d0a1b]/50 border border-slate-800 p-2 rounded-lg">
                        <span className="text-[8px] text-slate-500 block">COMPUTED Z-SCORE</span>
                        <span className={`text-sm font-bold block mt-0.5 ${Math.abs(statsZScore) >= 1.96 ? "text-emerald-400" : "text-amber-400"}`}>
                          {statsZScore > 0 ? `+${statsZScore}` : statsZScore}
                        </span>
                      </div>
                      
                      <div className="bg-[#0d0a1b]/50 border border-slate-800 p-2 rounded-lg">
                        <span className="text-[8px] text-slate-500 block">P-VALUE (TWO-TAILED)</span>
                        <span className={`text-sm font-bold block mt-0.5 ${statsPValue < 0.05 ? "text-[#00f5ff]" : "text-slate-400"}`}>
                          {statsPValue}
                        </span>
                      </div>

                      <div className="bg-[#0d0a1b]/50 border border-slate-800 p-2 rounded-lg">
                        <span className="text-[8px] text-slate-500 block">HYPOTHESIS RESULT</span>
                        <span className={`text-[10px] font-bold block mt-1 uppercase ${statsIsHypothesisValid ? "text-emerald-400" : "text-[#ff00aa] font-extrabold animate-pulse shadow-[0_0_8px_rgba(255,0,170,0.2)]"}`}>
                          {statsIsHypothesisValid ? "REJECT H₀ (SIG)" : "FAIL TO REJECT"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ACHIEVEMENTS SYSTEM MATRIX - EXPANDABLE PORTFOLIO CARDS */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-share tracking-wider text-[#00f5ff] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00f5ff]" /> ⟩ cat achievements.log
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              Classified credentials, competitive wins, and major shipped products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsList.map(item => (
              <div 
                key={item.id}
                className={`bg-[#0d0a1b]/80 rounded-xl border-l-4 ${item.color} p-6 flex flex-col justify-between space-y-4 shadow-xl hover:bg-[#0d0a1b] transition-all`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-[#050010] rounded text-slate-400 tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white font-share mt-1 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#7b61ff] font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 font-mono leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-[#7b61ff]/10">
                  <span className="text-[11px] text-gray-500 font-mono">
                    ISSUED BY: <span className="text-slate-300 font-bold">{item.org}</span>
                  </span>
                  
                  {item.credentialId && (
                    <span className="text-[10px] bg-[#050010] px-2.5 py-1 rounded font-mono text-[#00f5ff] border border-[#00f5ff]/20">
                      ID: {item.credentialId}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE ROADMAP / CHRONO MILESTONES SECTION */}
        <div className="rounded-xl border border-yellow-500/20 bg-[#0d0a1b]/80 p-6 md:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold font-share tracking-wider text-yellow-400 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-yellow-400" /> ⟩ cat roadmap.json
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                System trajectory map and prospective milestones
              </p>
            </div>
            <div className="text-xs text-yellow-400/80 font-mono bg-[#050010] border border-yellow-500/30 px-3 py-1.5 rounded-lg">
              TARGET: <span className="text-white font-bold">Quant AI &rarr; Agentic Systems</span>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l border-[#7b61ff]/30 ml-4 md:ml-6 space-y-8 py-4">
            {[
              {
                id: "Q2_2026",
                period: "Q2 2026",
                title: "Machine Learning Modeling On Real Datasets",
                desc: "Rigorous execution of predictive classifiers and regressions on Kaggle datasets using Scikit-Learn, Pandas, and NumPy.",
                status: "COMPLETED",
                statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
                badge: <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              },
              {
                id: "Q3_2026",
                period: "Q3 2026",
                title: "Deploying RAG Powered Applications",
                desc: "Constructing and shipping highly intelligent LangChain + Vector database-driven applications connected to custom Knowledge bases.",
                status: "IN PROGRESS",
                statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-500/30",
                badge: <Activity className="w-4 h-4 text-yellow-400 animate-spin" />
              },
              {
                id: "Q4_2026",
                period: "Q4 2026",
                title: "AI + Stock Market Prediction",
                desc: "Developing algorithmic quant models for market analysis, leveraging neural core time-series indicators.",
                status: "PLANNED",
                statusColor: "text-slate-400 bg-slate-800/50 border-slate-700",
                badge: <Clock className="w-4 h-4 text-slate-500" />
              },
              {
                id: "Q1_2027",
                period: "Q1 2027",
                title: "Agentic AI Production Launch",
                desc: "Shipping autonomous multi-agent systems designed with persistent memory buffers and customized external tool integrations.",
                status: "PLANNED",
                statusColor: "text-slate-400 bg-slate-800/50 border-slate-700",
                badge: <Sparkles className="w-4 h-4 text-slate-500" />
              }
            ].map((milestone) => (
              <div key={milestone.id} className="relative pl-8 md:pl-10">
                {/* Timeline node */}
                <div className={`absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#050010] border-2 flex items-center justify-center z-10 ${
                  checkedMilestones[milestone.id] ? "border-emerald-400" : "border-[#7b61ff]"
                }`}>
                  {milestone.badge}
                </div>

                <div className="bg-[#050010] border border-[#7b61ff]/10 hover:border-[#7b61ff]/40 p-5 rounded-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#00f5ff] font-mono uppercase tracking-widest bg-[#0d0a1b] border border-[#00f5ff]/20 px-2 py-0.5 rounded">
                      {milestone.period}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-all duration-300 ${milestone.statusColor} ${
                          milestone.status !== "COMPLETED" ? "shadow-[0_0_8px_rgba(123,97,255,0.15)]" : ""
                        }`}>
                          {milestone.status}
                        </span>
                        {milestone.status !== "COMPLETED" && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded border border-[#ff00aa]/30 text-[#ff00aa] bg-[#ff00aa]/5 animate-pulse shadow-[0_0_10px_rgba(255,0,170,0.15)] select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff00aa]" />
                            COMING SOON
                          </span>
                        )}
                      </div>
                      <input 
                        type="checkbox" 
                        checked={checkedMilestones[milestone.id]}
                        onChange={() => {
                          playBeep(checkedMilestones[milestone.id] ? 400 : 700, 0.08);
                          setCheckedMilestones(prev => ({
                            ...prev,
                            [milestone.id]: !prev[milestone.id]
                          }));
                        }}
                        className="w-4 h-4 rounded border-slate-700 text-[#7b61ff] focus:ring-[#7b61ff] bg-slate-900 cursor-pointer"
                      />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-share tracking-wide">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-1 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SECURE LINKAGES / CONNECT PORTAL */}
        <div className="rounded-xl border border-[#00f5ff]/20 bg-[#0d0a1b]/80 p-6 md:p-8 space-y-6">
          
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-share tracking-wider text-[#00f5ff] flex items-center gap-2">
              <Network className="w-5 h-5 text-[#00f5ff]" /> ⟩ ping connect --all-nodes
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              Open to collaborative intelligence pipelines, internship nodes, and generative projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            
            <a 
              href="https://www.linkedin.com/in/k-akash-%F0%9F%A4%96-724b11330" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => playBeep(950, 0.1)}
              className="bg-[#050010] hover:bg-[#0077b5]/10 border border-[#0077b5]/30 hover:border-[#0077b5] p-5 rounded-xl group transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <Linkedin className="w-8 h-8 text-[#0077b5] group-hover:scale-110 transition-transform" />
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 block">LINKEDIN CONNECTION</span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">Connect Now &rarr;</span>
              </div>
            </a>

            <a 
              href="https://github.com/kakashsunny" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => playBeep(1000, 0.1)}
              className="bg-[#050010] hover:bg-white/5 border border-slate-800 hover:border-slate-500 p-5 rounded-xl group transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <Github className="w-8 h-8 text-slate-200 group-hover:scale-110 transition-transform" />
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 block">GITHUB PROFILE</span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">Follow @kakashsunny &rarr;</span>
              </div>
            </a>

            <a 
              href="https://www.kaggle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => playBeep(1050, 0.1)}
              className="bg-[#050010] hover:bg-[#20beff]/10 border border-[#20beff]/30 hover:border-[#20beff] p-5 rounded-xl group transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <Cpu className="w-8 h-8 text-[#20beff] group-hover:scale-110 transition-transform" />
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 block">KAGGLE REPOSITORY</span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">Follow Analytics &rarr;</span>
              </div>
            </a>

            <a 
              href="https://www.cloudskillsboost.google" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => playBeep(1100, 0.1)}
              className="bg-[#050010] hover:bg-[#ff6b00]/10 border border-[#ff6b00]/30 hover:border-[#ff6b00] p-5 rounded-xl group transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <Server className="w-8 h-8 text-[#ff6b00] group-hover:scale-110 transition-transform" />
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 block">GOOGLE CLOUD PROFILE</span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">View Badges &rarr;</span>
              </div>
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full text-center mt-12 pt-6 border-t border-[#7b61ff]/10 font-mono text-[11px] text-gray-500">
        <p>// ALL SYSTEMS NOMINAL · NEURAL_CORE.v26 · K. AKASH</p>
        <p className="mt-1 text-slate-600">Built using React + Tailwind + Motion · {currentTime.getFullYear()}</p>
      </footer>

    </div>
  );
}
