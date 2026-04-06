import { useState } from "react";
import Navbar from "../../components/Navbar";
import iconExperience from "/assets/iconos/icon-experience.svg";
import { experiences } from "../../data/experience";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <section id="experience">
        <div className="row">
          <div className="experience-item">
            <div className="experience-content-title">
              <img
                className="profile-pic"
                src={iconExperience}
                alt="icono de experiencia"
              />
              <h1>Experiencia</h1>
            </div>

            <div className="experience-info">
              {experiences.map((experience, index) => (
                <div
                  className={`container-experience ${expandedId === experience.id ? "expanded" : ""}`}
                  key={experience.id}
                >
                  <div
                    className={`timeline-marker ${index === 0 ? "active" : ""}`}
                    onClick={() => toggleExpand(experience.id)}
                  ></div>
                  <div
                    className="experience-card"
                    onClick={() => toggleExpand(experience.id)}
                  >
                    <div className="experience-header">
                      <div className="experience-box-info">
                        <h3>{experience.title}</h3>
                        <h5>{experience.service}</h5>
                        <p className="company">{experience.company}</p>
                        <span className="date">{experience.date}</span>
                      </div>
                      <button
                        className={`expand-btn ${expandedId === experience.id ? "expanded" : ""}`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline
                            points={
                              expandedId === experience.id
                                ? "18 15 12 9 6 15"
                                : "6 9 12 15 18 9"
                            }
                          ></polyline>
                        </svg>
                      </button>
                    </div>

                    <div className="experience-short-desc">
                      <p>{experience.shortDesc}</p>
                    </div>

                    {/* Contenido expandido */}
                    <div
                      className={`experience-expanded-content ${expandedId === experience.id ? "show" : ""}`}
                    >
                      <div className="experience-box-description">
                        <p>{experience.description}</p>
                      </div>

                      {/* Logros clave */}
                      <div className="experience-achievements">
                        <h4>Logros principales:</h4>
                        <ul>
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologías */}
                      <div className="experience-tech-stack">
                        <span className="tech-label">Tecnologías:</span>
                        <div className="tech-badges">
                          {experience.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
