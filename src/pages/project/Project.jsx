import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import iconProject from "/assets/iconos/icon-proyects.svg";
import { projects } from "../../data/project";
import ProjectModal from "../../components/ProjectModal";

const Project = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", name: "Todos", icon: "🚀" },
    { id: "web", name: "Web", icon: "🌐" },
    { id: "app", name: "App", icon: "📱" },
    { id: "landing", name: "Landing", icon: "🎯" },
    { id: "saas", name: "SaaS", icon: "☁️" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.titleProject
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <section id="portfolio">
        <div className="row">
          <div className="portfolio-item">
            {/* Título */}
            <div className="portfolio-content-title">
              <img
                className="profile-pic"
                src={iconProject}
                alt="icono de proyectos"
              />
              <h1>Proyectos</h1>
            </div>

            {/* Barra de búsqueda */}
            <div className="search-container">
              <input
                type="text"
                placeholder="🔍 Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filtros por categoría */}
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab ${filter === cat.id ? "active" : ""}`}
                  onClick={() => setFilter(cat.id)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-text">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Grid de proyectos */}
            <div className="portfolio-info">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div
                    className="portfolio-card"
                    key={project.id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="card-image-container">
                      <img
                        src={project.image}
                        alt={project.titleProject}
                        className="card-image"
                        loading="lazy"
                      />
                      <div className="card-overlay">
                        <span className="view-details">Ver detalles →</span>
                      </div>
                      <span className="category-badge">{project.category}</span>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title">{project.titleProject}</h3>
                      <p className="card-short-desc">{project.shortDesc}</p>

                      <div className="card-tech-stack">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="tech-badge-small"
                            style={{ borderColor: tech.color }}
                            title={tech.name}
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="tech-icon-small"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>😕 No se encontraron proyectos</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal de proyecto */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Project;
