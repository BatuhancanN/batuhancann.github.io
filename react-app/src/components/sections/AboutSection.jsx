import useSiteStore from "../../store/useSiteStore";

export default function AboutSection() {
  const about = useSiteStore((s) => s.data.about);

  return (
    <section className="about" id="about">
      <h2 className="heading">{about.title}</h2>
      <div className="about-content">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        <div className="about-stats">
          {about.stats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-icon">
                <i className={`bx ${stat.icon}`} />
              </div>
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <p>{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
