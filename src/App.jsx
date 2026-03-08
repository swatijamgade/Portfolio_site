import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

const skills = [
  {
    category: "Backend & APIs",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST API Design",
      "JWT Authentication",
      "RBAC",
      "Java"
    ]
  },
  {
    category: "Web & Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
  },
  {
    category: "Databases & Async",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Django ORM",
      "Query Optimization",
      "Celery",
      "Redis"
    ]
  },
  {
    category: "Cloud, DevOps & Quality",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "Swagger / OpenAPI",
      "Postman",
      "CI/CD Pipelines",
      "OCI Deployment",
      "Pytest",
      "Integration Testing"
    ]
  }
];

const projects = [
  {
    title: "ClimbCapital - Fintech Platform",
    description:
      "Built and maintained Django backend APIs for subscription-based investment services with JWT security and Celery/Redis workflows.",
    tech: ["Python", "Django", "DRF", "MySQL", "Docker", "Celery", "Redis"],
    github: "https://github.com/swatijamgade"
  },
  {
    title: "Task Management API",
    description:
      "Designed REST APIs for task creation, assignment, reminders, and role-based access with optimized query performance.",
    tech: ["Python", "Django", "DRF", "Celery", "Swagger"],
    github: "https://github.com/swatijamgade"
  },
  {
    title: "Internal CRM Platform",
    description:
      "Developed CRM backend to manage leads, customers, and workflows with role-based access and reporting endpoints.",
    tech: ["Django", "DRF", "PostgreSQL", "Python"],
    github: "https://github.com/swatijamgade"
  }
];

const achievements = [
  "3+ years of commercial backend engineering experience",
  "Delivered API-driven customer-facing applications",
  "Implemented JWT and role-based access across multi-user systems",
  "Built asynchronous workflows using Celery and Redis",
  "Deployed Dockerised Django REST services on Oracle Cloud Infrastructure"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const revealRefs = useRef([]);

  const closeMenu = () => setIsMenuOpen(false);
  const setRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            Swati Jamgade
          </a>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? "Light" : "Dark"}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </button>
          </div>

          <ul
            id="primary-navigation"
            className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero reveal" ref={setRevealRef}>
          <h1>Hi, I&apos;m Swati Jamgade</h1>
          <p>Backend Engineer (Python | APIs | Django | Cloud)</p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </section>

        <section id="about" className="section reveal" ref={setRevealRef}>
          <h2>About</h2>
          <p>
            Strategy-driven Backend Engineer with 3+ years of commercial
            experience delivering API-driven, customer-facing applications using
            Python, Django, REST APIs, and SQL. I specialize in translating user
            stories into scalable technical solutions, workflow automation, and
            cloud-deployed systems. I have strong experience in secure
            authentication, performance optimization, and collaborative delivery
            across product, frontend, and QA teams.
          </p>
        </section>

        <section id="skills" className="section reveal" ref={setRevealRef}>
          <h2>Skills</h2>
          <div className="card-grid">
            {skills.map((group) => (
              <article
                key={group.category}
                className="card reveal"
                ref={setRevealRef}
              >
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal" ref={setRevealRef}>
          <h2>Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card reveal"
                ref={setRevealRef}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="section reveal"
          ref={setRevealRef}
        >
          <h2>Certifications / Achievements</h2>
          <ul className="card-list">
            {achievements.map((item) => (
              <li key={item} className="card reveal" ref={setRevealRef}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section reveal" ref={setRevealRef}>
          <h2>Contact</h2>
          <ul className="card-list">
            <li className="card reveal" ref={setRevealRef}>
              Email:{" "}
              <a href="mailto:jamgade.swati@gmail.com">
                jamgade.swati@gmail.com
              </a>
            </li>
            <li className="card reveal" ref={setRevealRef}>
              Phone: <a href="tel:+447442262743">+44 7442262743</a>
            </li>
            <li className="card reveal" ref={setRevealRef}>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/swati-jamgade"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/swati-jamgade
              </a>
            </li>
            <li className="card reveal" ref={setRevealRef}>
              GitHub:{" "}
              <a
                href="https://github.com/swatijamgade"
                target="_blank"
                rel="noreferrer"
              >
                github.com/swatijamgade
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Swati Jamgade</p>
        <p>Built with React</p>
      </footer>
    </>
  );
}

export default App;
