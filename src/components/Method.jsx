import { useI18n } from "../i18n.jsx";

export default function Method() {
  const { t } = useI18n();

  return (
    <section className="section method" id="methode">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.method.eyebrow}</p>
          <h2 className="display">{t.method.title}</h2>
          <p className="lead">{t.method.lead}</p>
        </div>

        <div className="steps">
          {t.method.steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="step-num">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
