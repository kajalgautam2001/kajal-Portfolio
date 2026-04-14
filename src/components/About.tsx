import { useEffect, useRef } from "react";
import "./styles/About.css";

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text-col">
            <div className="animate-in">
              <span className="section-label">About Me</span>
            </div>
            <h2 className="section-title animate-in">
              Crafting <span>Brand Stories</span> That Convert
            </h2>
            <p className="about-description animate-in">
              I'm a <span className="about-highlight">Dynamic Social Media Manager</span> and{" "}
              <span className="about-highlight">Influencer Marketing professional</span> with
              proven experience building brands from scratch, managing end-to-end content
              pipelines, and driving real-world campaign results.
            </p>
            <p className="about-description animate-in">
              I've built <span className="about-highlight">two insurance brands from the ground up</span> —
              handling everything from brand identity and content strategy to platform management
              and creative team coordination. My on-ground brand activation experience includes
              a campaign that delivered <span className="about-highlight">150% ROI</span> at one
              of North India's biggest cultural festivals.
            </p>

            <div className="about-details animate-in">
              <div className="about-detail-item">
                <div className="about-detail-label">Email</div>
                <div className="about-detail-value">
                  <a href="mailto:kajalgautamknl@gmail.com">kajalgautamknl@gmail.com</a>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">Phone</div>
                <div className="about-detail-value">
                  <a href="tel:+917988018796">+91 7988018796</a>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">Location</div>
                <div className="about-detail-value">India</div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">LinkedIn</div>
                <div className="about-detail-value">
                  <a href="https://www.linkedin.com/in/kajal-gautam-037466206/" target="_blank" rel="noopener noreferrer">
                    Connect →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual animate-in">
            <div className="about-profile">
              <div className="about-profile-ring">
                <img
                  src="/images/profile.jpg"
                  alt="Kajal Gautam"
                  className="about-profile-img"
                />
              </div>
            </div>

            <div className="about-card">
              <p className="about-card-quote">
                "I don't just manage social media — I build brands from zero, craft every piece
                of content, and lead creative teams to deliver results that matter."
              </p>

              <div className="about-card-attributes">
                <span className="about-attribute">Brand Strategy</span>
                <span className="about-attribute">Content Creation</span>
                <span className="about-attribute">Team Leadership</span>
                <span className="about-attribute">Influencer Outreach</span>
                <span className="about-attribute">Campaign ROI</span>
                <span className="about-attribute">Cross-Platform</span>
              </div>
            </div>

            <div className="about-float-badge">
              <span className="about-float-badge-value">150%</span>
              <span className="about-float-badge-label">Campaign ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
