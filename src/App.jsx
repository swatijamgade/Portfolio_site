import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

const valueStrip = ["Dedication", "Innovation", "Scalability", "Honesty", "Accountability"];

const serviceGroups = [
  {
    category: "Backend API Engineering",
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
    category: "Data & Performance",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Django ORM",
      "Query Optimization"
    ]
  },
  {
    category: "Async Processing",
    items: ["Celery", "Redis", "Event Workflows", "Background Jobs"]
  },
  {
    category: "DevOps & Delivery",
    items: [
      "Docker",
      "Docker Compose",
      "CI/CD Pipelines",
      "Swagger / OpenAPI",
      "Postman"
    ]
  },
  {
    category: "Cloud Readiness",
    items: [
      "Oracle Cloud Infrastructure (OCI)",
      "Dockerised Deployment",
      "Environment Hardening"
    ]
  },
  {
    category: "Engineering Workflow",
    items: ["Git", "Debugging", "Performance Optimization", "Team Collaboration"]
  }
];

const skillLogos = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Django REST Framework":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  FastAPI:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Docker Compose":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Swagger / OpenAPI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Django ORM":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
};

const projects = [
  {
    title: "Aurloo - Multi-Vendor E-commerce Platform",
    description:
      "Built a production-grade Django backend for customer and seller journeys with JWT + OTP auth, GST-aware pricing, payment verification, shipping automation, and Celery/Redis background processing.",
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
    outcome:
      "Automated 3 critical workflows (payments, shipping, and async jobs), reducing manual order handoffs.",
    live: "https://aurloo.com/"
  },
  {
    title: "ClimbCapital - Fintech Platform",
    description:
      "Delivered backend APIs for subscription-driven investment workflows with secure JWT-based auth, robust business logic, and asynchronous processing for time-sensitive jobs.",
    tech: ["Python", "Django", "DRF", "MySQL", "Docker", "Celery", "Redis"],
    outcome:
      "Stabilized subscription execution with async processing and reduced failed background-task retries.",
    live: "https://climbcapital.uat.pybex.io/"
  },
  {
    title: "Lynkist - WhatsApp Business CRM Platform",
    description:
      "Built API workflows for a WhatsApp Business CRM covering real-time chat, contact organization, template messaging, and analytics with a multi-tenant architecture.",
    tech: [
      "Python",
      "Django",
      "DRF",
      "WhatsApp Business API",
      "Multi-Tenant SaaS",
      "Campaign Analytics"
    ],
    outcome:
      "Enabled scalable customer messaging operations with tenant isolation and measurable improvements in campaign tracking and response handling.",
    live: "https://lynkist.io/"
  },
  {
    title: "Task Management API",
    description:
      "Designed role-aware task APIs for assignment, reminders, and status lifecycle handling with cleaner query plans and improved response times.",
    tech: ["Python", "Django", "DRF", "Celery", "Swagger"],
    outcome:
      "Improved task-list and reminder endpoint responsiveness with cleaner, optimized query patterns."
  }
];

const certifications = [
  {
    title: "Django Developer Certification - OccupyQ Institute",
    details: [
      "Completed advanced backend training in Django and Python.",
      "Covered API architecture, auth systems, and database design.",
      "Built multiple real-world projects with Django REST Framework."
    ]
  },
  {
    title: "Full Stack Web Development Certification - OccupyQ Institute",
    details: [
      "Learned frontend and backend integration patterns.",
      "Implemented full-stack products with authentication and CRUD workflows.",
      "Connected React clients with API-first Django services."
    ]
  }
];

const achievements = [
  "Built and deployed production applications serving real users.",
  "Implemented secure and scalable API systems with background processing.",
  "Delivered backend systems for fintech and e-commerce domains.",
  "Created API documentation pipelines with Swagger and Postman."
];

const faqs = [
  {
    question: "What kind of projects do you usually work on?",
    answer:
      "I primarily work on backend-heavy products such as e-commerce, fintech, and internal business platforms where API quality, performance, and reliability are critical."
  },
  {
    question: "Do you handle deployment and DevOps setup?",
    answer:
      "Yes. I can support Docker-based deployment, environment setup, CI/CD integration, and production hardening for Python backend services."
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely. Most of my commercial work has involved reading existing systems quickly, improving architecture, and shipping safe enhancements under deadlines."
  },
  {
    question: "Are you open to remote collaboration?",
    answer:
      "Yes. I am available for remote opportunities and comfortable collaborating asynchronously with product, design, and engineering teams."
  }
];

const impactStats = [
  { label: "Commercial Experience", value: "3+ Years" },
  { label: "Production Projects", value: "10+" },
  { label: "Core Stack", value: "Python · Django · DRF" }
];

const rolePills = [
  "Backend Engineer",
  "Full Stack Developer",
  "API Specialist",
  "Django Developer"
];

