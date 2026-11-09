import { links } from "../data.js";
import { useI18n } from "../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-brand">
            <img
              className="brand-mark"
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              width="36"
              height="36"
              alt=""
            />
            Moïse Techer
          </p>
          <p className="footer-copy">{t.footer}</p>
        </div>
        <div className="footer-meta">
          <a href={`mailto:${links.email}`}>Email</a>
          <a href={links.portfolio}>Portfolio</a>
          <a href={links.cv}>CV</a>
          <a href={links.linkedin}>LinkedIn</a>
          <a href={links.malt}>Malt</a>
          <span>© 2026 Moïse Techer</span>
        </div>
      </div>
    </footer>
  );
}
