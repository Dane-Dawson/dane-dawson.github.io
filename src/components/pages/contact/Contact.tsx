import "./Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "Dane.P.Dawson@gmail.com",
      url: "mailto:Dane.P.Dawson@gmail.com",
      icon: "✉️",
    },
    {
      label: "LinkedIn",
      value: "in/dane-dawson",
      url: "https://www.linkedin.com/in/dane-dawson/",
      icon: "🔗",
    },
    {
      label: "GitHub",
      value: "github.com/danedawson",
      url: "https://github.com/danedawson",
      icon: "💻",
    },
    { label: "Location", value: "Austin, Texas", url: null, icon: "📍" },
  ];

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Whether you want to talk **EdTech**, **Ad Systems**, or the best place
          to find **Live Polka in Austin**, my inbox is open.
        </p>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <div key={link.label} className="contact-item">
              <span className="contact-icon">{link.icon}</span>
              <div className="contact-text">
                <span className="contact-label">{link.label}</span>
                {link.url ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span className="contact-value">{link.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-footer">
          <p>
            “Consistency is the last refuge of the unimaginative.” — Oscar Wilde
          </p>
          <span>(But I'm pretty consistent with my email replies.)</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
