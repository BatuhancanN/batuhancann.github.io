import { useEffect, useRef } from "react";
import Typed from "typed.js";
import useSiteStore from "../../store/useSiteStore";
import profileImg from "../../assets/img/profile.jpeg";

export default function HeroSection() {
  const hero = useSiteStore((s) => s.data.hero);
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedInstance.current) typedInstance.current.destroy();

    typedInstance.current = new Typed(typedRef.current, {
      strings: hero.typedStrings,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2500,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: false,
    });

    return () => typedInstance.current?.destroy();
  }, [hero.typedStrings]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="badge">
          <i className="bx bx-code-alt" />
          <span>{hero.badge}</span>
        </div>
        <h1>
          {hero.greeting}
          <br />
          <span>{hero.name}</span> {hero.surname}
        </h1>
        <h3>
          <span className="multiple-text" ref={typedRef} />
        </h3>
        <p className="hero-desc">{hero.description}</p>

        <div className="btn-group">
          <a
            href={hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="bx bxl-github" /> GitHub
          </a>
          <a
            href={hero.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="bx bx-download" /> CV
          </a>
        </div>

        <div className="social-icons">
          {hero.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <i className={`bx ${link.icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className="home-img">
        <div className="img-wrapper">
          <div className="img-glow" />
          <img src={profileImg} alt={`${hero.name} ${hero.surname}`} />
          <div className="img-ring" />
        </div>
      </div>
    </section>
  );
}
