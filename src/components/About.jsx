

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 style={{fontSize:'30px'}}>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-avatar">
              <span className="about-avatar-text">Dev</span>
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-heading">Passionate Front-end Developer</h3>
            <p className="about-paragraph">
              I'm Mahmoud, a dedicated front-end developer with a passion for creating 
              exceptional web experiences. I specialize in building modern, responsive 
              websites and applications using the latest technologies and best practices.
            </p>
            <p className="about-paragraph">
              My journey in web development started with a curiosity about how websites 
              work, which quickly grew into a deep passion for coding. I enjoy turning 
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;