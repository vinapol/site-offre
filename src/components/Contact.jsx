import { useState } from "react";
import { links } from "../data.js";
import { useI18n } from "../i18n.jsx";

const empty = { name: "", email: "", project: "", message: "" };

const validators = {
  name: (value) => (value.trim().length >= 2 ? "" : "name"),
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "email"),
  project: (value) => (value ? "" : "project"),
  message: (value) => (value.trim().length >= 20 ? "" : "message"),
};

export default function Contact({ plan, onPlanChange }) {
  const { t } = useI18n();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [summary, setSummary] = useState([]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const project = plan || values.project;
  const fields = t.contact.fields;

  function update(field, value) {
    if (field === "project") onPlanChange(value);
    else setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const message = validators[field](value);
      if (!message) {
        const next = { ...current };
        delete next[field];
        return next;
      }
      return { ...current, [field]: message };
    });
  }

  function validate() {
    const next = {};
    const snapshot = { ...values, project };
    for (const field of Object.keys(validators)) {
      const message = validators[field](snapshot[field]);
      if (message) next[field] = message;
    }
    setErrors(next);
    const invalid = Object.keys(next);
    setSummary(invalid);
    return invalid;
  }

  function onSubmit(event) {
    event.preventDefault();
    const invalid = validate();
    if (invalid.length) {
      document.getElementById(invalid[0])?.focus();
      return;
    }

    const option = t.contact.options.find((item) => item.value === project);
    const body = [
      `${t.contact.mailName} : ${values.name.trim()}`,
      `${t.contact.mailEmail} : ${values.email.trim()}`,
      `${t.contact.mailProject} : ${option?.label ?? project}`,
      "",
      values.message.trim(),
    ].join("\n");
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(
      `${t.contact.mailSubject} — ${option?.label ?? project}`,
    )}&body=${encodeURIComponent(body)}`;

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 450);
  }

  function reset() {
    setValues(empty);
    onPlanChange("");
    setErrors({});
    setSummary([]);
    setSent(false);
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-layout">
        <div className="contact-aside">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="display">{t.contact.title}</h2>
            <p className="lead">
              {t.contact.lead} {links.email}.
            </p>
          </div>
        </div>

        <div className="contact-main">
        <div className="form-card">
          {sent ? (
            <div className="success-panel">
              <h3>{t.contact.successTitle}</h3>
              <p>
                {t.contact.success} {links.email}. {t.contact.successAfter}
              </p>
              <button type="button" className="btn btn-ghost" onClick={reset}>
                {t.contact.again}
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit}>
              {summary.length > 0 ? (
                <div className="form-summary" role="alert">
                  {t.contact.summary(summary.length)}{" "}
                  {summary.map((field, index) => (
                    <span key={field}>
                      {index > 0 ? ", " : null}
                      <a href={`#${field}`}>{fields[field]}</a>
                    </span>
                  ))}
                  .
                </div>
              ) : null}

              <div className="form-grid two">
                <Field
                  id="name"
                  label={fields.name}
                  error={errors.name ? t.errors[errors.name] : ""}
                  value={values.name}
                  autoComplete="name"
                  onChange={(value) => update("name", value)}
                />
                <Field
                  id="email"
                  label={fields.email}
                  type="email"
                  error={errors.email ? t.errors[errors.email] : ""}
                  value={values.email}
                  autoComplete="email"
                  onChange={(value) => update("email", value)}
                />
              </div>

              <div className="form-grid stack">
                <div className={errors.project ? "field is-invalid" : "field"}>
                  <label htmlFor="project">
                    {fields.project} <span className="req" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={project}
                    aria-invalid={Boolean(errors.project)}
                    aria-describedby={errors.project ? "project-error" : undefined}
                    onChange={(event) => update("project", event.target.value)}
                  >
                    <option value="">{t.contact.select}</option>
                    {t.contact.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.project ? (
                    <p className="field-error" id="project-error">
                      {t.errors[errors.project]}
                    </p>
                  ) : null}
                </div>

                <Field
                  id="message"
                  label={fields.message}
                  multiline
                  error={errors.message ? t.errors[errors.message] : ""}
                  value={values.message}
                  placeholder={t.contact.placeholder}
                  onChange={(value) => update("message", value)}
                />
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className={sending ? "btn btn-primary btn-block is-loading" : "btn btn-primary btn-block"}
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
                <p className="form-note">
                  {t.contact.note} {links.email}.
                </p>
              </div>
            </form>
          )}
        </div>
        <ul className="contact-points">
          <li>
            <a href={`mailto:${links.email}`} aria-label="Email" data-tooltip="Email">
              <Icon name="mail" />
            </a>
          </li>
          <li>
            <a href={links.portfolio} aria-label="Portfolio" data-tooltip="Portfolio">
              <Icon name="portfolio" />
            </a>
          </li>
          <li>
            <a href={links.cv} aria-label={t.contact.cvLabel} data-tooltip="CV">
              <Icon name="cv" />
            </a>
          </li>
          <li>
            <a href={links.linkedin} aria-label="LinkedIn" data-tooltip="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a href={links.malt} aria-label="Malt" data-tooltip="Malt">
              <Icon name="malt" />
            </a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false,
  };
  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    );
  }
  if (name === "portfolio") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }
  if (name === "cv") {
    return (
      <svg {...common}>
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v5M8 8h.01M12 16v-3.2a2 2 0 0 1 4 0V16" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 16V8l4 5 4-5v8" />
    </svg>
  );
}

function Field({ id, label, type = "text", multiline, error, value, onChange, ...rest }) {
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div className={error ? "field is-invalid" : "field"}>
      <label htmlFor={id}>
        {label} <span className="req" aria-hidden="true">*</span>
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          {...rest}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          {...rest}
        />
      )}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
