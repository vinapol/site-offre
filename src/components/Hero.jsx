import { useI18n } from "../i18n.jsx";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titleBefore}
            <em>{t.hero.titleEm}</em>
            {t.hero.titleAfter}
          </h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact" style={{ color: "#fff" }}>
              {t.quote}
            </a>
            <a className="btn btn-ghost" href="#offres">
              {t.hero.offers}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
