function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>E-commerce UI</h3>
          <p>Modern shopping interface built with React.</p>
          <a href="http://localhost:5174/">
            <button>View Projects</button>
          </a>
        </div>

        <div className="project-card">
          <h3>Dashboard</h3>
          <p>Responsive admin dashboard with charts.</p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Landing Page</h3>
          <p>High-converting product landing page.</p>
       <a href="https://agency-website-chi-seven.vercel.app/">
        <button>View Project</button>
       </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
