import React, { useEffect, useMemo, useRef, useState, useId } from "react";
import { motion, useAnimation } from "framer-motion";

/* Dev logs */
const DEV = process.env.NODE_ENV !== "production";
const group = (label, fn) => { if (!DEV) return fn?.(); console.groupCollapsed(`[Skills] ${label}`); try { fn?.(); } finally { console.groupEnd(); } };
const log = (...a) => DEV && console.log("[Skills]", ...a);
const info = (...a) => DEV && console.info("[Skills]", ...a);
const warn = (...a) => DEV && console.warn("[Skills]", ...a);

/* In-view hook */
function useInViewOnce(options = { threshold: 0.25 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    let obs;
    try {
      obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      }, options);
      obs.observe(el);
    } catch (e) {
      warn("IntersectionObserver unsupported");
      setInView(true);
    }
    return () => obs && obs.disconnect();
  }, [options, inView]);
  return { ref, inView };
}

/* Category and skill icons (Bootstrap Icons) */
const CAT_ICON = {
  frontend: "bi-window",
  backend: "bi-hdd-network-fill",
  prog: "bi-code-slash",
  uiux: "bi-palette2",
  db: "bi-database-fill",
  pega: "bi-diagram-3-fill",
  soft: "bi-people-fill",
};
const SKILL_ICON = {
  HTML: "bi-filetype-html",
  CSS: "bi-filetype-css",
  JavaScript: "bi-filetype-js",
  React: "bi-filetype-jsx", 
  Bootstrap: "bi-bootstrap-fill",
  "Node JS": "bi-node-minus-fill",
  C: "bi-braces",
  Python: "bi-filetype-py",
  Java: "bi-filetype-java",
  "C++": "bi-code",
  Canva: "bi-brush-fill",
  Figma: "bi-palette-fill",
  SQL: "bi-database-fill",
  MySQL: "bi-database-fill-gear",
  Firebase: "bi-lightning-fill",
  "Pega CSA": "bi-award",
  "Pega CSSA": "bi-award-fill",
  Communication: "bi-chat-dots-fill",
  "Team Work": "bi-people-fill",
  "Prompt Writing": "bi-pencil-square",
  Adaptability: "bi-arrows-move",
};

/* Data with detailed descriptions */
const categories = [
  {
    key: "frontend",
    title: "Frontend",
    description: [
      "Accessible, responsive interfaces using semantic HTML and scalable CSS systems.",
      "Component-driven React UIs emphasizing state management, performance, and reusability.",
      "Cross-browser styling, utility-first patterns, and design-token alignment.",
    ],
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    description: [
      "RESTful API design with Node.js including authentication and middleware orchestration.",
      "Structured logging, robust error handling, and scalable project layouts.",
      "Response optimization with caching, pagination, and payload minimization.",
    ],
    items: [{ name: "Node JS", level: 85 }],
  },
  {
    key: "prog",
    title: "Programming Languages",
    description: [
      "Hands-on with DSA, OOP, and algorithmic problem solving across ecosystems.",
      "Idiomatic code style and tooling proficiency for C-family and Python.",
      "Context switching between imperative and object-oriented paradigms.",
    ],
    items: [
      { name: "C", level: 80 },
      { name: "Python", level: 90 },
      { name: "Java", level: 90 },
      { name: "C++", level: 70 },
    ],
  },
  {
    key: "uiux",
    title: "UI / UX",
    description: [
      "Requirement translation into wireframes and high-fidelity design systems.",
      "Visual hierarchy, spacing rhythm, and reusable component libraries.",
      "Rapid prototyping for validating user flows and accessibility.",
    ],
    items: [
      { name: "Canva", level: 90 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    key: "db",
    title: "Database",
    description: [
      "Schema design that anticipates growth and enables clarity.",
      "Query optimization with indexing, transactions, and constraints.",
      "Realtime sync and data modeling for cloud backends.",
    ],
    items: [
      { name: "SQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 90 },
    ],
  },
  {
    key: "pega",
    title: "PEGA",
    description: [
      "Case lifecycle, UI forms, decisioning, and guardrails for enterprise solutions.",
      "CSA/CSSA-aligned best practices for maintainable rule design.",
      "Modular, testable flows for scalable implementations.",
    ],
    items: [
      { name: "Pega CSA", level: 84 },
      { name: "Pega CSSA", level: 94 },
    ],
  },
  {
    key: "soft",
    title: "Soft Skills",
    description: [
      "Clear, proactive communication with technical and non-technical stakeholders.",
      "Collaborative execution in high-velocity, quality-focused teams.",
      "Adaptability and effective prompt crafting for AI-assisted workflows.",
    ],
    items: [
      { name: "Communication", level: 80 },
      { name: "Team Work", level: 95 },
      { name: "Prompt Writing", level: 80 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

/* Animations */
const barVariants = {
  hidden: { width: "0%" },
  visible: (target) => ({
    width: `${target}%`,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};
const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.045 * i, duration: 0.25, ease: "easeOut" },
  }),
};

function SkillRow({ catKey, s, i, controls }) {
  const icon = SKILL_ICON[s.name] || "bi-stars";
  const label = `${catKey} :: ${s.name}`;
  return (
    <motion.div
      className="skill"
      custom={i}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      onAnimationStart={() => group(`Skill Start: ${label}`, () => info("Animating", { name: s.name }))}
      onAnimationComplete={() => group(`Skill Done: ${label}`, () => log("Completed", { name: s.name }))}
    >
      <div className="skill-row">
        <div className="skill-left">
          <i className={`bi ${icon} skill-icon`} aria-hidden="true" />
          <span className="skill-name">{s.name}</span>
        </div>
      </div>
      <div className="bar" aria-hidden="true">
        <motion.div className="bar-fill" custom={s.level} variants={barVariants} initial="hidden" animate={controls} />
      </div>
    </motion.div>
  );
}

function CategoryPanel({ category, query }) {
  const controls = useAnimation();
  const { ref, inView } = useInViewOnce({ threshold: 0.25 });
  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return category.items;
    return category.items.filter((s) => s.name.toLowerCase().includes(q));
  }, [category.items, query]);

  useEffect(() => {
    if (inView) {
      group(`Panel InView: ${category.key}`, () => info("Start animations"));
      controls.start("visible").catch(() => {});
    }
  }, [inView, controls, category.key]);

  return (
    <motion.div
      ref={ref}
      className="skill-category card hoverable"
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.22 } } }}
    >
      {items.length === 0 ? <div className="empty">No skills match the search.</div> : items.map((s, i) => (
        <SkillRow key={s.name} catKey={category.key} s={s} i={i} controls={controls} />
      ))}
    </motion.div>
  );
}

