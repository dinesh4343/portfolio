import React, { useState } from "react";



export default function EducationExperience() {
  const education = [
    { title: "B.Tech in Information Technology", org: "Sri Sai Ram Institute Of Technology", period: "2021 – 2025", details: "CGPA: 7.78, Major in Web Development" },
    { title: "Higher Secondary (XII)", org: "K N Matric Higher Secondary School", period: "2020 – 2021", details: "82.62% aggregate" },
    { title: "Secondary (X)", org: "K N Matric Higher Secondary School", period: "2018 – 2019", details: "75.20% aggregate" },
    { title: "Certification: PEGA Certified Senior System Architect", org: "PEGA Academy", period: "2024", details: "Case lifecycle, UI forms, decisioning, and guardrails for enterprise solutions." }
  ];

  const experience = [


   {
  "title": "Python Intern",
  "org": "Nan Mudhalvan  – Govt. of Tamil Nadu",
  "period": "31st March - 30gh April 2023",
  "certificate": "/Certificates/INTERNSHIP/pantech.png",
  "details": "Contributed to Python-based application development under the Nan Mudhalvan government internship scheme in Chennai, including building components, writing test cases, and preparing documentation."
}
,
    {
      "title": "Freelance Developer",
      "org": "Self-Employed",
      "period": "2022 – 2023",
      "details": "Designed and developed a professional website for the startup 'AGSAIMO', showcasing their services with a modern UI, improving online visibility, and promoting engagement with potential clients.",
      "link": "https://dinesh4343.github.io/AGSAIMO/"
    }
    , {
      title: "Full Stack Developer",
      org: "Self-Employed",
      period: "Aug 2023 – Present",
      details: "Developing a smart e-ticketing system for Chennai MTC buses, integrating seamless user booking, digital payments, and admin dashboards with scalable full-stack architecture.",
      link: "https://dinesh4343.github.io/TICKET_ZONE/"
    },
    { title: "Open Source Contributor", org: "GitHub", period: "2021 – 2022", details: "Bug fixes, docs, small features" }
  ];

  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { key: "education", label: "Education", data: education },
    { key: "experience", label: "Experience", data: experience }
  ];

  const activeData = tabs.find(t => t.key === activeTab)?.data ?? [];

  const [popupUrl, setPopupUrl] = useState(null);

  return (
    <section className="container">
      {/* Heading */}
      <div className="about-heading">
        <h1>Education & Experience</h1>
        <div className="heading-underline"></div>
      </div>

      {/* Tabs */}
      <div className="tabs-timeline" role="tablist" aria-label="Education and Experience Tabs">
        {tabs.map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={activeTab === t.key}
            aria-controls={`panel-${t.key}`}
            id={`tab-${t.key}`}
            className={`tab ${activeTab === t.key ? "active" : ""}`}
            onClick={() => setActiveTab(t.key)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} className="panel">
        <ol className="timeline">
          {activeData.map((item, idx) => (
            <li key={idx} className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>
              <div className="content">
                <div className="header">
                  <h3 className="title">{item.title}</h3>
                  <span className="period">{item.period}</span>
                </div>
                <div className="sub">{item.org}</div>
                {item.details && <p className="details">{item.details}</p>}
                {item.link && item.link !== "#" && (
                  <a className="sub" href={item.link} target="_blank" rel="noopener noreferrer">
                    More Info
                  </a>
                )}
                {item.certificate && (
     <button
  className="btn-proff"
  onClick={() => setPopupUrl(item.certificate)}
  type="button"
  aria-label="Open certificate proof"
  title="Open certificate proof"
>
  <i className="bi bi-patch-check-fill btn-proff__icon" aria-hidden="true"></i>
  <span className="btn-proff__label">Proff</span>
</button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Stylish Popup */}
{popupUrl && (
  <div
    className="popup-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Certificate Proof"
    onClick={() => setPopupUrl(null)}
    onKeyDown={(e) => {
      if (e.key === "Escape") setPopupUrl(null);
    }}
    tabIndex={-1}
  >
    <div
      className="popup-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="popup-close"
        onClick={() => setPopupUrl(null)}
        aria-label="Close"
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div className="popup-header">
        <h3 className="popup-title">Certificate Preview</h3>
      </div>

      <div className="popup-body">
        <div className="iframe-wrap">
          <iframe
            src={popupUrl}
            title="Certificate Proof"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="fullscreen"
          />
        </div>
      </div>

      <div className="popup-footer">
        <button
          className="popup-action"
          type="button"
          onClick={() => window.open(popupUrl, "_blank", "noopener,noreferrer")}
        >
          Open in new tab
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
