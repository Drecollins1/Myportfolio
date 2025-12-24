"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Download,
  ArrowRight,
  Mail,
  Linkedin,
  Menu,
  X,
  CodeXml,
} from "lucide-react";
import Contact from "@/components/contact";

const projects = [
  {
    title: "GreenMarket – Online Marketplace",
    role: "Frontend Lead",
    description:
      "A platform connecting buyers and sellers of fresh produce and goods.",
    stack: ["Next.js", "Tailwind", "Typescript"],
    image: "/greemarket.png",
    live: "https://www.greenmarket.com.ng/",
    repo: "https://github.com/Drecollins1",
  },
  {
    title: "FusionNest – IVF & Fertility Services",
    role: "Frontend Engineer",
    description:
      "A patient-friendly platform for accessing advanced fertility solutions and reproductive care.",
    stack: ["React", "Tailwind"],
    image: "/fussionnest.png",
    live: "https://www.fusionnest.com.ng/",
    repo: "https://github.com/Drecollins1",
  },
  {
    title: "Cherith Home Care Services – Home Care Solutions",
    role: "Fullstack Contributor",
    description:
      "A web platform presenting tailored in-home care for the elderly, disabled, and those recovering from illness or surgery.",
    stack: ["React.js", "Tailwind"],
    image: "/cherithhome.png",
    live: "https://cherithhomecareservices.com/",
    repo: "https://github.com/Drecollins1",
  },
  {
    title: "GreenMarket Mobile App – E-commerce on the Go",
    role: "Fullstack Contributor",
    description:
      "A mobile app for buying and selling fresh produce and goods, providing a seamless, user-friendly shopping experience anytime, anywhere.",
    stack: [
      "React Native",
      "Tailwind",
      "Expo",
      "Node.js/Express.js",
      "MongoDB",
    ],
    image: "/greenmarketmobile.jpeg",
    live: "https://play.google.com/store/apps/details?id=com.zagytech.greenmarket.green_market",
    repo: "https://github.com/Drecollins1",
  },
  {
    title: "Women Powered by God – Empowered by Faith",
    role: "Fullstack Contributor",
    description:
      "Connecting women worldwide to nurture faith, balance, and purposeful living.",
    stack: ["React", "Tailwind", "Node.js/Express.js", "MongoDB"],
    image: "/women.png",
    live: "https://womenpoweredbygod.com/",
    repo: "https://github.com/Drecollins1",
  },
  {
    title: "MOH Lagos – Afrocentric Fashion",
    role: "Fullstack Contributor",
    description:
      "A fashion platform showcasing custom-made and ready-to-wear garments that celebrate African heritage with modern, stylish designs.",
    stack: ["Wordpress"],
    image: "/mohlagos.png",
    live: "https://www.mohlagos.com/",
    repo: "https://github.com/Drecollins1",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [particlesInit, setParticlesInit] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none" as const, // Optional: helps TS infer the literal
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 250,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Message sent. I'll reply within 24–48 hours.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Particles Background */}
      {particlesInit && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        </div>
      )}

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            <a
              href="#"
              className="text-base flex gap-2 items-center font-semibold text-white transition-colors hover:text-emerald-400"
            >
              <CodeXml /> Akingbade Damilare Moses
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#skills" className="transition-colors hover:text-white">
                Skills
              </a>
              <a
                href="#experience"
                className="transition-colors hover:text-white"
              >
                Experience
              </a>
              <a href="/blog" className="transition-colors hover:text-white">
                Blog
              </a>
              <a href="#contact">
                <Button size="sm" className="gap-2">
                  Contact <ArrowRight className="size-3" />
                </Button>
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={36} />
              </button>

              <nav className="flex flex-col items-center gap-10 text-3xl font-medium text-zinc-100">
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                  Skills
                </a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                  Experience
                </a>
                <a href="/blog" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="lg" className="mt-8 px-10 py-6 text-lg">
                    Contact Me
                  </Button>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="container relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="mb-4 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-5xl">
            Frontend Developer crafting modern, high-performance web & mobile
            experiences.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-balance text-zinc-300/85">
            I'm Akingbade Damilare Moses — I build fast, accessible interfaces
            with React.js, Next.js, Tailwind CSS, and React Native. I’m
            passionate about building fast, accessible interfaces with clean
            architecture and maintainable code.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              className="gap-2"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work <ArrowRight className="size-4" />
            </Button>
            {/* <Button variant="outline" className="gap-2">
              <a href="#projects" className="flex items-center gap-2">
                Visit Live Demos <ExternalLink className="size-4" />
              </a>
            </Button> */}
            <Button variant="ghost" className="gap-2">
              <a
                href="/akingbade-damilare-cv.pdf"
                className="flex items-center gap-2"
                download
              >
                <Download className="size-4" /> Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="container relative z-20 mx-auto max-w-7xl px-6 pb-16"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Selected Work
            </h2>
            <p className="mt-1 text-zinc-400">
              Websites, Mobile apps, dashboards and ERP modules
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Tailwind</Badge>
            <Badge>React Native</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                <CardHeader className="space-y-2">
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative text-white  mb-4 overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-56 w-full rounded-xl object-contain transition-transform duration-500 hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="mb-4  flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s} className="bg-white/5 text-white">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="size-4" /> Live
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="size-4" /> Code
                      </a>
                    </Button>
                    {/* <Button size="sm" variant="link" asChild>
                      <a
                        href={`/case-studies/${encodeURIComponent(
                          p.title.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                      >
                        Case Study
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="container relative z-20 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          {/* About text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              About Me
            </h2>
            <p className="mt-3 text-zinc-300/90">
              I’m Akingbade Damilare Moses, a Frontend Developer passionate
              about building high-traffic, business-critical products. I focus
              on performance, accessibility, and developer experience,
              delivering clean, maintainable, and scalable interfaces.
              <br />
              <br />
              I’ve built custom ERP modules, analytics dashboards, and marketing
              sites that convert. I enjoy collaborating closely with designers
              and backend teams, thinking in systems, and shipping
              production-ready UI that users love.
              <br />
              <br />
              Beyond frontend, I have experience with UI/UX design using Figma,
              and backend development with Node.js, Express, and MongoDB.
            </p>
          </div>

          {/* Quick info */}
          <div className="grid gap-2">
            <div className="text-sm text-zinc-400">Location</div>
            <div className="text-white">Nigeria</div>

            <div className="text-sm text-zinc-400">Availability</div>
            <div className="text-white">Open to relocation</div>

            <div className="text-sm text-zinc-400">Focus</div>
            <div className="text-white">
              Frontend, Performance, Developer Experience
            </div>

            <div className="text-sm text-zinc-400">Stack</div>
            <div className="text-white">
              React.js, Next.js, Tailwind CSS, React Native, Node.js, Express,
              MongoDB, Figma
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="container relative z-20 mx-auto max-w-7xl px-6 py-10"
      >
        <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
              <CardDescription>Core building blocks</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["JavaScript", "HTML", "CSS"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>Frameworks and styling</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "React Native", "Tailwind CSS"].map(
                (s) => (
                  <Badge key={s}>{s}</Badge>
                )
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend & DB</CardTitle>
              <CardDescription>Server & storage</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "MongoDB", "MySQL"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>Workflow and collaboration</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Postman", "Figma"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="experience"
        className="container relative z-20 mx-auto max-w-7xl px-6 py-16"
      >
        <h2 className="mb-8 text-2xl font-semibold text-white md:text-3xl">
          Experience
        </h2>
        <div className="relative space-y-8">
          {[
            {
              company: "Itskills Center",
              role: "Frontend Developer",
              period: "Jan 2024 – Present",
              impact:
                "Built and maintained production React/Next.js apps with a focus on performance and accessibility.",
            },
            {
              company: "Divnerix Innovation",
              role: "Fullstack Developer",
              period: "—",
              impact:
                "Delivered features end-to-end across frontend and backend, collaborated with designers and PMs.",
            },
            {
              company: "Techbit Digital",
              role: "Frontend Developer",
              period: "—",
              impact:
                "Implemented responsive UI components, data tables, charts, and optimized bundle size.",
            },
          ].map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-emerald-400/20 to-transparent" />
              <div className="absolute -left-[1.125rem] top-5 h-5 w-5 rounded-full border-2 border-emerald-400 bg-zinc-950 transition-colors group-hover:bg-emerald-400" />
              <div className="ml-8 rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-white/20 hover:bg-zinc-900/70">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {e.company}
                    </div>
                    <div className="text-sm text-emerald-400">{e.role}</div>
                  </div>
                  <Badge className="border-white/20 text-zinc-400">
                    {e.period}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {e.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="blog"
        className="container relative z-20 mx-auto max-w-7xl px-6 py-10"
      >
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Notes
            </h2>
            <p className="mt-1 text-zinc-400">
              Short articles on performance, patterns, and UI
            </p>
          </div>
          <Button variant="link" asChild>
            <a href="/blog">View all</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CardHeader>
                <CardTitle>Performance checklist for Next.js apps</CardTitle>
                <CardDescription>
                  From image strategy to route-level code splitting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="#" className="flex items-center gap-2">
                    Read article <ArrowRight className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Contact />

      <footer className="container relative z-20 mx-auto max-w-7xl px-6 pb-14 pt-8 text-center text-sm text-zinc-400">
        All rights reserved © {new Date().getFullYear()} Designed Developed &
        Deployed by Akingbade Damilare Moses
      </footer>
    </main>
  );
}
