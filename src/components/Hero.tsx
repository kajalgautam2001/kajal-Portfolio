import "./styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      {/* Decorative orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content container">
        <p className="hero-greeting">Welcome to my Portfolio</p>

        <h1 className="hero-name">
          <span className="first-name">KAJAL</span>
          <span className="last-name">GAUTAM</span>
        </h1>

        <div className="hero-title-wrapper">
          <div className="hero-title">
            <span>Social Media Manager</span>
            <span className="divider" />
            <span>Influencer Marketing</span>
          </div>
        </div>

        <p className="hero-tagline">
          Building brands from scratch, managing end-to-end content pipelines,
          and driving real-world campaign results with measurable ROI.
        </p>

        <div className="hero-cta-group">
          <a href="#contact" className="hero-cta hero-cta-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Let's Connect
          </a>
          <a href="#experience" className="hero-cta hero-cta-secondary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          }}>
            View My Work
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">150%</div>
            <div className="hero-stat-label">Campaign ROI</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">2+</div>
            <div className="hero-stat-label">Brands Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">90%</div>
            <div className="hero-stat-label">Target Achievement</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
