import Image from 'next/image';
import Link from 'next/link';
import type { ProjectCaseStudy } from '@/lib/projects-data';

type ProjectCaseCardProps = {
  project: ProjectCaseStudy;
};

function CaseStudyArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M4.16797 10H15.8346"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 13.3333L15.8333 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 6.67188L15.8333 10.0052"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const bgThemes: Record<string, string> = {
  FinTech: 'linear-gradient(102.32deg, #eef2ff, #c7d2fe)',      // Indigo light
  Healthcare: 'linear-gradient(102.32deg, #f0fdf4, #bbf7d0)',   // Emerald light
  'E-Commerce': 'linear-gradient(102.32deg, #fff7ed, #fed7aa)', // Orange light
  Analytics: 'linear-gradient(102.32deg, #faf5ff, #e9d5ff)',    // Purple light
};

export default function ProjectCaseCard({ project }: ProjectCaseCardProps) {
  const bgGradient = bgThemes[project.category] || 'linear-gradient(102.32deg, #f5f7fa, #c3cfe2)';

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between gap-[12px] rounded-[8px] p-[24px] lg:p-[40px] min-h-[480px] w-full"
      style={{
        background: bgGradient,
        opacity: 1,
        transform: 'translateY(0px)',
        transitionDuration: '0.5s',
      }}
    >
      <div className="flex flex-col justify-between gap-12 w-full lg:w-[45%] h-full">
        <div>
          <div
            className="flex items-center justify-between gap-4 mb-6 border-b border-[#00000015] pb-6"
            style={{ opacity: 1, transitionDuration: '0.3s', transitionDelay: '0.2s' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Using a brightness filter to make light logos visible as highly readable dark grey silouhettes */}
              <img
                src={project.logo}
                alt={`${project.category} logo`}
                className="h-8 md:h-9 w-auto object-contain object-left"
                style={{ filter: 'brightness(0) opacity(0.85)' }}
              />
            </div>
            <label className="rounded-full bg-[#00000010] px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-widest text-[#374151]">
              {project.category}
            </label>
          </div>
          <p
            className="font-sans text-base leading-relaxed text-[#2b2a35] md:text-[17px] md:leading-[1.55]"
            style={{ opacity: 1, transform: 'translateY(0px)', transitionDuration: '0.6s' }}
          >
            {project.summary}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3 list-none font-sans">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-white/60 px-3.5 py-1.5 text-[14px] font-medium text-[#374151] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                style={{ opacity: 1, transform: 'translateY(0px)', transitionDuration: '0.7s' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12"
          style={{ opacity: 1, transform: 'translateY(0px)', transitionDuration: '0.5s' }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-none bg-[#2b2a35] px-6 py-3.5 font-sans text-sm font-medium text-white transition hover:opacity-90 md:text-base"
          >
            View case study
            <CaseStudyArrowIcon />
          </Link>
        </div>
      </div>

      <div className="relative w-full lg:w-[52%] shrink-0">
        <span style={{ transform: 'translateX(0px)', opacity: 1, display: 'block' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
