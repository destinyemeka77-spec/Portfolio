import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header" id="home">
        <div className="hero-text">
          <h1>Hi, I'm Emeka!</h1>
          <p>Frontend Web Developer</p>
        </div>

        <nav className="navbar">
          <div className="nav-links">
            <a href="#home"><button>Home</button></a>
            <a href="#about"><button>About Me</button></a>
            <a href="#projects"><button>Projects</button></a>
          </div>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer skilled in React, creating seamless, responsive, and engaging web interfaces. I focus on clean code, intuitive design, and delivering high-quality user experiences.
        </p>
      </section>
      <section>
        <h2>Tools</h2>
        
  <ul className="flex gap-4 flex-wrap">
    <ol>HTML</ol>
    <ol>CSS</ol>
    <ol>REACT</ol>
    <ol>TAILWIND</ol>
    <ol>JAVASCRIPT</ol>
  </ul>
      </section>

      <section id="projects">
        <h2>My Projects </h2>
        <div className="project-container">
          <div className="project">
            <h3>E-commerce Website</h3>
            <p>
              Wrld Luxury is a modern fashion e-commerce website focused on
              premium footwear, bags, and apparel, delivering a refined
              shopping experience with a global luxury feel.
            </p>
            <a
              href="https://wrld-luxury.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="project">
            <h3>Project 2</h3>
            <p>
              Another frontend project showcasing responsive layout
              and modern UI design.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>
      <div>
          <h2>Contact me</h2>
          <p>Destinyemeka77@gmail.com</p>
        </div>
    </div>
  );
}

export default App;
