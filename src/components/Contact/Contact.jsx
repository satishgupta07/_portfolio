import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaArrowRight, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { useToast } from "../Toast/Toast";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const { addToast } = useToast();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_16dec5r",
        "template_hl3e8qw",
        form.current,
        "Nws0Qk3XZ4xvICOJH"
      )
      .then(
        () => {
          addToast("Message sent successfully! I'll get back to you soon.", "success");
          e.target.reset();
        },
        () => addToast("Failed to send message. Please try again.", "error")
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="contact section" id="contact">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container">
        {/* Info side */}
        <motion.div
          className="contact__info-side"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact__heading">Let's work together</h3>
          <p className="contact__text">
            Have a project in mind, a question, or just want to say hi? Drop me a
            message and I'll get back to you as soon as possible.
          </p>

          <motion.div
            className="contact__cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { href: "mailto:satishgupta.cse01@gmail.com", icon: FaEnvelope, title: "Email", value: "satishgupta.cse01@gmail.com", extra: {} },
              { href: "https://www.linkedin.com/in/satishkumargupta07/", icon: FaLinkedinIn, title: "LinkedIn", value: "satishkumargupta07", extra: { target: "_blank", rel: "noopener noreferrer" } },
              { href: "https://github.com/satishgupta07", icon: FaGithub, title: "GitHub", value: "satishgupta07", extra: { target: "_blank", rel: "noopener noreferrer" } },
            ].map(({ href, icon: Icon, title, value, extra }) => (
              <motion.a
                key={title}
                href={href}
                className="contact__card glass-card"
                variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
                {...extra}
              >
                <div className="contact__card-icon-wrapper"><Icon /></div>
                <div>
                  <h4 className="contact__card-title">{title}</h4>
                  <span className="contact__card-value">{value}</span>
                </div>
                <FaArrowRight className="contact__card-arrow" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Form side */}
        <motion.div
          className="contact__form-side"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact__form glass-card">
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__field">
              <label className="contact__label">
                <FaUser /> Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__field contact__field--textarea">
              <label className="contact__label">
                <FaPaperPlane /> Message
              </label>
              <textarea
                name="project"
                rows="6"
                className="contact__input"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex contact__submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
              {sending
                ? <FaSpinner className="button__icon contact__spinner" />
                : <FaPaperPlane className="button__icon" />
              }
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
