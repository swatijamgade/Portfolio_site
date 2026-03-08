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
      "RESTful API Design",
      "JWT Authentication",
      "RBAC"
    ]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Django ORM", "Query Optimization"]
  },
  {
    category: "Asynchronous & Background Processing",
    items: ["Celery", "Redis"]
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "Swagger / OpenAPI",
      "Postman",
      "Debugging",
      "Performance Optimization"
    ]
  },
  {
    category: "Cloud Deployment (Self-Initiated)",
    items: ["Oracle Cloud Infrastructure (OCI)", "Dockerised Deployment", "CI/CD Pipelines"]
  },
  {
    category: "Additional Exposure",
    items: ["NumPy", "Pandas"]
  },
  {
    category: "Development Environment",
    items: ["Windows", "Ubuntu", "PyCharm", "VS Code"]
  }
];

const skillLogos = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Django REST Framework":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  FastAPI:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Docker Compose":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Swagger / OpenAPI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Pytest:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
  "Django ORM":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  Windows:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  Ubuntu: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  PyCharm:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
};

const projects = [
  {
    title: "Aurloo - Multi-Vendor E-commerce Platform",
    description:
      "Developed a production-ready Django backend for customer and seller workflows with secure JWT + OTP auth, catalog/cart/checkout/order APIs, pricing logic (GST, charges), Razorpay payment verification, Shiprocket shipping automation, and Celery/Redis background tasks.",
    tech: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Razorpay",
      "Shiprocket",
      "Docker",
      "Swagger/OpenAPI"
    ],
    live: "https://aurloo.com/"
  },
  {
    title: "ClimbCapital - Fintech Platform",
    description:
      "Built and maintained Django backend APIs for subscription-based investment services with JWT security and Celery/Redis workflows.",
    tech: ["Python", "Django", "DRF", "MySQL", "Docker", "Celery", "Redis"],
    live: "https://climbcapital.uat.pybex.io/"
  },
  {
    title: "Task Management API",
    description:
      "Designed REST APIs for task creation, assignment, reminders, and role-based access with optimized query performance.",
    tech: ["Python", "Django", "DRF", "Celery", "Swagger"]
  },
  {
    title: "Internal CRM Platform",
    description:
      "Developed CRM backend to manage leads, customers, and workflows with role-based access and reporting endpoints.",
    tech: ["Django", "DRF", "PostgreSQL", "Python"]
  }
];

const certifications = [
  {
    title: "Django Developer Certification - OccupIQ Institute (Completed 2021)",
    details: [
      "Completed training in backend web development using Django and Python.",
      "Covered REST API development, authentication, database design, and deployment.",
      "Built multiple backend applications using Django REST Framework."
    ]
  },
  {
    title:
      "Full Stack Web Development Certification - OccupIQ Institute (Completed 2021)",
    details: [
      "Learned frontend technologies including HTML, CSS, JavaScript, and React.",
      "Integrated frontend applications with backend APIs built using Django.",
      "Developed end-to-end full-stack applications including authentication, CRUD operations, and API integrations."
    ]
  }
];

const achievements = [
  "Built and deployed multiple production web applications using Django and Django REST Framework.",
  "Developed scalable backend systems with background processing using Celery and caching with Redis.",
  "Successfully delivered fintech and SaaS backend platforms used by real users.",
  "Designed secure REST APIs with authentication and documentation using Swagger UI and Postman."
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
          <div className="hero-content">
            <h1>Hi, I&apos;m Swati Jamgade</h1>
            <p>Full Stack Developer</p>
            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>
          <div className="hero-media">
            <img
              src="https://images.pexels.com/photos/5496459/pexels-photo-5496459.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Person typing on a laptop"
              className="hero-image"
              loading="lazy"
            />
          </div>
        </section>

        <section id="about" className="section reveal" ref={setRevealRef}>
          <h2>About Me</h2>
          <p>
            Strategy-driven Backend Engineer with 3+ years of commercial experience
            delivering API-driven, customer-facing applications using Python, Django,
            REST APIs, and SQL. I am experienced in translating user stories into
            scalable technical solutions, supporting digitalisation initiatives, and
            delivering under tight deadlines. My background includes teaching and
            technical roles, followed by a planned maternity break. In early 2022,
            I deliberately transitioned into backend development by completing
            structured training in Python and automation before moving into
            professional software engineering roles. I am strong in API integration,
            workflow automation, and cloud-deployed systems, with a collaborative
            and stakeholder-focused approach.
          </p>
        </section>

        <section id="skills" className="section reveal" ref={setRevealRef}>
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <article
                key={group.category}
                className="card reveal"
                ref={setRevealRef}
              >
                <h3>{group.category}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => {
                    const logo = skillLogos[item];
                    return (
                      <li key={item} className="skill-list-item">
                        {logo ? (
                          <img
                            src={logo}
                            alt={`${item} logo`}
                            className="skill-logo"
                            loading="lazy"
                          />
                        ) : (
                          <span
                            className="skill-logo-fallback"
                            aria-hidden="true"
                          >
                            ●
                          </span>
                        )}
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal" ref={setRevealRef}>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card project-card reveal"
                ref={setRevealRef}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Website
                  </a>
                ) : null}
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
          <h3 className="subsection-title">Certifications</h3>
          <ul className="card-list">
            {certifications.map((certification) => (
              <li
                key={certification.title}
                className="card cert-card reveal"
                ref={setRevealRef}
              >
                <p className="cert-title">{certification.title}</p>
                <ul className="cert-detail-list">
                  {certification.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h3 className="subsection-title">Achievements</h3>
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
