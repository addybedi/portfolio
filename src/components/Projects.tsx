import { ExternalLink } from "lucide-react";
import { projects } from "../constants/projects";

export function Projects() {
  return (
    <section id="projects" className="text-stone-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-600">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-stone-200 shadow-sm p-6 hover:shadow-md transition cursor-pointer hover:bg-slate-400/30"
            onClick={() => project.live && window.open(project.live, "_blank")}
          >
            <div className="flex gap-2">
              {project?.logo}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            </div>
            <p className="text-sm text-stone-200 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="xl:text-sm text-xs bg-stone-100 px-2 py-1 rounded text-stone-600 font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.live && (
              <div className="flex gap-4 items-center text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-stone-200 hover:text-amber-600"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
