import useSiteStore from "../../store/useSiteStore";

export default function SkillsSection() {
  const skills = useSiteStore((s) => s.data.skills);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">{skills.title}</h2>

      <div className="skills-grid">
        {skills.categories.map((cat) => (
          <div className="skill-category" key={cat.id}>
            <h3 className="category-title">
              <i className={`bx ${cat.icon}`} /> {cat.title}
            </h3>
            <div className="skill-items">
              {cat.items.map((item, i) => (
                <div className="skill-chip" key={i}>
                  <i className={`bx ${item.icon}`} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
