import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-body">
          {/* Imagen del proyecto */}
          <div className="modal-image-container">
            <img
              src={project.image}
              alt={project.titleProject}
              className="modal-image"
            />
          </div>

          {/* Información */}
          <div className="modal-info">
            <div className="modal-header">
              <span className="modal-category">{project.category}</span>
              <h2>{project.titleProject}</h2>
            </div>

            <p className="modal-description">{project.description}</p>

            {/* Características */}
            <div className="modal-features">
              <h4>✨ Características principales:</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tecnologías */}
            <div className="modal-tech">
              <h4>🛠 Tecnologías utilizadas:</h4>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="modal-actions">
              <a
                href={project.links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-preview"
              >
                 Ver Demo en Vivo
              </a>
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                💻 Ver Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;