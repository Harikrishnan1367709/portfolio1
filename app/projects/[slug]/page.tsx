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

  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      <section className="border-b border-[#E0E6EF] bg-white pt-28 pb-12">
        <div className="container-custom">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-[#39526F] transition hover:text-[#111827]"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E8EDF5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#24364E]">
              {project.category}
            </span>
            {project.year && <span className="text-sm font-semibold text-[#607084]">{project.year}</span>}
            {project.client && <span className="text-sm text-[#607084]">Client: {project.client}</span>}
          </div>

          <h1 className="mt-5 text-[36px] font-bold leading-tight text-[#101828] md:text-[56px]">{project.title}</h1>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-[#344256]">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-[#D7DEE9] bg-[#F4F7FB] px-4 py-2 text-sm text-[#2F4058]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {project.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-[#DFE6F0] bg-white p-7">
                <h2 className="text-2xl font-semibold text-[#111827]">{section.title}</h2>
                <ul className="mt-4 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[#334155] leading-relaxed">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1E3A8A]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="rounded-2xl border border-[#DFE6F0] bg-white p-7">
              <h2 className="text-2xl font-semibold text-[#111827]">Business Impact</h2>
              <ul className="mt-4 space-y-3">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#334155] leading-relaxed">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#047857]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#DFE6F0] bg-[#E9EEF6]">
              <Image src={project.previewImage} alt={`${project.title} preview`} fill className="object-cover" />
            </div>

            <article className="rounded-2xl border border-[#DFE6F0] bg-white p-7">
              <h3 className="text-xl font-semibold text-[#111827]">Technology Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#CFD8E5] bg-[#F5F8FC] px-3 py-1.5 text-sm font-medium text-[#2B3A50]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </aside>
        </div>
      </section>
    </div>
  );
}
