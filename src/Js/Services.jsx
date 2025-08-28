import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
// Icons
import { FiLayers, FiGithub, FiCpu, FiDatabase } from "react-icons/fi";
import { TbBrandFirebase, TbChartHistogram } from "react-icons/tb";


const services = [
  {
    title: "Full‑Stack Development",
    icon: <FiLayers className="svc-icon" aria-hidden />,
    points: [
      "React, Node.js, Express, MongoDB, PostgreSQL",
      "REST/GraphQL, auth, role-based access",
      "CI/CD, testing, perf & accessibility",
    ],
  },
  {
    title: "Git & GitHub Controls",
    icon: <FiGithub className="svc-icon" aria-hidden />,
    points: [
      "Branching model, PR reviews, code standards",
      "Semantic commits, changelogs, releases",
      "GitHub Actions CI, protected branches",
    ],
  },
  {
    title: "Data Visualization",
    icon: <TbChartHistogram className="svc-icon" aria-hidden />,
    points: [
      "Dashboards: charts, maps, and KPIs",
      "D3.js, Chart.js, Recharts, ECharts",
      "Interactive stories & drill‑downs",
    ],
  },
  {
    title: "Cloud with Firebase",
    icon: <TbBrandFirebase className="svc-icon" aria-hidden />,
    points: [
      "Auth, Firestore/Realtime DB, Storage, Hosting",
      "Cloud Functions, security rules, Analytics",
      "Modern AI integrations in workflows",
    ],
  },
  {
    title: "Pega CDH",
    icon: <FiDatabase className="svc-icon" aria-hidden />,
    points: [
      "Real-time Next-Best-Action (NBA) decisions",
      "Always-on customer journeys across all channels",
      "AI + Business Rules for personalization & governance",

    ],
  }
  ,
  {
    title: "AI & Chatbots",
    icon: <FiCpu className="svc-icon" aria-hidden />,
    points: [
      "LLMs, agents, retrieval (RAG) pipelines",
      "Chat UX, streaming, tool/function calls",
      "Serverless deploys & observability",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);

  // Reveal on scroll
  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".service-card");
    if (!cards) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // Optional: cursor-follow sheen
  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const handle = (e) => {
      const cards = grid.querySelectorAll(".tilt-wrap");
      cards.forEach((wrap) => {
        const rect = wrap.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        wrap.style.setProperty("--mx", `${x}%`);
        wrap.style.setProperty("--my", `${y}%`);
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="about-heading">
        <h1 id="services-heading">Services</h1>
        <div className="heading-underline" />
      </div>

      <div className="services-grid" ref={ref}>
        {services.map((s, i) => (
          <Tilt
            key={s.title}
            className="tilt-wrap"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={900}
            transitionSpeed={900}
            glareEnable
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
          >
            <article
              className="service-card"
              style={{ transitionDelay: `${i * 100}ms` }}
              role="article"
              aria-label={s.title}
            >
              <header className="service-header">
                <div className="service-icon-wrap">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
              </header>
              <ul className="service-points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
    