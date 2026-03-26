import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ProjectCaseStudy } from '@/lib/projects-data';

type ProjectCaseCardProps = {
  project: ProjectCaseStudy;
  index?: number;
};

const CARD_THEMES = [
  {
    shell: 'border-[#D7CBE6] bg-[#D5C3E4]',
    divider: 'border-[#C8B7DA]',
    logoChip: 'bg-[#6D7DAD]',
    categoryChip: 'bg-[#CAB7E3] text-[#2E2752]',
    tag: 'border-[#D8C8E7] bg-[#EBDDFA] text-[#2B3346]',
    preview: 'border-[#CCC1DD] bg-[#C6BCE0]',
    cta: 'bg-[#24283A] hover:bg-[#1A1E2E]',
  },
  {
    shell: 'border-[#E9D0CC] bg-[#F1D8D5]',
    divider: 'border-[#DFBFBA]',
    logoChip: 'bg-[#7D6B88]',
    categoryChip: 'bg-[#F0C8C0] text-[#4E2E2A]',
    tag: 'border-[#E7CBC6] bg-[#F8E4E0] text-[#49373A]',
    preview: 'border-[#E2C7C2] bg-[#EBC9C5]',
    cta: 'bg-[#2A2531] hover:bg-[#201C26]',
  },
  {
    shell: 'border-[#D8D8D1] bg-[#E8E7E2]',
    divider: 'border-[#C9C9C1]',
    logoChip: 'bg-[#6F7368]',
    categoryChip: 'bg-[#D9D8C9] text-[#34352E]',
    tag: 'border-[#D4D5CB] bg-[#EFF0E9] text-[#3A3B35]',
    preview: 'border-[#D0D0C7] bg-[#DFDFD8]',
    cta: 'bg-[#2C2D28] hover:bg-[#22231F]',
  },
] as const;

export default function ProjectCaseCard({ project, index = 0 }: ProjectCaseCardProps) {
  const theme = CARD_THEMES[index % CARD_THEMES.length];

  return (
    <article className={`rounded-2xl border p-6 md:p-8 ${theme.shell}`}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
        <div className="flex flex-col">
          <div className={`flex items-center justify-between gap-4 border-b pb-5 ${theme.divider}`}>
            <div className={`rounded-lg px-3 py-2 ${theme.logoChip}`}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={130}
                height={34}
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${theme.categoryChip}`}>
              {project.category}
            </span>
          </div>

          <p className="mt-6 text-[22px] leading-[1.45] text-[#111827]">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-md border px-4 py-2 text-sm font-medium ${theme.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className={`mt-10 inline-flex w-fit items-center gap-2 rounded-md px-8 py-4 text-lg font-semibold text-white transition ${theme.cta}`}
          >
            View case study
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className={`relative min-h-[340px] overflow-hidden rounded-xl border ${theme.preview}`}>
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
