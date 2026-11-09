import { useI18n } from "../i18n.jsx";

export default function Pricing({ onSelectPlan }) {
  const { t } = useI18n();

  return (
    <section className="section" id="tarifs">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.pricing.eyebrow}</p>
          <h2 className="display">{t.pricing.title}</h2>
          <p className="lead">{t.pricing.lead}</p>
        </div>

        <div className="pricing-grid">
          {t.pricing.plans.map((plan) => (
            <article
              className={plan.featured ? "price-plan is-featured" : "price-plan"}
              key={plan.id}
            >
              <p className="plan-label">{plan.label}</p>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-amount">{plan.amount}</p>
              <p className="plan-desc">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={plan.featured ? "btn btn-primary" : "btn btn-ghost"}
                href="#contact"
                onClick={() => onSelectPlan(plan.id)}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
