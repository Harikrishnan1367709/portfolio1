import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, PROJECT_CASE_STUDIES } from '@/lib/projects-data';

export function generateStaticParams() {
  return PROJECT_CASE_STUDIES.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Jawanexis Technologies',
    };
  }

  return {
    title: `${project.title} | Jawanexis Technologies`,
    description: project.summary,
  };
}

export default function ProjectViewPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const toNarrative = (lines: string[]) => lines.join(' ');

  return (
    <div className="min-h-screen bg-[#000000]">
      <section className="border-b border-[#222222] bg-[#000000] pt-28 pb-12">
        <div className="container-custom">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-[#B3B3B3] transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#222222] bg-[#0B0B0B] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {project.category}
            </span>
            {project.year && <span className="text-sm font-semibold text-[#B3B3B3]">{project.year}</span>}
            {project.client && <span className="text-sm text-[#B3B3B3]">Client: {project.client}</span>}
          </div>

          <h1 className="mt-5 text-[36px] font-bold leading-tight text-white md:text-[56px]">{project.title}</h1>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-[#B3B3B3]">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-[#222222] bg-[#0B0B0B] px-4 py-2 text-sm text-[#E5E5E5]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl space-y-14 md:space-y-20">
            {project.sections.map((section, index) => (
              <div key={section.title} className="space-y-8 md:space-y-10">
                <article className="grid gap-8 border-b border-[#1A1A1A] pb-8 md:grid-cols-[280px_1fr] md:gap-12 md:pb-10">
                  <h2 className="text-[30px] font-semibold leading-tight text-white md:text-[40px]">{section.title}</h2>
                  <p className="text-[19px] leading-relaxed text-[#B3B3B3]">{toNarrative(section.points)}</p>
                </article>

                {section.imageAfter && (
                  <div className="relative min-h-[260px] md:min-h-[420px]">
                    <Image src={section.imageAfter} alt={`${project.title} ${section.title} preview`} fill className="object-contain" />
                  </div>
                )}
              </div>
            ))}

            <article className="grid gap-8 border-t border-[#1A1A1A] pt-8 md:grid-cols-[280px_1fr] md:gap-12 md:pt-10">
              <h2 className="text-[30px] font-semibold leading-tight text-white md:text-[40px]">Business Impact</h2>
              <p className="text-[19px] leading-relaxed text-[#B3B3B3]">{toNarrative(project.impact)}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
