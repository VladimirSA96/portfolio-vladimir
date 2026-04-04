import React from "react";
import Navbar from "../../components/Navbar";
import ButtonWhatsApp from "../../components/ButtonWhatsApp";
import perfilImg from "/assets/img-perfil.png";
import handImg from "/assets/img-mano.png";
import iconLinkedln from "/assets/iconos/icon-linkedln.svg";
import iconGithub from "/assets/iconos/icon-github.svg";
import FloatingBackground from "../../components/ui/FloatingBackground";

const Home = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <FloatingBackground />

      <header>
        <Navbar />
        <ButtonWhatsApp />
        <div className="banner banner-animation">
          <div className="banner-text">
            <div className="banner-content-previus">
              <img
                className="profile-previus"
                src={perfilImg}
                alt="Vladimir Profile"
              />
              <div className="banner-border-box">
                <p>¿En qué te puedo ayudar?</p>
                <img
                  className="profile-pic"
                  src={handImg}
                  alt="icono de una mano saludando"
                />
              </div>
            </div>

            <div>
              <h1 className="responsive-headline">
                Hola, soy <span>Vladimir</span>{" "}
              </h1>
              <h1 className="responsive-headline">Desarrollador Frontend</h1>
              <h3>
                Especializado en la creación y desarrollo de páginas web,
                aplicación web y móvil.
              </h3>

            </div>
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vladimir-sanchez-astoray/"
                >
                  <img src={iconLinkedln} alt="imagen de Linkedln" />
                  Mi Linkedln
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/VladimirSA96">
                  <img src={iconGithub} alt="imagen de Github" />
                  Mi Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
