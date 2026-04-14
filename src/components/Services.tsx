import { useEffect, useRef } from "react";
import "./styles/Services.css";

const servicesData = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    description:
      "Build your brand from the ground up — from name ideation and logo development to establishing a consistent visual identity and tone of voice across all platforms.",
    features: ["Brand Naming", "Visual Identity", "Tone of Voice", "Brand Guidelines"],
  },
  {
    number: "02",
    title: "Content Pipeline Management",
    description:
      "End-to-end content production — writing scripts, creating briefs, coordinating with design teams, and managing monthly content calendars for multiple brands simultaneously.",
    features: ["Content Calendar", "Script Writing", "Team Coordination", "Quality Control"],
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Full-spectrum social media strategy and execution across Instagram, Facebook, YouTube, and LinkedIn — from content creation to analytics and growth optimization.",
    features: ["Multi-Platform", "Growth Strategy", "Community Management", "Analytics"],
  },
  {
    number: "04",
    title: "Influencer & Campaign Marketing",
    description:
      "Hands-on influencer outreach, sponsorship coordination, and on-ground brand activation campaigns — including delivering 150% ROI at major cultural festivals.",
    features: ["Influencer Outreach", "Sponsorships", "Brand Activation", "ROI Tracking"],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 120);
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
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="animate-in">
            <span className="section-label" style={{ justifyContent: "center" }}>
              What I Offer
            </span>
          </div>
          <h2 className="section-title animate-in">
            My <span>Services</span>
          </h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div className="service-card animate-in" key={idx}>
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feat, fIdx) => (
                  <span className="service-feature" key={fIdx}>
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="services-cta animate-in">
            <div className="services-cta-text">
              <h3>Ready to build your brand's digital presence?</h3>
              <p>
                Let's collaborate and create something extraordinary together.
              </p>
            </div>
            <a
              href="#contact"
              className="services-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
