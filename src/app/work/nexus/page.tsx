"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, Users, Cpu, Shield, Settings, Activity, Database, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NexusPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "cluster" | "settings">("overview");

  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative bg-[#080B10] min-h-[70vh] flex items-end overflow-hidden border-b border-off-white/10">
        <svg
          viewBox="0 0 1400 700"
          fill="none"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="1400" height="700" fill="#080B10" />
          
          {/* Subtle tech isometric grid */}
          {[100, 250, 400, 550].map((y) => (
            <line key={y} x1="0" y1={y} x2="1400" y2={y} stroke="#4A8FFF" strokeWidth="0.5" opacity="0.1" />
          ))}
          {[200, 400, 600, 800, 1000, 1200].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="700" stroke="#4A8FFF" strokeWidth="0.5" opacity="0.08" />
          ))}

          {/* Node graph representation */}
          <circle cx="700" cy="300" r="8" fill="#4A8FFF" opacity="0.8" />
          <circle cx="500" cy="220" r="5" fill="#4A8FFF" opacity="0.5" />
          <circle cx="900" cy="240" r="5" fill="#4A8FFF" opacity="0.5" />
          <circle cx="420" cy="380" r="6" fill="#4A8FFF" opacity="0.6" />
          <circle cx="980" cy="360" r="6" fill="#4A8FFF" opacity="0.6" />
          <circle cx="700" cy="460" r="7" fill="#4A8FFF" opacity="0.7" />

          <line x1="700" y1="300" x2="500" y2="220" stroke="#4A8FFF" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="300" x2="900" y2="240" stroke="#4A8FFF" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="300" x2="420" y2="380" stroke="#4A8FFF" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="300" x2="980" y2="360" stroke="#4A8FFF" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="300" x2="700" y2="460" stroke="#4A8FFF" strokeWidth="1" opacity="0.4" />
          <line x1="420" y1="380" x2="700" y2="460" stroke="#4A8FFF" strokeWidth="1" opacity="0.2" />
          <line x1="980" y1="360" x2="700" y2="460" stroke="#4A8FFF" strokeWidth="1" opacity="0.2" />

          {/* Labels */}
          <text x="60" y="80" fill="#4A8FFF" fontSize="11" fontFamily="monospace" letterSpacing="5" opacity="0.5">NEXUS // REAL-TIME DISTRIBUTED METRICS</text>
          <text x="60" y="100" fill="#4A8FFF" fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.3">SAAS APPLICATION CONCEPT — 2024</text>

          <rect x="0" y="0" width="20" height="1" fill="#4A8FFF" opacity="0.4" />
          <rect x="0" y="0" width="1" height="20" fill="#4A8FFF" opacity="0.4" />
          <rect x="1380" y="0" width="20" height="1" fill="#4A8FFF" opacity="0.4" />
          <rect x="1399" y="0" width="1" height="20" fill="#4A8FFF" opacity="0.4" />
        </svg>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-14 w-full">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-off-white/40 hover:text-off-white transition-colors mb-10"
          >
            <ArrowLeft size={12} />
            Back to Work
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Web Application</span>
                <span className="font-mono text-[10px] bg-[#4A8FFF]/10 text-[#4A8FFF] px-2 py-1 border border-[#4A8FFF]/20">Concept Project</span>
              </div>
              <h1 className="font-grotesk font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight" style={{ color: "#4A8FFF" }}>
                NEXUS
              </h1>
            </div>
            <p className="text-off-white/50 text-sm md:text-base max-w-sm leading-relaxed">
              A high-density operational telemetry dashboard engineered for multi-cloud monitoring and real-time query analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Concept Notice */}
      <div className="bg-graphite border-b border-off-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
          <p className="font-mono text-[11px] text-off-white/40">
            <span className="text-lime mr-3">Note:</span>
            This is an independent concept project created by Webworks Studio. NEXUS is a conceptual exploration of high-performance SaaS dashboard architecture, data visualization, and settings workflows.
          </p>
        </div>
      </div>

      {/* Architectural Overview */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Application Architecture</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl mt-4 tracking-tight">Data Density Without Cognitive Overload</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-off-white/70 text-base leading-relaxed">
              Enterprise and infrastructure SaaS frequently fails at interface hierarchy. Too many tools either display sparse consumer whitespace or an impenetrable wall of numbers. NEXUS was designed to solve this tension.
            </p>
            <p className="text-off-white/50 text-sm leading-relaxed">
              Built with a modular card geometry, persistent navigational spine, interactive SVG data streams, and contextual configuration panels, NEXUS showcases how modern web tools handle massive real-time datasets gracefully.
            </p>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-off-white/10 font-mono text-xs">
              <div>
                <p className="text-off-white/30 text-[10px] uppercase mb-1">State Mgmt</p>
                <p className="text-[#4A8FFF] font-semibold">Zustand + Immutability</p>
              </div>
              <div>
                <p className="text-off-white/30 text-[10px] uppercase mb-1">Telemetry</p>
                <p className="text-[#4A8FFF] font-semibold">SSE / WebSocket Ready</p>
              </div>
              <div>
                <p className="text-off-white/30 text-[10px] uppercase mb-1">Theme</p>
                <p className="text-[#4A8FFF] font-semibold">Sub-0.5px Obsidian</p>
              </div>
              <div>
                <p className="text-off-white/30 text-[10px] uppercase mb-1">Bundle</p>
                <p className="text-[#4A8FFF] font-semibold">Zero-Bloat Vector</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Working Concept Dashboard Interface */}
      <div className="bg-graphite border-y border-off-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <SectionLabel>Live Interactive Concept UI</SectionLabel>
              <h2 className="font-grotesk font-bold text-2xl md:text-3xl mt-2 tracking-tight">Interactive Application Simulation</h2>
            </div>
            {/* View tabs */}
            <div className="flex border border-off-white/15 bg-obsidian p-1 self-start">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === "overview" ? "bg-[#4A8FFF] text-obsidian font-bold" : "text-off-white/40 hover:text-off-white"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === "analytics" ? "bg-[#4A8FFF] text-obsidian font-bold" : "text-off-white/40 hover:text-off-white"
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab("cluster")}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === "cluster" ? "bg-[#4A8FFF] text-obsidian font-bold" : "text-off-white/40 hover:text-off-white"
                }`}
              >
                Cluster
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === "settings" ? "bg-[#4A8FFF] text-obsidian font-bold" : "text-off-white/40 hover:text-off-white"
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          {/* Simulated SaaS Application Window */}
          <div className="border border-off-white/20 bg-obsidian overflow-hidden rounded-sm shadow-2xl">
            {/* Window header */}
            <div className="bg-[#101418] border-b border-off-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="font-mono text-[10px] text-off-white/30 ml-2">
                  {"nexus-console://app.production.cluster-01"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400">TELEMETRY LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
              {/* App Sidebar */}
              <div className="md:col-span-3 border-r border-off-white/10 bg-[#0A0D12] p-4 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="px-2 pt-2">
                    <p className="font-grotesk font-bold text-sm tracking-tight text-off-white">NEXUS CLOUD OS</p>
                    <p className="font-mono text-[9px] text-[#4A8FFF] tracking-widest uppercase">Workspace: Production</p>
                  </div>
                  <nav className="space-y-1">
                    {[
                      { id: "overview", label: "Dashboard", icon: Activity },
                      { id: "analytics", label: "Metrics & Logs", icon: BarChart3 },
                      { id: "cluster", label: "Node Topology", icon: Cpu },
                      { id: "settings", label: "Access & Config", icon: Settings },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id as any)}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-mono transition-colors text-left rounded-sm ${
                            activeTab === item.id ? "bg-[#4A8FFF]/15 text-[#4A8FFF] font-semibold" : "text-off-white/50 hover:text-off-white hover:bg-white/5"
                          }`}
                        >
                          <Icon size={14} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="p-3 bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-off-white/40">CPU Cluster load</span>
                    <span className="text-lime">42.8%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-lime h-1 w-[42.8%]" />
                  </div>
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-off-white/40">Memory (64GB)</span>
                    <span className="text-[#4A8FFF]">21.4 GB</span>
                  </div>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-[#4A8FFF] h-1 w-[33%]" />
                  </div>
                </div>
              </div>

              {/* App Content Area */}
              <div className="md:col-span-9 p-6 bg-[#080B10]">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Top Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-graphite/60 border border-off-white/10 p-4">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Avg Global Latency</p>
                        <h4 className="font-grotesk font-bold text-3xl text-off-white mt-1">18.4 <span className="text-xs font-mono font-normal text-off-white/40">ms</span></h4>
                        <p className="font-mono text-[10px] text-emerald-400 mt-2">↓ 3.2ms from baseline</p>
                      </div>
                      <div className="bg-graphite/60 border border-off-white/10 p-4">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Inbound Throughput</p>
                        <h4 className="font-grotesk font-bold text-3xl text-off-white mt-1">942 <span className="text-xs font-mono font-normal text-off-white/40">k req/s</span></h4>
                        <p className="font-mono text-[10px] text-[#4A8FFF] mt-2">↑ 12% peak traffic</p>
                      </div>
                      <div className="bg-graphite/60 border border-off-white/10 p-4">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Active Worker Nodes</p>
                        <h4 className="font-grotesk font-bold text-3xl text-off-white mt-1">128 <span className="text-xs font-mono font-normal text-off-white/40">healthy</span></h4>
                        <p className="font-mono text-[10px] text-lime mt-2">0 degraded shards</p>
                      </div>
                    </div>

                    {/* Telemetry Visual Graph */}
                    <div className="bg-graphite/40 border border-off-white/10 p-5">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-xs text-off-white/70">Packet Density & Ingress Distribution (Last 60 Minutes)</span>
                        <span className="font-mono text-[10px] text-lime">Sampling: 100ms</span>
                      </div>
                      <svg viewBox="0 0 600 160" fill="none" className="w-full h-40">
                        {/* Grid lines */}
                        <line x1="0" y1="40" x2="600" y2="40" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
                        <line x1="0" y1="80" x2="600" y2="80" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
                        <line x1="0" y1="120" x2="600" y2="120" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
                        
                        {/* Area fill */}
                        <path d="M0 140 L50 120 L100 135 L150 90 L200 95 L250 60 L300 75 L350 50 L400 80 L450 45 L500 55 L550 30 L600 40 L600 160 L0 160 Z" fill="url(#blueGradient)" opacity="0.2" />
                        <defs>
                          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4A8FFF" />
                            <stop offset="100%" stopColor="#4A8FFF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Primary wave */}
                        <path d="M0 140 L50 120 L100 135 L150 90 L200 95 L250 60 L300 75 L350 50 L400 80 L450 45 L500 55 L550 30 L600 40" stroke="#4A8FFF" strokeWidth="2" fill="none" />
                        {/* Secondary wave */}
                        <path d="M0 150 L50 140 L100 145 L150 120 L200 130 L250 100 L300 110 L350 95 L400 105 L450 85 L500 95 L550 70 L600 80" stroke="#D5FF36" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.7" />
                      </svg>
                      <div className="flex justify-between items-center font-mono text-[9px] text-off-white/30 pt-2 border-t border-off-white/5">
                        <span>18:00</span>
                        <span>18:15</span>
                        <span>18:30</span>
                        <span>18:45</span>
                        <span>19:00</span>
                      </div>
                    </div>

                    {/* Recent Incident Log */}
                    <div className="bg-graphite/40 border border-off-white/10 p-5">
                      <p className="font-mono text-xs text-off-white/70 mb-3">Live Service Health Stream</p>
                      <div className="space-y-2">
                        {[
                          { time: "18:59:02", region: "eu-west-1", event: "Automated scaling event: +4 pods provisioned", status: "NORMAL" },
                          { time: "18:54:12", region: "us-east-2", event: "BGP route reconvergence completed without loss", status: "RESOLVED" },
                          { time: "18:48:33", region: "ap-southeast-1", event: "SSL Certificate rotation applied successfully", status: "VERIFIED" },
                        ].map((row) => (
                          <div key={row.time} className="flex items-center justify-between p-2 bg-obsidian/60 border border-off-white/5 font-mono text-xs">
                            <span className="text-off-white/40">{row.time}</span>
                            <span className="text-[#4A8FFF]">{row.region}</span>
                            <span className="text-off-white/80">{row.event}</span>
                            <span className="text-emerald-400 text-[10px] px-1.5 py-0.5 bg-emerald-500/10">{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div className="space-y-6">
                    <h3 className="font-grotesk font-bold text-xl text-off-white">Query Analysis & Cost Engine</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-graphite/40 border border-off-white/10">
                        <h4 className="font-mono text-xs text-[#4A8FFF] uppercase mb-4">Top Query Consumers by Compute</h4>
                        <div className="space-y-3 font-mono text-xs">
                          <div>
                            <div className="flex justify-between text-off-white/70 mb-1">
                              <span>SELECT * FROM user_events WHERE time &gt; ...</span>
                              <span>38.2%</span>
                            </div>
                            <div className="w-full bg-white/10 h-1"><div className="bg-[#4A8FFF] h-1 w-[38.2%]" /></div>
                          </div>
                          <div>
                            <div className="flex justify-between text-off-white/70 mb-1">
                              <span>AGGREGATE pipeline.logs ON region_id</span>
                              <span>26.4%</span>
                            </div>
                            <div className="w-full bg-white/10 h-1"><div className="bg-[#4A8FFF] h-1 w-[26.4%]" /></div>
                          </div>
                          <div>
                            <div className="flex justify-between text-off-white/70 mb-1">
                              <span>INSERT BATCH INTO telemetry_store</span>
                              <span>19.1%</span>
                            </div>
                            <div className="w-full bg-white/10 h-1"><div className="bg-[#4A8FFF] h-1 w-[19.1%]" /></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-graphite/40 border border-off-white/10">
                        <h4 className="font-mono text-xs text-[#4A8FFF] uppercase mb-4">Data Ingestion Rate vs Budget</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="text-off-white/50">Current Monthly Ingestion</span>
                            <span className="text-off-white font-bold">4.2 PB</span>
                          </div>
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="text-off-white/50">Projected Burn Rate</span>
                            <span className="text-lime font-bold">94.1% of allocation</span>
                          </div>
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="text-off-white/50">Compression Ratio</span>
                            <span className="text-off-white font-bold">5.8 : 1 (Zstandard)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "cluster" && (
                  <div className="space-y-6">
                    <h3 className="font-grotesk font-bold text-xl text-off-white">Edge Node Distribution</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {["us-east-virginia", "us-west-oregon", "eu-central-frankfurt", "ap-northeast-tokyo"].map((region) => (
                        <div key={region} className="p-4 bg-graphite/40 border border-off-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="font-mono text-[11px] text-off-white/80">{region}</span>
                          </div>
                          <p className="font-mono text-xs text-off-white/40">32 / 32 Nodes Online</p>
                          <p className="font-mono text-xs text-[#4A8FFF] mt-1">99.999% SLA</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="space-y-6">
                    <h3 className="font-grotesk font-bold text-xl text-off-white">Workspace Configuration</h3>
                    <div className="space-y-4 max-w-xl">
                      <div>
                        <label className="font-mono text-xs text-off-white/40 block mb-2 uppercase">Webhook Endpoint URL</label>
                        <input
                          type="text"
                          readOnly
                          defaultValue="https://telemetry.webworksstudio.com/hooks/v2/ingest"
                          className="w-full bg-obsidian border border-off-white/15 px-3 py-2 font-mono text-xs text-off-white/70"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 border border-off-white/10 bg-graphite/30">
                        <div>
                          <p className="font-mono text-xs text-off-white">Automated High-Memory Shedding</p>
                          <p className="font-inter text-[11px] text-off-white/40">Automatically throttles non-critical metrics when RAM &gt; 90%</p>
                        </div>
                        <span className="font-mono text-xs text-lime">ENABLED</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-off-white/10 bg-graphite/30">
                        <div>
                          <p className="font-mono text-xs text-off-white">Encrypted Vault Storage</p>
                          <p className="font-inter text-[11px] text-off-white/40">AES-256 GCM hardware key encryption</p>
                        </div>
                        <span className="font-mono text-xs text-lime">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionLabel>Frontend Engineering</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl mt-4 mb-10 tracking-tight">Key Design Patterns Employed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">01 / Zero-Layout Shift Rendering</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              Every data container reserves exact pixel dimensions prior to stream hydration, eliminating jarring layout reflows during continuous telemetry updates.
            </p>
          </div>
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">02 / Canvas & Vector Hybrid</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              SVG handles interactive labels and accessible hover targets while raw Canvas buffers high-frequency streaming sparklines at 60 frames per second.
            </p>
          </div>
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">03 / Keyboard-First Navigation</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              Engineered with full ARIA landmarks and vim-style command shortcuts for power users navigating between clusters without touching a mouse.
            </p>
          </div>
        </div>
      </div>

      {/* Return to Work */}
      <div className="border-t border-off-white/10">
        <Link
          href="/work"
          className="block max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex items-center justify-between group hover:bg-graphite transition-colors duration-300"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">Back to Portfolio</p>
            <h3 className="font-grotesk font-bold text-3xl group-hover:text-lime transition-colors">All Projects</h3>
          </div>
          <ArrowUpRight size={24} className="text-off-white/30 group-hover:text-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      </div>
    </main>
  );
}
