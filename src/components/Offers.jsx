import { useI18n } from "../i18n.jsx";

export default function Offers({ onSelectPlan }) {
  const { t } = useI18n();

  return (
    <section className="section" id="offres">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.offers.eyebrow}</p>
          <h2 className="display">{t.offers.title}</h2>
          <p className="lead">{t.offers.lead}</p>
        </div>

        <div className="offers-grid">
          {t.offers.items.map((offer) => (
            <article className="offer" key={offer.id}>
              <span className="offer-index">{offer.index}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <ul className="offer-list">
                {offer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="offer-meta">
                <p className="offer-price">{offer.price}</p>
                <a
                  className="btn btn-ghost"
                  href="#contact"
                  onClick={() => onSelectPlan(offer.id)}
                >
                  {offer.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