const journeySteps = [
  {
    period: "2021",
    title: "Structured Technical Training",
    details:
      "Completed focused certification programs in Django and full stack development with practical project delivery."
  },
  {
    period: "2022",
    title: "Backend Career Transition",
    details:
      "Moved intentionally into professional backend engineering, focusing on APIs, workflows, and automation."
  },
  {
    period: "2023 - Present",
    title: "Commercial Product Delivery",
    details:
      "Built and maintained production systems across e-commerce, fintech, and internal business platforms."
  }
];

const contactLinks = [
  {
    label: "Email",
    value: "jamgade.swati@gmail.com",
    href: "mailto:jamgade.swati@gmail.com"
  },
  {
    label: "Phone",
    value: "+44 7442262743",
    href: "tel:+447442262743"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/swati-jamgade",
    href: "https://www.linkedin.com/in/swati-jamgade"
  },
  {
    label: "GitHub",
    value: "github.com/swatijamgade",
    href: "https://github.com/swatijamgade"
  }
];

const initialContactForm = {
  name: "",
  email: "",
  message: ""
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark") {
        return true;
      }
      if (savedTheme === "light") {
        return false;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const [contactForm, setContactForm] = useState(initialContactForm);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState("");
  const revealRefs = useRef([]);

  const closeMenu = () => setIsMenuOpen(false);

  const validateContactForm = (values) => {
    const errors = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedMessage = values.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!trimmedName) {
      errors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errors.name = "Name should be at least 2 characters.";
    }

    if (!trimmedEmail) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
      errors.message = "Please enter a message.";
    } else if (trimmedMessage.length < 20) {
      errors.message = "Message should be at least 20 characters.";
    }

    return errors;
  };

  const handleContactInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const errors = validateContactForm(contactForm);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormSuccess("");
      return;
    }

    setFormSuccess("Thank you. Your message is ready to send.");
    setContactForm(initialContactForm);
  };

  const setRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("theme-dark", isDark);
    try {
      window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Ignore storage failures and keep in-memory theme state.
    }
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
      { threshold: 0.12 }
    );

    revealRefs.current.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell" id="home">
      <header className="site-header">
        <div className="value-strip">
          <p>{valueStrip.join(" | ")}</p>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-main">Swati Jamgade</span>
            <span className="brand-sub">
              Full-Stack Developer | PYTHON | DJANGO | FastAPI Expert | Creating Scalable
              Solution
            </span>
          </a>

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

          <div className="nav-controls">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? "Light" : "Dark"} Mode
            </button>

            <a href="#contact" className="header-cta" onClick={closeMenu}>
              Get In Touch
            </a>

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
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero reveal" ref={setRevealRef}>
          <div className="hero-copy">
            <p className="eyebrow">API-First Engineering for High-Impact Products</p>
            <h1>Reliable backend systems, shipped fast.</h1>
            <p className="hero-text">
              I help teams ship secure, scalable Django services and workflow automation for
              products that need performance, maintainability, and fast delivery.
            </p>
            <p className="availability-line">
              Based in the UK | Open to remote and hybrid software engineering roles.
            </p>
            <ul className="role-pill-list" aria-label="Professional roles">
              {rolePills.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/swati-jamgade"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Download Resume
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>

            <ul className="impact-list" aria-label="Professional impact stats">
              {impactStats.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel">
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Developer writing backend code"
              className="hero-image"
              loading="lazy"
            />
            <div className="hero-panel-content">
              <h2>What You Can Expect</h2>
              <ul>
                <li>Clean API architecture and thoughtful data models</li>
                <li>Production-ready workflows with async processing</li>
                <li>Deployment support and strong engineering communication</li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="about" className="section about-section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <h2>About Me</h2>
          </div>

          <p className="about-text">
            I am a Backend Engineer and Full-Stack Developer with 3+ years of experience
            building API-driven applications using Python, Django, REST APIs, and SQL.
            Currently, I work as a Software Engineer at Pybex Technologies, where I develop and
            maintain backend systems, API integrations, and scalable web applications that
            support business-critical platforms. I specialize in designing efficient backend
            architectures, integrating third-party services, and translating business
            requirements into reliable technical solutions. My work focuses on clean,
            maintainable code and scalable system design. In 2022, I transitioned into backend
            development, completing structured training in Python and automation before moving
            into professional software engineering roles. Since then, I have contributed to
            production applications involving API integrations, workflow automation, and
            cloud-deployed systems. I enjoy collaborating with cross-functional teams, solving
            complex backend problems, and building technology that delivers real business
            outcomes.
          </p>
        </section>

        <section id="experience" className="section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <p>Experience Journey</p>
            <h2>How I moved into engineering and built production-ready systems.</h2>
          </div>
          <ol className="journey-list">
            {journeySteps.map((step) => (
              <li key={step.period} className="journey-card reveal" ref={setRevealRef}>
                <p className="journey-period">{step.period}</p>
                <h3>{step.title}</h3>
                <p>{step.details}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <p>Skills</p>
            <h2>Technical skills and tools I use to build software.</h2>
          </div>

          <div className="service-grid">
            {serviceGroups.map((group) => (
              <article key={group.category} className="service-card reveal" ref={setRevealRef}>
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
                          <span className="skill-logo-fallback" aria-hidden="true">
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
          <div className="section-heading">
            <p>Projects</p>
            <h2>Selected work across e-commerce, fintech, and SaaS systems.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card reveal" ref={setRevealRef}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-outcome">
                  <strong>Impact:</strong> {project.outcome}
                </p>
                <ul className="tag-list" aria-label={`Technologies used for ${project.title}`}>
                  {project.tech.map((tool) => (
                    <li key={`${project.title}-${tool}`}>{tool}</li>
                  ))}
                </ul>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                    Visit Live Website
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <p>Achievements</p>
            <h2>Certifications and delivery highlights.</h2>
          </div>

          <div className="achievement-grid">
            <article className="achievement-card reveal" ref={setRevealRef}>
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((certification) => (
                  <li key={certification.title}>
                    <p className="cert-title">{certification.title}</p>
                    <ul className="cert-detail-list">
                      {certification.details.map((detail) => (
                        <li key={`${certification.title}-${detail}`}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </article>

            <article className="achievement-card reveal" ref={setRevealRef}>
              <h3>Professional Highlights</h3>
              <ul className="highlight-list">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="faq" className="section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <p>FAQ</p>
            <h2>Common questions from clients and teams.</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item reveal" ref={setRevealRef}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section reveal" ref={setRevealRef}>
          <div className="section-heading">
            <p>Contact</p>
            <h2>Let&apos;s build something reliable together.</h2>
          </div>

          <div className="contact-grid">
            <ul className="contact-list">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <article className="contact-card">
              <h3>Open To Opportunities</h3>
              <p>
                Available for backend engineering roles and project-based collaborations
                focused on API design, platform reliability, and workflow automation.
              </p>

              <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactInputChange}
                    className={`form-input ${formErrors.name ? "is-error" : ""}`}
                    aria-invalid={Boolean(formErrors.name)}
                    aria-describedby={formErrors.name ? "contact-name-error" : undefined}
                  />
                  {formErrors.name ? (
                    <p id="contact-name-error" className="form-error">
                      {formErrors.name}
                    </p>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactInputChange}
                    className={`form-input ${formErrors.email ? "is-error" : ""}`}
                    aria-invalid={Boolean(formErrors.email)}
                    aria-describedby={formErrors.email ? "contact-email-error" : undefined}
                  />
                  {formErrors.email ? (
                    <p id="contact-email-error" className="form-error">
                      {formErrors.email}
                    </p>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    className={`form-input form-textarea ${formErrors.message ? "is-error" : ""}`}
                    aria-invalid={Boolean(formErrors.message)}
                    aria-describedby={formErrors.message ? "contact-message-error" : undefined}
                  ></textarea>
                  {formErrors.message ? (
                    <p id="contact-message-error" className="form-error">
                      {formErrors.message}
                    </p>
                  ) : null}
                </div>

                <button type="submit" className="btn contact-submit">
                  Validate Message
                </button>
              </form>

              {formSuccess ? <p className="form-success">{formSuccess}</p> : null}

              <a href="mailto:jamgade.swati@gmail.com" className="btn btn-outline">
                Email Me Directly
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-branding">
            <span className="footer-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" role="img" focusable="false">
                <path d="M16 4h8v12h12v8H24v12h-8V24H4v-8h12z"></path>
              </svg>
            </span>
            <div className="footer-copy">
              <p className="footer-title">© 2026 Swati Jamgade</p>
              <p className="footer-subtitle">Built with React, JavaScript & CSS</p>
            </div>
          </div>

          <div className="footer-socials" aria-label="Social links">
            <a
              href="https://github.com/swatijamgade"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M12 1.8A10.2 10.2 0 0 0 8.8 21.7c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.8 1.1 1.8 1.1 1 .1.6 2.7 3.3 2 .1-.8.4-1.3.7-1.6-2.3-.3-4.7-1.2-4.7-5a3.9 3.9 0 0 1 1.1-2.7 3.7 3.7 0 0 1 .1-2.7s.9-.3 3 1.1a10.3 10.3 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1a3.7 3.7 0 0 1 .1 2.7 3.8 3.8 0 0 1 1.1 2.7c0 3.8-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/swati-jamgade"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M6.9 8.4A1.9 1.9 0 1 1 7 4.6a1.9 1.9 0 0 1-.1 3.8zM5.4 9.8h3v9.7h-3V9.8zm4.7 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.3h-3v-4.7c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4v4.8h-3V9.8z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="mailto:jamgade.swati@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M4 6.5C4 5.1 5.1 4 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11zm2 0v.3l5.8 4.4a.5.5 0 0 0 .4.1.5.5 0 0 0 .4-.1L18 6.8v-.3c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5zm12 2.8-4.1 3.1a2.5 2.5 0 0 1-3 0L6 9.3v8.2c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5V9.3z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
