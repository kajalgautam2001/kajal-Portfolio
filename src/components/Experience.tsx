import { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Experience.css";

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  links?: { text: string; url: string }[];
  subsections: { title: string; tag?: string; points: string[] }[];
};

const experienceData: ExperienceItem[] = [
  company: string;
  role: string;
  date: string;
  links?: { text: string; url: string }[];
  subsections: { title: string; tag?: string; points: string[] }[];
};

const experienceData: ExperienceItem[] = [
  {
    company: "Memat Digi Pvt. Ltd.",
    role: "Social Media Manager & Brand Lead",
    date: "Sept 2025 — Present",
    links: [
      { text: "BimaFlow Posts", url: "https://drive.google.com/drive/folders/15JIQGMADaxi4JtroenleAEIrMnlull_b?usp=sharing" },
      { text: "BimaFlow Videos", url: "https://drive.google.com/drive/folders/1Bp_yEjvlGMk3z0qeutxS4GJAoOakQ3M0?usp=sharing" },
      { text: "PolicySaath Posts", url: "https://drive.google.com/drive/folders/1EJVvHd6yK1OFtFG3Xs91tmTwD0YRxEGQ?usp=sharing" },
      { text: "PolicySaath Videos", url: "https://drive.google.com/drive/folders/1XQ9v_3cSLP1OzA4X1Z6LSPV8qMx5YD4W?usp=drive_link" }
    ],
    subsections: [
      {
        title: "BimaFlow — B2C Insurance Brand",
        tag: "B2C",
        points: [
          "Led complete brand build from zero — co-ideated the brand name, logo, visual identity, and tone of voice across all platforms",
          "Developed and executed social media strategy across Instagram, Facebook, and YouTube; planned and managed monthly content calendars",
          "Wrote all post captions, image content briefs, and video scripts; briefed and coordinated with graphic design and video editing teams",
          "Reviewed and approved all creatives and videos before publishing — ensuring every piece met brand standards and messaging goals",
        ],
      },
      {
        title: "PolicySaath — B2B Agent Platform",
        tag: "B2B",
        points: [
          "Built PolicySaath's brand identity and full digital presence from zero — logo, visual language, and social media across Instagram, Facebook, and YouTube",
          "Created and executed content strategy tailored to insurance agents; scripted and oversaw all video and static content production",
          "Managed complete content pipeline — writing, coordinating with creative teams, reviewing and publishing for both brands simultaneously",
        ],
      },
      {
        title: "Cross‑Brand Ownership",
        points: [
          "Solely responsible for brand strategy, content creation, team coordination, and publishing for two live brands at the same time",
          "Led and guided graphic design and video production teams — briefing, approving, and refining all creatives before going live",
        ],
      },
    ],
  },
  {
    company: "CoverYou",
    role: "Relationship Manager",
    date: "April 2024 — June 2025",
    subsections: [
      {
        title: "Client Outreach & Growth",
        points: [
          "Managed structured client outreach and relationship building across India in the insurance sector",
          "Consistently achieved 80–90% of monthly targets through personalised engagement and proactive follow-ups",
          "Conducted market research to identify high-value prospects and refine outreach strategies",
        ],
      },
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="animate-in" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            Career Journey
          </span>
        </div>
        <h2 className="section-title animate-in" style={{ textAlign: "center" }}>
          Work <span>Experience</span>
        </h2>

        <div className="experience-timeline">
          {experienceData.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot" />

              <div className="timeline-date-col animate-in">
                <span className="timeline-date">{exp.date}</span>
              </div>

              <div className="timeline-card-col animate-in">
                <div className="timeline-card">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <p className="timeline-role">{exp.role}</p>

                  {exp.subsections.map((sub, subIdx) => (
                    <div className="timeline-subsection" key={subIdx}>
                      <h4 className="timeline-sub-title">
                        {sub.title}
                        {sub.tag && (
                          <span className="timeline-sub-tag">{sub.tag}</span>
                        )}
                      </h4>
                      <ul className="timeline-points">
                        {sub.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {exp.links && exp.links.length > 0 && (
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                      {exp.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline-view-work"
                          style={{ textDecoration: 'none' }}
                        >
                          View {link.text} <MdArrowOutward />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
