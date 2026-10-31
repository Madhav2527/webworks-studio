"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface FormData {
  name: string;
  email: string;
  brand: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const projectTypes = [
  "Digital Experience / Website",
  "Custom Web Application",
  "E-Commerce System",
  "Agency White-Label Partnership",
  "Website Redesign",
  "Technical Consultation",
];

const budgetRanges = [
  "₹ 3,00,000 — ₹ 6,00,000",
  "₹ 6,00,000 — ₹ 15,00,000",
  "₹ 15,00,000 — ₹ 35,00,000",
  "₹ 35,00,000+",
  "Monthly Retainer / Partnership",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    brand: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please indicate an anticipated budget tier.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your project (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process enquiry.");
      }

      setStatus("success");
      setResponseMessage(data.message || "Your project enquiry was delivered directly to our engineering desk.");
      setFormData({
        name: "",
        email: "",
        brand: "",
        projectType: "",
        budget: "",
        message: "",
      });
      setErrors({});
    } catch (err: any) {
      setStatus("error");
      setResponseMessage(err.message || "An unexpected error occurred. Please try again or reach out directly.");
    }
  };

  return (
    <main className="pt-24">
      {/* Header */}
      <div className="pt-16 pb-16 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-off-white/10">
        <SectionLabel>Initiate Collaboration</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Start a Project
          </h1>
          <p className="text-off-white/50 text-sm max-w-sm leading-relaxed">
            Tell us about what you want to build. Every submission goes directly to our technical team for review.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Studio Context & Integration Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-3">Direct Engagement</span>
              <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-off-white leading-tight">
                No Sales Team.<br />
                Direct Developer Access.
              </h2>
              <p className="mt-4 text-off-white/60 font-inter text-sm leading-relaxed">
                We review every brief to evaluate architectural feasibility, timeline suitability, and alignment with our studio capabilities. You will receive an initial response within 24 hours.
              </p>
            </div>

            <div className="p-6 bg-graphite/40 border border-off-white/10 space-y-4 font-mono text-xs">
              <p className="text-lime uppercase tracking-widest text-[10px]">Studio Coordinates</p>
              <div className="space-y-2 text-off-white/70">
                <p>Location: London · Remote Worldwide</p>
                <p>Availability: Selected Projects & Q1 Retainers</p>
                <p>Response SLA: &lt; 24 Working Hours</p>
              </div>
            </div>

            {/* Technical Backend Documentation Notice */}
            <div className="p-6 border border-off-white/15 bg-obsidian space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-lime">Production API Integration</p>
              </div>
              <p className="text-xs text-off-white/50 leading-relaxed font-inter">
                This form transmits payload requests to <code className="text-off-white/80 font-mono bg-white/5 px-1 py-0.5">/api/contact</code> with server-side validation. To connect transactional providers (Resend, SendGrid, Postmark), supply your provider keys in your server environment variables.
              </p>
            </div>
          </div>

          {/* Right: Working Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-graphite/50 border border-off-white/15 p-8 md:p-12">
              {status === "success" ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/30 text-lime flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-grotesk font-bold text-3xl text-off-white">
                    Enquiry Logged & Transmitted
                  </h3>
                  <p className="text-sm text-off-white/60 max-w-md mx-auto leading-relaxed">
                    {responseMessage}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline text-xs mt-4"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                      <AlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="font-inter text-xs text-red-300">{responseMessage}</p>
                    </div>
                  )}

                  {/* Personal & Brand Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Lin"
                        className={`w-full bg-obsidian border px-4 py-3 font-mono text-sm text-off-white focus:outline-none transition-colors ${
                          errors.name ? "border-red-500" : "border-off-white/20 focus:border-lime"
                        }`}
                      />
                      {errors.name && <p className="font-mono text-[10px] text-red-400 mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="brand" className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-2">
                        Business or Brand Name
                      </label>
                      <input
                        id="brand"
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="e.g. Studio Vertex"
                        className="w-full bg-obsidian border border-off-white/20 px-4 py-3 font-mono text-sm text-off-white focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@studiovertex.design"
                      className={`w-full bg-obsidian border px-4 py-3 font-mono text-sm text-off-white focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-off-white/20 focus:border-lime"
                      }`}
                    />
                    {errors.email && <p className="font-mono text-[10px] text-red-400 mt-1.5">{errors.email}</p>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-3">
                      Project Type *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-3 text-left font-mono text-xs border transition-all ${
                              isSelected
                                ? "bg-lime text-obsidian border-lime font-semibold"
                                : "bg-obsidian border-off-white/15 text-off-white/70 hover:border-off-white/40"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                    {errors.projectType && (
                      <p className="font-mono text-[10px] text-red-400 mt-2">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-3">
                      Anticipated Budget Range *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {budgetRanges.map((range) => {
                        const isSelected = formData.budget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-3 text-center font-mono text-[11px] border transition-all ${
                              isSelected
                                ? "bg-lime text-obsidian border-lime font-semibold"
                                : "bg-obsidian border-off-white/15 text-off-white/70 hover:border-off-white/40"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                    {errors.budget && (
                      <p className="font-mono text-[10px] text-red-400 mt-2">{errors.budget}</p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-off-white/60 block mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details on timeline, design assets ready, functional requirements, or specific architectural considerations..."
                      className={`w-full bg-obsidian border px-4 py-3 font-mono text-sm text-off-white focus:outline-none transition-colors resize-y ${
                        errors.message ? "border-red-500" : "border-off-white/20 focus:border-lime"
                      }`}
                    />
                    {errors.message && <p className="font-mono text-[10px] text-red-400 mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center py-4 text-xs font-semibold disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Project Brief</span>
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>
                    <p className="font-mono text-[10px] text-off-white/30 text-center mt-3">
                      Data handled securely with server-side validation. Zero marketing newsletters.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
