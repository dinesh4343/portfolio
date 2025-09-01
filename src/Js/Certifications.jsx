import React, { useMemo, useState } from "react";
import certificationsData from "../Data/CertificationsData";


const uniqueSorted = (arr) => Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));

const Certifications = () => {
  const [search, setSearch] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");
  const [activeCert, setActiveCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const issuers = useMemo(() => ["All", ...uniqueSorted(certificationsData.map(c => c.issuer))], []);
  const categories = useMemo(() => ["All", ...uniqueSorted(certificationsData.map(c => c.category))], []);
  const technologies = useMemo(() => ["All", ...uniqueSorted(certificationsData.flatMap(c => c.technologies))], []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return certificationsData.filter(c => {
      const matchIssuer = issuerFilter === "All" || c.issuer === issuerFilter;
      const matchCategory = categoryFilter === "All" || c.category === categoryFilter;
      const matchTech = techFilter === "All" || c.technologies.includes(techFilter);
      const inSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        c.year.includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.technologies.some(t => t.toLowerCase().includes(q));
      return matchIssuer && matchCategory && matchTech && inSearch;
    });
  }, [search, issuerFilter, categoryFilter, techFilter]);

  // --- PAGINATION ---
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const anyFilterActive = search || issuerFilter !== "All" || categoryFilter !== "All" || techFilter !== "All";
  const clearAll = () => {
    setSearch("");
    setIssuerFilter("All");
    setCategoryFilter("All");
    setTechFilter("All");
  };

  return (
    <section className="certifications-section">
      <h2 className="section-title">
        <i className="bi bi-award-fill" aria-hidden="true"></i> Certifications
      </h2>

      {/* Filters + Search */}
      <div className="controls">
        <div className="search-container">
          <i className="bi bi-search search-icon" aria-hidden="true"></i>
          <input
            type="text"
            className="search-bar"
            placeholder="Search title, issuer, year, category, tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search certifications"
          />
          {search && (
            <button className="clear-btn" onClick={() => setSearch("")} aria-label="Clear search" type="button">
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
        </div>

        <label className="select-label" htmlFor="issuerSelect"><i className="bi bi-building"></i> Issuer</label>
        <select id="issuerSelect" className="filter-dropdown" value={issuerFilter} onChange={(e) => setIssuerFilter(e.target.value)}>
          {issuers.map((i) => (<option key={i} value={i}>{i}</option>))}
        </select>

        <label className="select-label" htmlFor="categorySelect"><i className="bi bi-tag"></i> Category</label>
        <select id="categorySelect" className="filter-dropdown" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>

        <label className="select-label" htmlFor="techSelect"><i className="bi bi-cpu"></i> Technology</label>
        <select id="techSelect" className="filter-dropdown" value={techFilter} onChange={(e) => setTechFilter(e.target.value)}>
          {technologies.map((t) => (<option key={t} value={t}>{t}</option>))}
        </select>

        {anyFilterActive && (
          <button className="clear-all" onClick={clearAll} type="button">
            <i className="bi bi-eraser-fill" aria-hidden="true"></i> Clear all
          </button>
        )}
      </div>

      {/* Certifications Grid */}
      <div className="certifications-list">
        {paginated.map((cert) => (
          <article
            className="cert-card"
            key={`${cert.issuer}-${cert.title}-${cert.year}`}
            onClick={() => setActiveCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveCert(cert)}
          >
            <header className="cert-header">
              <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  <span className="issuer-pill"><i className="bi bi-building"></i> {cert.issuer}</span>
                  <span className="dot-sep">•</span>
                  <span className="year-pill"><i className="bi bi-calendar3"></i> {cert.year}</span>
                  <span className="dot-sep">•</span>
                  <span className="category-pill"><i className="bi bi-tag"></i> {cert.category}</span>
                </p>
              </div>
            </header>

            <p className="cert-details">{cert.details}</p>

            <div className="tech-chips" onClick={(e) => e.stopPropagation()}>
              {cert.technologies.map((tech) => (
                <span key={tech} className="chip"><i className="bi bi-cpu"></i> {tech}</span>
              ))}
            </div>

            <a
              href={cert.link}
              onClick={(e) => { e.preventDefault(); setActiveCert(cert); }}
              className="cert-link"
              aria-label={`Open certificate: ${cert.title}`}
            >
              <i className="bi bi-box-arrow-up-right"></i> View Certificate
            </a>
          </article>
        ))}

        {paginated.length === 0 && (
          <div className="zero-state">
            <i className="bi bi-info-circle" aria-hidden="true"></i>
            <p>No certifications match the current filters.</p>
            <button className="clear-all" onClick={clearAll} type="button">
              <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i> Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)} role="dialog" aria-modal="true">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCert(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="modal-header">
              <img src={activeCert.logo} alt={activeCert.issuer} />
              <div>
                <h3>{activeCert.title}</h3>
                <p className="modal-meta">
                  <span><i className="bi bi-building"></i> {activeCert.issuer}</span>
                  <span className="dot">•</span>
                  <span><i className="bi bi-calendar3"></i> {activeCert.year}</span>
                  <span className="dot">•</span>
                  <span><i className="bi bi-tag"></i> {activeCert.category}</span>
                </p>
              </div>
            </div>
            <div className="modal-preview">
              <img src={activeCert.preview} alt={`${activeCert.title} preview`} />
            </div>
            <p className="modal-details">{activeCert.details}</p>
            <div className="modal-actions">
              <a href={activeCert.link} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                <i className="bi bi-box-arrow-up-right"></i> Open original
              </a>
              <button className="modal-btn" onClick={() => setActiveCert(null)}>
                <i className="bi bi-check2"></i> Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
