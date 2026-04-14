import { useEffect, useRef } from "react";
import {
  MdEmail,
  MdPhone,
  MdArrowOutward,
} from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container contact-inner">
        <div className="contact-header">
          <div className="animate-in">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="section-title animate-in">
            Let's Work <span>Together</span>
          </h2>
          <p className="contact-subtitle animate-in">
            Have a brand that needs building? A content strategy that needs refining?
            Let's connect and create something impactful.
          </p>
        </div>

        <div className="contact-big-email animate-in">
          <a href="mailto:kajalgautamknl@gmail.com">
            kajalgautamknl@gmail.com <MdArrowOutward />
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-card animate-in">
            <div className="contact-card-icon">
              <MdEmail />
            </div>
            <div className="contact-card-title">Email</div>
            <div className="contact-card-value">
              <a href="mailto:kajalgautamknl@gmail.com">kajalgautamknl@gmail.com</a>
            </div>
          </div>

          <div className="contact-card animate-in">
            <div className="contact-card-icon">
              <MdPhone />
            </div>
            <div className="contact-card-title">Phone</div>
            <div className="contact-card-value">
              <a href="tel:+917988018796">+91 7988018796</a>
            </div>
          </div>

          <div className="contact-card animate-in">
            <div className="contact-card-icon">
              <FaLinkedinIn />
            </div>
            <div className="contact-card-title">LinkedIn</div>
            <div className="contact-card-value">
              <a href="https://www.linkedin.com/in/kajal-gautam-037466206/" target="_blank" rel="noopener noreferrer">
                View Profile →
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer animate-in">
          <p className="contact-footer-name">
            Designed by <span>Kajal Gautam</span>
          </p>
          <p className="contact-footer-copy">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
