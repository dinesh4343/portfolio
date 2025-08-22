import React, { useState } from "react";

export default function EducationExperience() {
  // 4 dummy items in each tab
  const education = [
    { title: "B.Tech in Computer Science", org: "XYZ University", period: "2019 – 2023", details: "CGPA: 8.4, Major in Web Development" },
    { title: "Higher Secondary (XII)", org: "ABC Sr. Sec. School", period: "2017 – 2019", details: "PCM, 92%" },
    { title: "Secondary (X)", org: "ABC Sr. Sec. School", period: "2016 – 2017", details: "95% aggregate" },
    { title: "Certification: React Developer", org: "Online Platform", period: "2024", details: "Hooks, Routing, State Management" }
  ];

  const experience = [
    { title: "Frontend Developer", org: "Acme Corp", period: "Aug 2023 – Present", details: "Shipped SPA features, improved performance" },
    { title: "Frontend Intern", org: "Startup Labs", period: "Jan 2023 – Jul 2023", details: "Built components, wrote tests, docs" },
    { title: "Freelance Developer", org: "Self-employed", period: "2022 – 2023", details: "Landing pages, dashboards, integrations" },
    { title: "Open Source Contributor", org: "GitHub", period: "2021 – 2022", details: "Bug fixes, docs, small features" }
  ];

  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { key: "education", label: "Education", data: education },
    { key: "experience", label: "Experience", data: experience }
  ];

  const activeData = tabs.find(t => t.key === activeTab)?.data ?? [];

  const TimelineItem = ({ item, idx }) => {
    const side = idx % 2 === 0 ? "left" : "right"; // alternate
    return (
      <li className={`tl-item tl-${side}`}>
        <div className="tl-col tl-col-left">
          {side === "left" && (
            <div className="tl-content">
              <div className="tl-header">
                <h3 className="tl-title">{item.title}</h3>
                <span className="tl-period">{item.period}</span>
              </div>
              <div className="tl-sub">{item.org}</div>
              {item.details && <p className="tl-details">{item.details}</p>}
            </div>
          )}
        </div>

        <div className="tl-axis">
          <span className="tl-dot" aria-hidden />
        </div>

        <div className="tl-col tl-col-right">
          {side === "right" && (
            <div className="tl-content">
              <div className="tl-header">
                <h3 className="tl-title">{item.title}</h3>
                <span className="tl-period">{item.period}</span>
              </div>
              <div className="tl-sub">{item.org}</div>
              {item.details && <p className="tl-details">{item.details}</p>}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <section className="container">
      <h2 className="section-title">Education & Experience</h2>

      <div className="tabs" role="tablist" aria-label="Education and Experience Tabs">
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

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="panel"
      >
        <ol className="timeline alternate">
          {activeData.map((item, idx) => (
            <TimelineItem key={idx} item={item} idx={idx} />
          ))}
        </ol>
      </div>
    </section>
  );
}
