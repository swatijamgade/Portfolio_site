function App() {
  return (
    <>
      <header className="site-header" id="home">
        <nav className="nav">
          <a href="#home" className="brand">Swati Jamgade</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <h1>Hi, I&apos;m Swati</h1>
          <p>Frontend developer building clean and responsive web apps.</p>
          <a href="#projects" className="btn">View My Work</a>
        </section>

        <section id="about" className="section"><h2>About</h2></section>
        <section id="skills" className="section"><h2>Skills</h2></section>
        <section id="projects" className="section"><h2>Projects</h2></section>
        <section id="certifications" className="section"><h2>Certifications / Achievements</h2></section>
        <section id="contact" className="section"><h2>Contact</h2></section>
      </main>

      <footer className="footer">© 2026 Swati Jamgade | Built with React</footer>
    </>
  );
}

export default App;
