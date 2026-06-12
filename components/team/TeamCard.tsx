"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  index: number;
};

export default function TeamCard({
  name,
  role,
  image,
  index,
}: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl overflow-hidden bg-[#0f0f0f]/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.18)] transition-[border-color,box-shadow] duration-300"
    >
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-zinc-900">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          {role}
        </p>
      </div>
    </motion.article>
  );
}