export default function SkillsProEnhanced() {
  const tabs = useMemo(() => categories, []);
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const tabsId = useId();

  // Tabs visible based on search results
  const filteredTabKeys = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tabs.map((t) => t.key);
    return tabs.filter((t) => t.items.some((s) => s.name.toLowerCase().includes(q))).map((t) => t.key);
  }, [tabs, query]);

  // Keep active tab if it still matches; otherwise move to first matching
  useEffect(() => {
    const activeKey = tabs[active]?.key;
    if (!activeKey) return;
    if (query && !filteredTabKeys.includes(activeKey)) {
      const idx = tabs.findIndex((t) => filteredTabKeys.includes(t.key));
      if (idx >= 0) setActive(idx);
    }
  }, [query, filteredTabKeys, tabs, active]);

  const onSelect = (idx) => setActive(idx);

  // Search completion behavior:
  // - Press Enter triggers filtering briefly, then auto-clears the input and restores tabs
  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      group("Search Complete", () => info("query:", query));
      // Option A (current): clear immediately after Enter
      setQuery("");
      // Option B (debounced clear): setTimeout(() => setQuery(""), 1200);
    }
  };

  const clearSearch = () => {
    group("Search Cleared", () => info("reset query"));
    setQuery("");
  };

  const activeCat = tabs[active];

  return (
    <>
      <div className="skills-page-header">
        <h1 className="page-title">Skills</h1>
        <div className="heading-underline" />
      </div>

      <section className="skills-pro extra-wide">
        <div className="toolbar">
          <div className="search">
            <i className="bi bi-search search-icon" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Search skills across all tabs (e.g., React, Python)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onSearchKeyDown}
              aria-label="Search all skills"
            />
            {query && (
              <button className="clear-btn" onClick={clearSearch} aria-label="Clear search">
                <i className="bi bi-x-circle-fill"></i>
              </button>
            )}
          </div>
        </div>

        <div className="grid-pro">
          <div className="left">
            <div className="tabs-section card hoverable">
              <div className="tabs" role="tablist" aria-label="Skills categories">
                {tabs.map((t, i) => {
                  const selected = i === active;
                  const show = filteredTabKeys.includes(t.key) || !query;
                  if (!show && query) return null;
                  const tabId = `${tabsId}-tab-${t.key}`;
                  const panelId = `${tabsId}-panel-${t.key}`;
                  const icon = CAT_ICON[t.key] || "bi-grid";
                  return (
                    <button
                      key={t.key}
                      id={tabId}
                      role="tab"
                      aria-selected={selected}
                      aria-controls={panelId}
                      tabIndex={selected ? 0 : -1}
                      className={`tab chip ${selected ? "active" : ""}`}
                      onClick={() => onSelect(i)}
                      title={t.title}
                    >
                      <i className={`bi ${icon} tab-icon`} aria-hidden="true"></i>
                      {t.title}
                    </button>
                  );
                })}
              </div>

              <div className="tab-panels">
                {tabs.map((t, i) => {
                  const selected = i === active;
                  const tabId = `${tabsId}-tab-${t.key}`;
                  const panelId = `${tabsId}-panel-${t.key}`;
                  const show = filteredTabKeys.includes(t.key) || !query;
                  return (
                    <div
                      key={t.key}
                      id={panelId}
                      role="tabpanel"
                      aria-labelledby={tabId}
                      hidden={!selected || !show}
                      className="tab-panel"
                    >
                      {selected && show && <CategoryPanel category={t} query={query} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="right card hoverable">
            <div className="right-header">
              <i className="bi bi-info-circle-fill right-icon" aria-hidden="true"></i>
              <h3 className="right-title">{activeCat.title}</h3>
            </div>
            <ul className="right-desc-list">
              {activeCat.description.map((d, idx) => (
                <li key={idx} className="right-desc-item">{d}</li>
              ))}
            </ul>
            <div className="right-key">
              <div className="right-key-title">Core tools</div>
              <div className="right-key-grid">
                {activeCat.items.map((s) => {
                  const ic = SKILL_ICON[s.name] || "bi-stars";
                  return (
                    <div className="right-chip" key={s.name} title={s.name}>
                      <i className={`bi ${ic} right-chip-icon`} aria-hidden="true"></i>
                      <span>{s.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
