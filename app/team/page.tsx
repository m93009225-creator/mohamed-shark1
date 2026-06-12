"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/team/TeamCard";
import { teamMembers, type TeamMemberId } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen px-6 pb-16 pt-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t.team.title}
          </h1>
        </motion.header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const content = t.team.members[member.id as TeamMemberId];

            return (
              <TeamCard
                key={member.id}
                name={content.name}
                role={content.role}
                image={member.image}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
