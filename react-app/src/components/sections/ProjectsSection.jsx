import useSiteStore from "../../store/useSiteStore";

export default function ProjectsSection() {
  const projects = useSiteStore((s) => s.data.projects);

  return (
    <section className="projects" id="projects">
      <h2 className="heading">{projects.title}</h2>

      <div className="projects-grid">
        {projects.items.map((project) => (
          <div
            className={`project-card${project.featured ? " featured" : ""}`}
            key={project.id}
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="project-header">
              <div className="project-icon">
                <i className={`bx ${project.icon}`} />
              </div>
              <div className="project-tag">{project.tag}</div>
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-footer">
              <span className="project-link">
                {project.linkText} <i className={`bx ${project.linkIcon}`} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
