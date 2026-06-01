"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";

import { useLanguage } from "@/context/LanguageContext";


export default function PortfolioPage() {
  
  const { t } = useLanguage();

  const [filter, setFilter] = useState<"All" | "AI" | "Web">("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags?.includes(filter));

  const filters: Array<{ key: "All" | "AI" | "Web"; label: string }> = [
    { key: "All", label: t.portfolio.filters.all },
    { key: "AI", label: t.portfolio.filters.ai },
    { key: "Web", label: t.portfolio.filters.web },
  ];

  return (
    <div className="min-h-screen p-10 pt-24">
      
      <h1 className="text-5xl font-bold mb-6">{t.portfolio.title}</h1>

      {/* FILTER BUTTONS */}
      <div className="flex gap-4 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-xl border transition ${
              filter === f.key
                ? "bg-cyan-500 text-black"
                : "border-white/20 text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:scale-[1.03] transition duration-300"
          >
            
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            
            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-xl font-bold group-hover:text-cyan-400 transition">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}