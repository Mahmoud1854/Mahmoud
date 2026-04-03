const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Coffee-shop',
      description:'It is a web app to a shop store to show there products and buy some of there products.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce+Dashboard',
      demoLink: 'https://coffe-shop-4cny.vercel.app/',
      githubLink: 'https://github.com/Mahmoud1854/Coffe-Shop',
    },
    {
      id: 2,
      title: 'tasbeeh App',
      description: 'It is a web app for ramadan to help muslims to tsabeeh and get thawab.',
      image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=Task+Manager',
      demoLink: 'https://tasbeeh-topaz.vercel.app',
      githubLink: 'https://github.com/Mahmoud1854/tasbeeh',
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A responsive portfolio app for a designer to show his designs in beautiful way.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Weather+App',
      demoLink: 'https://portfolio2-liart-beta.vercel.app/',
      githubLink: 'https://github.com/Mahmoud1854/Portfolio2',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.demoLink} 
                      className="project-btn demo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="project-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;