"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-center"
    >
      <div className="text-lg font-semibold text-blue-400">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </motion.div>
  );
}

export interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  technicalDescription: string;
  businessDescription: string;
  isBusinessView: boolean;
  metrics?: MetricCardProps[];
  index?: number;
  isLast?: boolean;
}

export function ExperienceCard({
  company,
  role,
  period,
  technicalDescription,
  businessDescription,
  isBusinessView,
  metrics = [],
  index = 0,
  isLast = false,
}: ExperienceCardProps) {
  const description = isBusinessView ? businessDescription : technicalDescription;

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-slate-700"
          aria-hidden
        />
      )}

      {/* Timeline dot */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/60 bg-charcoal shadow-lg shadow-blue-500/10">
        <Briefcase className="h-4 w-4 text-blue-400" />
      </div>

      <div className="flex-1 pb-12">
        <div className="rounded-xl border border-slate-700/80 bg-card/80 p-5 backdrop-blur-sm transition-colors hover:border-slate-600">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              {period}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-blue-400">{company}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {description}
          </p>
          {metrics.length > 0 && (
            <div
              className={cn(
                "mt-4 grid gap-3",
                metrics.length === 1 ? "grid-cols-1 max-w-xs" : "grid-cols-2 sm:grid-cols-3"
              )}
            >
              {metrics.map((m, i) => (
                <MetricCard key={i} value={m.value} label={m.label} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
