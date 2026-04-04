import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCaseCard from '@/components/projects/ProjectCaseCard';
import { PROJECT_CASE_STUDIES } from '@/lib/projects-data';

const Projects = () => {
  const featuredProjects = PROJECT_CASE_STUDIES.slice(0, 3);

  return (
    <section className="w-full bg-[#070A11] py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-4xl">
          <h2 className="font-sans text-[32px] font-medium leading-[48px] not-italic text-white">
            Featured Projects
          </h2>
          <p className="mt-6 font-sans text-[22px] font-normal leading-[37px] not-italic text-[rgb(180,188,208)]">
            A few handpicked UI UX Design, Front-end development and Mobile App development projects that have made a
            difference in millions of lives.
          </p>
        </div>

        <div className="space-y-16">
          {featuredProjects.map((project) => (
            <ProjectCaseCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-20">
          <Link
            href="/projects"
            className="px-8 py-3.5 bg-[#40b581] text-white text-[16px] font-semibold tracking-wide hover:bg-[#32986a] transition-all transform hover:scale-105 rounded-none flex items-center gap-2 shadow-sm"
          >
            View all projects
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
