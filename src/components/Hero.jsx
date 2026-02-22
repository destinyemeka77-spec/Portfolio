function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-intro">Frontend Developer</p>

          <h1>
            Hi, I'm <span className="accent">Emeka</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive, and fast web applications using
            React and modern frontend technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            {/* <a href="#contact" className="btn secondary">
              Contact Me
            </a> */}
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src="pot.jpg" alt="Emeka - Frontend Developer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
