import "./About.css";

const About = () => {
  const skills = [
    {
      category: "Expertise",
      items: [
        "React",
        "Python",
        "JavaScript (Node.js/DOM)",
        "Java (Spring/Micronaut)",
        "SQL/Relational Databases",
        "Technical Documentation and Standards",
        "Ruby on Rails",
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        "Playwright (E2E)",
        "Jest",
        "RSpec",
        "Integration Testing",
        "System Observability",
      ],
    },
    {
      category: "Tools & Infrastructure",
      items: [
        "Google Ad Manager",
        "GCP",
        "GitHub Actions",
        "Jira Administration",
        "XML/DB Integration",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      category: "Leadership & Education",
      items: [
        "Technical Mentorship",
        "Curriculum Architecture",
        "Scrum/Agile Management",
        "GenAI SDLC Integration",
      ],
    },
    {
      category: "Educational Experience",
      items: [
        "Curriculum Architecture",
        "Instructional Design",
        "Assessment Engineering",
        "Technical Mentorship",
        "Peer-Coaching",
        "Apprenticeship Anchorage",
        "Cross-Functional Technical Training",
      ],
    },
  ];

  return (
    <div className="work-page">
      <div className="work-container">
        {/* Sidebar for Skills */}
        <aside className="skills-sidebar">
          <h2>Technical Toolbox</h2>
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main Timeline for Experience */}
        <main className="timeline">
          <h2>Professional Experience</h2>

          <div className="timeline-item">
            <div className="timeline-date">09/2021 - 01/2026</div>
            <div className="timeline-content">
              <h3>Sr. Software Engineer</h3>
              <h4>The Home Depot</h4>
              <ul>
                <li>
                  <strong>Revenue Generation:</strong> Pioneered exploration
                  into the Non-Endemic ad market and documented the initial
                  Google Ad Manager (GAM) implementation, delivering an
                  estimated $5M in annual revenue.
                </li>
                <li>
                  <strong>Testing Infrastructure:</strong> Architected and
                  executed a Playwright E2E testing framework, successfully
                  increasing production code coverage from 0% to over 80% for
                  high-traffic retail experiences.
                </li>
                <li>
                  <strong>Program Leadership:</strong> Anchored the 2024-2026 SE
                  Apprenticeship cohorts, translating complex retrospective data
                  into prioritized Jira backlogs and sustainable learning paths
                  for new engineers.
                </li>
                <li>
                  <strong>AI Integration:</strong> Curated and embedded
                  Generative AI training modules into the core engineering SDLC
                  to build organization-wide AI literacy.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">10/2020 - 07/2021</div>
            <div className="timeline-content">
              <h3>Software Engineer Coach</h3>
              <h4>Flatiron School</h4>
              <ul>
                <li>
                  <strong>Technical Instruction:</strong> Delivered advanced
                  lectures on JavaScript (DOM/APIs), React, and Ruby on Rails to
                  diverse engineering cohorts.
                </li>
                <li>
                  <strong>Agile Management:</strong> Facilitated daily Scrums
                  and provided high-level technical support for students
                  navigating complex system design and project delivery.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">05/2020 - 10/2020</div>
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <h4>SignUp</h4>
              <ul>
                <li>
                  <strong>Quality Assurance:</strong> Leveraged the RSpec
                  framework to design and implement robust integration tests,
                  ensuring system-wide code reliability.
                </li>
                <li>
                  <strong>Strategic Alignment:</strong> Partnered with marketing
                  and corporate leadership in cross-functional production
                  meetings to align technical roadmaps with business goals.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
