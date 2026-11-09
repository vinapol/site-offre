import { useI18n } from "../i18n.jsx";

export default function Work() {
  const { t } = useI18n();

  return (
    <section className="section" id="realisations">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 className="display">{t.work.title}</h2>
          <p className="lead">{t.work.lead}</p>
        </div>

        <div className="work-list">
          {t.work.items.map((project) => (
            <article className="work-item" key={project.title}>
              <span className="work-year">{project.year}</span>
              <h3 className="work-title">
                {project.href ? (
                  <a href={project.href}>{project.title}</a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="work-desc">{project.description}</p>
              <span className="work-tag">{project.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
