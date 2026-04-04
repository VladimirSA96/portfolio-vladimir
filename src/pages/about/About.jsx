import Navbar from "../../components/Navbar";
import iconPerfil from "/assets/iconos/icon-about.svg";
import imgPerfil from "/assets/perfil_user.jpg";
import iconJavascript from "/assets/iconos/javascript.svg";
import iconNext from "/assets/iconos/nextjs.svg";
import iconHtml from "/assets/iconos/html.svg";
import iconCss from "/assets/iconos/css.svg";
import iconReact from "/assets/iconos/reactjs.svg";

const About = () => {
  const skills = [
    { icon: iconJavascript, name: "JavaScript", color: "#f7df1e" },
    { icon: iconNext, name: "Next.js", color: "#ffffff" },
    { icon: iconHtml, name: "HTML5", color: "#e34f26" },
    { icon: iconCss, name: "CSS3", color: "#1f67c0" },
    { icon: iconReact, name: "React", color: "#61dafb" },
  ];
  return (
    <>
      <Navbar />
      <section id="about">
        <div className="row">
          <div className="about-item">
            <div className="about-content-title">
              <img
                className="profile-pic"
                src={iconPerfil}
                alt="icono de user"
              />
              <h1>Sobre Mí</h1>
            </div>
            <div className="about-content-bio">
              <div className="about-title">
                <p>Soy Vladimir pero mis amigos me dicen Vladiii.</p>
                <p>
                  Tengo más de 3 años desarrollando páginas web, aplicaciones
                  web y aplicaciones móviles. Me considero una persona
                  proactiva, comprometido y apasionada por las tecnologías y la
                  programación,{" "}
                  <span>
                    mis stack favoritos son JavaScript, React, React Native,
                    NextJS, Android y MySQL.
                  </span>
                </p>
                <p>
                  En mis tiempos libres me dedico a crear proyectos personales y
                  compartir con la comunidad de programadores.
                </p>
              </div>
              <div className="content-about-perfil">
                <img
                  className="about-perfil"
                  src={imgPerfil}
                  alt="imagen de perfil"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-item">
          {/* Habilidades */}
          <div className="skillContainer">
            <h2>Mis Habilidades</h2>
            <div className="skill-technology">
              <ul id="nav-skill">
                {skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <img 
                      src={skill.icon} 
                      alt={`icono de ${skill.name}`}
                      data-skill={skill.name}
                    />
                    <span className="skill-tooltip" style={{ color: skill.color }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
