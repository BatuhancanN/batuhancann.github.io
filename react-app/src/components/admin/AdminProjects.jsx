import { useState } from "react";
import useSiteStore from "../../store/useSiteStore";

const emptyProject = {
  id: "",
  title: "",
  tag: "",
  icon: "bx-code-alt",
  description: "",
  link: "",
  linkText: "GitHub",
  linkIcon: "bxl-github",
  featured: false,
};

export default function AdminProjects() {
  const projects = useSiteStore((s) => s.data.projects);
  const updateProject = useSiteStore((s) => s.updateProject);
  const addProject = useSiteStore((s) => s.addProject);
  const removeProject = useSiteStore((s) => s.removeProject);

  const [newProject, setNewProject] = useState({ ...emptyProject });

  const handleAddProject = () => {
    if (!newProject.id || !newProject.title) return;
    addProject({ ...newProject });
    setNewProject({ ...emptyProject });
  };

  return (
    <div>
      <h2 className="admin-section-title">Projeler Bolumu</h2>

      {projects.items.map((project) => (
        <div className="admin-card" key={project.id}>
          <div className="admin-card-header">
            <span className="admin-card-title">
              <i className={`bx ${project.icon}`} style={{ marginRight: "0.8rem", color: "var(--accent-light)" }} />
              {project.title}
              {project.featured && (
                <span style={{ marginLeft: "0.8rem", fontSize: "1.1rem", color: "var(--accent-light)" }}>
                  (One Cikan)
                </span>
              )}
            </span>
            <div className="admin-actions">
              <button
                className="admin-btn admin-btn-outline"
                onClick={() => updateProject(project.id, "featured", !project.featured)}
              >
                <i className={`bx ${project.featured ? "bxs-star" : "bx-star"}`} />
                {project.featured ? "Normal" : "One Cikar"}
              </button>
              <button
                className="admin-btn admin-btn-danger"
                onClick={() => removeProject(project.id)}
              >
                <i className="bx bx-trash" /> Sil
              </button>
            </div>
          </div>

          <div className="admin-inline-group">
            <div className="admin-form-group">
              <label>Baslik</label>
              <input
                className="admin-input"
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label>Tag</label>
              <input
                className="admin-input"
                value={project.tag}
                onChange={(e) => updateProject(project.id, "tag", e.target.value)}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label>Aciklama</label>
            <textarea
              className="admin-textarea"
              value={project.description}
              onChange={(e) => updateProject(project.id, "description", e.target.value)}
            />
          </div>

          <div className="admin-inline-group">
            <div className="admin-form-group">
              <label>Link URL</label>
              <input
                className="admin-input"
                value={project.link}
                onChange={(e) => updateProject(project.id, "link", e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label>Icon</label>
              <input
                className="admin-input"
                value={project.icon}
                onChange={(e) => updateProject(project.id, "icon", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="admin-card" style={{ borderStyle: "dashed" }}>
        <div className="admin-card-header">
          <span className="admin-card-title">Yeni Proje Ekle</span>
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>ID</label>
            <input
              className="admin-input"
              value={newProject.id}
              onChange={(e) => setNewProject({ ...newProject, id: e.target.value })}
              placeholder="proje-id"
            />
          </div>
          <div className="admin-form-group">
            <label>Baslik</label>
            <input
              className="admin-input"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Proje Adi"
            />
          </div>
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>Tag</label>
            <input
              className="admin-input"
              value={newProject.tag}
              onChange={(e) => setNewProject({ ...newProject, tag: e.target.value })}
              placeholder="React / Node.js"
            />
          </div>
          <div className="admin-form-group">
            <label>Icon</label>
            <input
              className="admin-input"
              value={newProject.icon}
              onChange={(e) => setNewProject({ ...newProject, icon: e.target.value })}
            />
          </div>
        </div>

        <div className="admin-form-group">
          <label>Aciklama</label>
          <textarea
            className="admin-textarea"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            placeholder="Proje aciklamasi..."
          />
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>Link URL</label>
            <input
              className="admin-input"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              placeholder="https://github.com/..."
            />
          </div>
          <div className="admin-form-group">
            <label>Link Metni</label>
            <input
              className="admin-input"
              value={newProject.linkText}
              onChange={(e) => setNewProject({ ...newProject, linkText: e.target.value })}
            />
          </div>
        </div>

        <button className="admin-btn admin-btn-success" onClick={handleAddProject}>
          <i className="bx bx-plus" /> Proje Ekle
        </button>
      </div>
    </div>
  );
}
