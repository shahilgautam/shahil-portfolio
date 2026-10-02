import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Download, Github, Linkedin, Mail, Menu, X,
  Code2, GraduationCap, Database, BrainCircuit, ExternalLink,
  Terminal, Sparkles, ChevronDown
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Smart Attendance Management System",
    description:
      "A full-stack attendance platform with employee management, authentication, dashboard analytics and a planned face-recognition/liveness workflow.",
    tags: ["Node.js", "Express", "MySQL", "Face Recognition"],
    icon: "SA",
    link: "https://github.com/shahilgautam/smart-attendance"
  },
  {
    title: "DocManager",
    description:
      "A Django-based document management system for securely organizing, tracking, uploading, and managing person-specific documents.",
    tags: ["Django", "Python", "HTML"],
    icon: "DM",
    link: "https://github.com/shahilgautam/DocManager"
  }
];

const skills = [
  ["Python", "Programming, automation & AI foundations"],
  ["JavaScript", "Modern web development"],
  ["React", "Component-based UI development"],
  ["Node.js", "Backend & REST APIs"],
  ["Express.js", "Server-side application development"],
  ["MySQL", "Relational databases & SQL"],
  ["Git & GitHub", "Version control & collaboration"],
  ["Django", "Django handles the backend logic connecting all of pieces."],
  ["AI / ML", "Learning path & practical exploration"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark"><span>S</span>G</span>
            <span>Shahil Gautam</span>
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="talk-btn" href="#contact" onClick={closeMenu}>
              Let's Talk <ArrowRight size={17} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">B.TECH CSE • DEVELOPER • AI ENTHUSIAST</p>
              <p className="hello">Hi, I'm</p>
              <h1>Shahil <span>Gautam</span></h1>
              <p className="hero-role">
                Full Stack Developer <b>·</b> Python Developer <b>·</b> AI Enthusiast
              </p>
              <p className="hero-text">
                I build real-world web applications, solve problems with code,
                and continuously explore modern technologies to create useful products.
              </p>

              <div className="hero-actions">
                <a className="primary-btn" href="#projects">
                  View My Projects <ArrowRight size={19} />
                </a>
                <a className="secondary-btn" href="/resume.pdf" download>
                  <Download size={18} /> Download Resume
                </a>
              </div>

              <div className="socials">
                <a href="https://github.com/shahilgautam" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/shahil-gautam" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:gshahilgautam@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orb orb-a"></div>
              <div className="orb orb-b"></div>
              <div className="code-float">&lt;/&gt;</div>
              <div className="note note-left">Keep<br />Learning<br />Keep Building</div>
              <div className="note note-right">Ideas<br />into<br />Impact</div>
              <div className="portrait-container">
                <img
                  src="/profile.png"
                  alt="Shahil Gautam"
                  className="profile-photo"
                />
              </div>
              
            </div>
          </div>

          <div className="stats container">
            <div className="stat-card">
              <div className="stat-icon"><GraduationCap /></div>
              <div><strong>B.Tech CSE</strong><span>Delhi Institute of Engineering & Technology, Meerut</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Code2 /></div>
              <div><strong>2+ Projects</strong><span>Full-stack & AI-oriented builds</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Database /></div>
              <div><strong>Python | Node.js | MySQL</strong><span>Tools I work with</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><BrainCircuit /></div>
              <div><strong>Always Learning</strong><span>Building towards better solutions</span></div>
            </div>
          </div>

          <a className="scroll-down" href="#about">
            <span className="mouse"><i></i></span>
            Scroll Down <ChevronDown size={18} />
          </a>
        </section>

        <section id="about" className="section content-section">
          <div className="container two-col">
            <div>
              <p className="section-kicker">01 • ABOUT ME</p>
              <h2>Building with curiosity,<br /><span>learning by doing.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I'm a Computer Science engineering student focused on software
                development, backend systems and practical AI. I enjoy turning
                ideas into working applications and improving them feature by feature.
              </p>
              <p>
                My current toolkit includes Python, JavaScript, React, Node.js,
                Express and MySQL. I also explore APIs, automation, machine learning
                concepts and developer tooling.
              </p>
              <a className="text-link" href="#contact">Let's build something useful <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">02 • SELECTED WORK</p>
                <h2>Projects that <span>solve problems.</span></h2>
              </div>
              <a className="text-link" href="#contact">Work with me <ArrowRight size={17} /></a>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <div className="project-logo">{project.icon}</div>
                    <a href={project.link} aria-label={`Open ${project.title}`}><ExternalLink size={19} /></a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <div className="container">
            <p className="section-kicker">03 • SKILLS</p>
            <h2>My development <span>toolkit.</span></h2>
            <div className="skills-grid">
              {skills.map(([name, desc], i) => (
                <div className="skill" key={name}>
                  <div className="skill-number">0{i + 1}</div>
                  <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <p className="section-kicker">04 • EXPERIENCE</p>
            <h2>Learning through <span>real projects.</span></h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="dot"></div>
                <div>
                  <span className="timeline-label">CURRENT • DEVELOPMENT</span>
                  <h3>Full Stack & AI Learning Journey</h3>
                  <p>Building practical applications while strengthening Python, web development, databases and AI fundamentals.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot"></div>
                <div>
                  <span className="timeline-label">PROJECT WORK</span>
                  <h3>Backend & Application Development</h3>
                  <p>Hands-on work with Node.js, Express, MySQL, REST APIs, authentication, dashboards and integrations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="section-kicker">05 • CONTACT</p>
              <h2>Have an idea?<br /><span>Let's build it.</span></h2>
              <p className="contact-text">
                Open to internships, entry-level opportunities, collaborations and interesting software projects.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:gshahilgautam@gmail.com">
                <Mail size={19} /> Email Me
              </a>
              <a className="secondary-btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Shahil Gautam</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
