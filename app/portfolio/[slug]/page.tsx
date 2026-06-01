import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



export async function generateMetadata({ params }: { params: { slug: string } }) {

  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: project?.title,
    description: project?.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);


  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* BACK BUTTON */}
      <div className="p-6">
        <Link
          href="/portfolio"
          className="text-cyan-400 hover:text-white transition"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}