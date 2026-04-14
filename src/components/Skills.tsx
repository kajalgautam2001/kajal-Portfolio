import { useEffect, useRef } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlinePresentationChartBar, HiOutlineUserGroup } from "react-icons/hi";
import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Strategy & Brand Building",
    icon: <HiOutlineSparkles />,
    skills: [
      "Brand Identity Design",
      "Content Strategy",
      "Social Media Strategy",
      "Campaign Planning",
      "Brand Voice Development",
      "Market Research",
      "Competitor Analysis",
    ],
  },
  {
    title: "Content & Production",
    icon: <HiOutlinePresentationChartBar />,
    skills: [
      "Content Pipeline Management",
      "Video Script Writing",
      "Caption & Copy Writing",
      "Content Calendar Management",
      "Image Brief Creation",
      "Creative Direction",
      "Cross-Platform Publishing",
    ],
  },
  {
    title: "Marketing & Outreach",
    icon: <HiOutlineUserGroup />,
    skills: [
      "Influencer Marketing",
      "Sponsorship Coordination",
      "Client Relationship Management",
      "On-Ground Brand Activation",
      "Team Leadership",
      "Graphic Design Coordination",
      "Video Production Oversight",
    ],
  },
];

const marqueeItems = [
  "Brand Strategy",
  "Content Creation",
  "Social Media Marketing",
  "Influencer Outreach",
  "Campaign Management",
  "Team Leadership",
  "Brand Identity",
  "Content Pipeline",
  "Video Production",
  "Market Research",
  "Creative Direction",
  "Digital Marketing",
];

const Skills = () => {
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
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <div className="animate-in">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Expertise
            </span>
          </div>
          <h2 className="section-title animate-in">
            My <span>Skills</span> & Expertise
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category animate-in" key={idx}>
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite marquee */}
        <div className="skills-marquee-wrapper animate-in">
          <div className="skills-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span className="skills-marquee-item" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Platform badges */}
        <div className="skills-platforms-container animate-in">
          <h3 className="platforms-title">Platform Expertise</h3>
          <div className="skills-platforms">
            <div className="platform-item">
              <FaInstagram className="platform-icon" />
              <span className="platform-name">Instagram</span>
            </div>
            <div className="platform-item">
              <FaFacebookF className="platform-icon" />
              <span className="platform-name">Facebook</span>
            </div>
            <div className="platform-item">
              <FaYoutube className="platform-icon" />
              <span className="platform-name">YouTube</span>
            </div>
            <div className="platform-item">
              <FaLinkedinIn className="platform-icon" />
              <span className="platform-name">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
