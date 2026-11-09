import { useEffect, useState } from "react";
import { useI18n } from "../i18n.jsx";

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label={t.homeLabel} onClick={close}>
            <img
              className="brand-mark"
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              width="36"
              height="36"
              alt=""
            />
            <span className="brand-name">Moïse Techer</span>
          </a>

          <nav className="nav" aria-label={t.navLabel}>
            {t.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <LangSwitch lang={lang} setLang={setLang} label={t.langLabel} />
            <a className="btn btn-primary header-cta" href="#contact" style={{ color: "#fff" }}>
              {t.quote}
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="menu-toggle-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-nav" id="mobile-nav">
          <nav aria-label={t.mobileNavLabel}>
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-primary mobile-cta" href="#contact" onClick={close} style={{ color: "#fff" }}>
              {t.quote}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function LangSwitch({ lang, setLang, label }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      <button
        type="button"
        className={lang === "fr" ? "is-active" : ""}
        aria-pressed={lang === "fr"}
        onClick={() => setLang("fr")}
      >
        FR
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
