const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">Mahmoud</h1>
          <h2 className="hero-subtitle">Front-end Developer</h2>
          <p className="hero-description">
            I create beautiful, responsive, and user-friendly web experiences 
            with modern technologies and clean code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <span className="avatar-text">M</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span className="scroll-mouse">
            <span className="scroll-wheel"></span>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;