import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import iconContact from "/assets/iconos/icon-contact.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const phoneNumber = "51923450859";
  const MAX_MESSAGE_LENGTH = 500;

  // Validaciones en tiempo real
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Minimo 2 caracteres" : "";
      case "lastname":
        return value.trim().length < 2 ? "Minimo 2 caracteres" : "";
      case "phone":
        return !/^\d{9}$/.test(value) ? "Ingresa 9 dígitos válidos" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Email inválido"
          : "";
      case "message":
        return value.trim().length < 10 ? "Minimo 10 caracteres" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validar campo actual
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handlePhoneChange = (e) => {
    // Solo permitir números y limitar a 9 dígitos
    const value = e.target.value.replace(/\D/g, "").slice(0, 9);
    setFormData((prev) => ({ ...prev, phone: value }));
    const error = validateField("phone", value);
    setErrors((prev) => ({ ...prev, phone: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const { name, lastname, phone, email, message } = formData;
    return `
👋 *Nuevo mensaje desde mi portafolio*

📋 *Datos del contacto:*
• Nombre: ${name} ${lastname}
• Teléfono: ${phone}
• Email: ${email}

💬 *Mensaje:*
${message}

---
📅 Enviado el: ${new Date().toLocaleDateString("es-PE")}
    `.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSendStatus("error");
      setTimeout(() => setSendStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    // Pequeño delay para mostrar estado de carga
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(generateWhatsAppMessage());
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

      // Abrir WhatsApp
      window.open(whatsappURL, "_blank");

      // Resetear formulario
      setFormData({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      setSendStatus("success");

      // Ocultar mensaje después de 4 segundos
      setTimeout(() => setSendStatus(null), 4000);
    }, 800);
  };

  // Calcular progreso del mensaje
  const messageProgress = (formData.message.length / MAX_MESSAGE_LENGTH) * 100;

  return (
    <>
      <Navbar />
      <section id="contact">
        <div className="row">
          <div className="contact-container">
            {/* Título */}
            <div className="contact-content-title">
              <img
                className="icons-general"
                src={iconContact}
                alt="icono contacto"
              />
              <h1>Contáctame</h1>
            </div>

            {/* Descripción */}
            <p className="contact-description">
              ¿Tienes un proyecto en mente? ¡Hablemos! Completa el formulario y
              te contactaré por WhatsApp para conversar sobre cómo puedo
              ayudarte. 🚀
            </p>

            <div className="box-contact">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Grid de inputs */}
                <div className="grid-content">
                  {/* Nombre */}
                  <div
                    className={`form-group ${errors.name ? "error" : ""} ${formData.name ? "filled" : ""}`}
                  >
                    <label htmlFor="contactName">
                      <span className="label-icon">👤</span>
                      Nombres
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  {/* Apellidos */}
                  <div
                    className={`form-group ${errors.lastname ? "error" : ""} ${formData.lastname ? "filled" : ""}`}
                  >
                    <label htmlFor="contactLastName">
                      <span className="label-icon">👥</span>
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="contactLastName"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Tu apellido"
                      required
                    />
                    {errors.lastname && (
                      <span className="error-message">{errors.lastname}</span>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div
                    className={`form-group ${errors.phone ? "error" : ""} ${formData.phone ? "filled" : ""}`}
                  >
                    <label htmlFor="contactPhone">
                      <span className="label-icon">📱</span>
                      Celular
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="999 999 999"
                      maxLength={9}
                      pattern="\d{9}"
                      required
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                    <span className="input-hint">9 dígitos</span>
                  </div>

                  {/* Email */}
                  <div
                    className={`form-group ${errors.email ? "error" : ""} ${formData.email ? "filled" : ""}`}
                  >
                    <label htmlFor="contactEmail">
                      <span className="label-icon">✉️</span>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div
                  className={`form-group full-width ${errors.message ? "error" : ""} ${formData.message ? "filled" : ""}`}
                >
                  <label htmlFor="contactMessage">
                    <span className="label-icon">💬</span>
                    Mensaje
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    maxLength={MAX_MESSAGE_LENGTH}
                    rows={5}
                    required
                  />
                  <div className="message-footer">
                    <span className="input-hint">
                      {formData.message.length} / {MAX_MESSAGE_LENGTH}
                    </span>
                    <div className="message-progress">
                      <div
                        className={`progress-bar ${messageProgress > 90 ? "warning" : ""}`}
                        style={{ width: `${messageProgress}%` }}
                      />
                    </div>
                  </div>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                {/* Vista previa del mensaje */}
                <button
                  type="button"
                  className="preview-btn"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview
                    ? "Ocultar vista previa"
                    : "👁️ Ver vista previa del mensaje"}
                </button>

                {showPreview && (
                  <div className="message-preview">
                    <h4>Vista previa para WhatsApp:</h4>
                    <pre>{generateWhatsAppMessage()}</pre>
                  </div>
                )}

                {/* Botón de envío */}
                <div className="content-btn-contact">
                  <button
                    type="submit"
                    className={`submit ${isSubmitting ? "loading" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loader"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">💬</span>
                        Enviar por WhatsApp
                      </>
                    )}
                  </button>
                </div>

                {/* Mensajes de estado */}
                {sendStatus === "success" && (
                  <div className="status-message success">
                    <span className="status-icon">✅</span>
                    ¡Perfecto! Redirigiendo a WhatsApp...
                  </div>
                )}

                {sendStatus === "error" && (
                  <div className="status-message error">
                    <span className="status-icon">⚠️</span>
                    Por favor, revisa los campos marcados
                  </div>
                )}
              </form>
            </div>

            {/* Información adicional */}
            <div className="contact-info">
              <div className="info-card">
                <span className="info-icon">⏱️</span>
                <h4>Tiempo de respuesta</h4>
                <p>Generalmente respondo en menos de 24 horas hábiles</p>
              </div>
              <div className="info-card">
                <span className="info-icon">🔒</span>
                <h4>Privacidad</h4>
                <p>Tus datos no se almacenan, solo se envían a mi WhatsApp</p>
              </div>
              <div className="info-card">
                <span className="info-icon">📍</span>
                <h4>Ubicación</h4>
                <p>Lima, Perú - Disponible para proyectos remotos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
