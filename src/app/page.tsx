"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Sparkles,
  Database,
  TestTube,
} from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { ExperienceCard } from "@/components/ExperienceCard";
import { CEOViewToggle } from "@/components/CEOViewToggle";

const BENTO_ITEMS = [
  {
    title: "AI & LLMs",
    icon: Sparkles,
    items: [
      "LlamaIndex",
      "OpenAI GPT-4",
      "Agentic Frameworks",
      "Prompt Engineering",
    ],
    className: "col-span-2 md:row-span-2",
    accent: "from-blue-500/20 to-blue-600/5 border-blue-500/30",
  },
  {
    title: "Web & Data",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB", "SQL", "JSON"],
    className: "col-span-2",
    accent: "from-slate-600/20 to-slate-700/5 border-slate-500/30",
  },
  {
    title: "QA & Testing",
    icon: TestTube,
    items: [
      "Postman",
      "Selenium",
      "Cucumber",
      "Manual & Regression Testing",
    ],
    className: "col-span-2",
    accent: "from-emerald-600/20 to-emerald-700/5 border-emerald-500/30",
  },
];

const EXPERIENCE = [
  {
    company: "CoSchool",
    role: "Intern Engineering",
    period: "2024 – Present",
    technicalDescription:
      "Built a 3-agent AI validation framework for content and workflows. Implemented orchestration between validation, review, and feedback agents with structured outputs and error handling.",
    businessDescription:
      "Designed and delivered an AI validation pipeline that cut validation time by 66%, enabling faster content rollout and higher throughput for the product team.",
    metrics: [
      {
        value: "2 min → 40s",
        label: "Validation time (66% efficiency)",
      },
    ],
  },
  {
    company: "CoSchool",
    role: "QA Intern",
    period: "2024",
    technicalDescription:
      "Focused on EdTech automation and content review. Used Selenium, Postman, and manual/regression testing to ensure quality and consistency across learning modules.",
    businessDescription:
      "Drove quality assurance for educational content delivery, reducing defects and supporting scalable EdTech product releases.",
    metrics: [],
  },
  {
    company: "Innerscore",
    role: "Instructional Design / Prompt Engineering",
    period: "2024",
    technicalDescription:
      "Applied prompt engineering for instructional design—crafting prompts and flows to improve learning outcomes and content structure.",
    businessDescription:
      "Leveraged AI and prompt design to streamline instructional content creation and improve learner engagement.",
    metrics: [],
  },
];

const PROJECTS = [
  {
    name: "PersonaInvest",
    description:
      "Multi-agent AI system for Indian brokerage data aggregation and insights.",
    tags: ["AI", "Multi-agent", "Fintech"],
  },
  {
    name: "Corporate Fact-Checker",
    description:
      "Analyzing earnings calls and corporate communications for accuracy and consistency.",
    tags: ["NLP", "Earnings", "Analysis"],
  },
  {
    name: "Health Portal API",
    description:
      "Role-based access control and JWT-secured API for healthcare workflows.",
    tags: ["Node.js", "JWT", "RBAC"],
  },
  {
    name: "SOTConnect",
    description:
      "MERN stack platform for college events, registrations, and community.",
    tags: ["MERN", "Events", "Full-stack"],
  },
];

export default function Home() {
  const [isBusinessView, setIsBusinessView] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/80 px-6 pt-24 pb-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Monish Balusu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-xl text-slate-300 sm:text-2xl"
          >
            <Typewriter />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            Leveraging technology to solve real-world problems with an
            entrepreneurial mindset.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:balusumonish08@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-base font-medium text-white transition-colors hover:bg-blue-500 active:bg-blue-700"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-6 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:border-slate-500"
            >
              View projects
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-b border-slate-800/80 px-6 py-20 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            About me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I&apos;m a Junior at Woxsen University with a sharp focus on the
              intersection of <strong className="text-slate-300">Finance</strong>{" "}
              and <strong className="text-slate-300">Technology</strong>. My
              work sits at the crossroads of AI engineering, quality assurance,
              and product thinking—building systems that are both robust and
              business-aligned.
            </p>
            <p>
              Whether it&apos;s designing agentic AI frameworks, automating QA
              pipelines, or shipping full-stack applications, I aim to deliver
              solutions that reduce friction and create measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI & Tech Matrix – Bento */}
      <section
        id="skills"
        className="border-b border-slate-800/80 px-6 py-20 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            AI & Tech Matrix
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {BENTO_ITEMS.map((bento, i) => (
              <motion.div
                key={bento.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-xl border bg-gradient-to-br p-5 ${bento.accent} ${bento.className}`}
              >
                <bento.icon className="h-6 w-6 text-blue-400" />
                <h3 className="mt-3 font-semibold text-white">{bento.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
                  {bento.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section
        id="experience"
        className="border-b border-slate-800/80 px-6 py-20 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white sm:text-3xl"
            >
              Work experience
            </motion.h2>
            <CEOViewToggle
              isBusinessView={isBusinessView}
              onToggle={() => setIsBusinessView((v) => !v)}
            />
          </div>
          <div className="mt-12 space-y-0">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}`}
                index={i}
                isLast={i === EXPERIENCE.length - 1}
                isBusinessView={isBusinessView}
                {...exp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-b border-slate-800/80 px-6 py-20 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            Projects
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-xl border border-slate-700/80 bg-card/60 p-6 transition-colors hover:border-slate-600"
              >
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-700/60 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            Get in touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="mailto:balusumonish08@gmail.com"
              className="flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
            >
              <Mail className="h-5 w-5" />
              balusumonish08@gmail.com
            </a>
            <a
              href="tel:+919951917555"
              className="flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
            >
              <Phone className="h-5 w-5" />
              +91-9951917555
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
