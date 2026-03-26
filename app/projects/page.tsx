import ProjectCaseCard from '@/components/projects/ProjectCaseCard';
import { PROJECT_CASE_STUDIES } from '@/lib/projects-data';
import CTA from '@/components/CTA';

export default function ProjectsPage() {
  return (
    <div className="bg-[#070A11] min-h-screen">
      <section className="pt-32 pb-14 border-b border-[#1A2436]">
        <div className="container-custom">
          <h1 className="text-[40px] md:text-[64px] font-bold text-white">Featured Projects</h1>
          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-[#CBD5E1]">
            A curated list of UI UX, web, mobile, e-commerce, and analytics projects. Each card follows the same case
            study layout with a dedicated detailed view.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-6">
            {PROJECT_CASE_STUDIES.map((project, index) => (
              <ProjectCaseCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
