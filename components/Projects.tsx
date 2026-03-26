import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCaseCard from '@/components/projects/ProjectCaseCard';
import { PROJECT_CASE_STUDIES } from '@/lib/projects-data';

const Projects = () => {
  const featuredProjects = PROJECT_CASE_STUDIES.slice(0, 3);

  return (
    <section className="section-padding bg-[#070A11]">
      <div className="container-custom">
        <div className="mb-12 max-w-4xl">
          <h2 className="text-[32px] md:text-[56px] font-bold text-white leading-tight">Featured Projects</h2>
          <p className="mt-6 text-xl leading-relaxed text-[#CBD5E1]">
            A few handpicked UI UX Design, Front-end development and Mobile App development projects that have made
            a difference in millions of lives.
          </p>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCaseCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-[#8FA2BD] px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#D9E2EF] transition hover:bg-[#122039]"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
