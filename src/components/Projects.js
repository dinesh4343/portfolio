import React, { useState, useEffect, useRef } from 'react'; // 1. Import useRef
import '../Styles/Project.css';
import projectsData from './ProjectsData';

// --- (Your ICONS and ProjectModal components remain the same) ---
const LinkIcon = () => <svg xmlns="http://www.w.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

const ProjectModal = ({ project, onClose }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [animationState, setAnimationState] = useState('entering');

    const handleClose = () => {
        setAnimationState('exiting');
        setTimeout(onClose, 200);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="modal-root">
            <div className={`modal-overlay ${animationState}`} onClick={handleClose}></div>
            <div className={`modal-container ${animationState}`}>
                <button className="modal-close-btn" onClick={handleClose}>&times;</button>
                <div className="modal-slider-container">
                    <div className="modal-main-image">
                        {project.images.map((img, index) => (
                            <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} style={{ opacity: index === activeImageIndex ? 1 : 0 }} />
                        ))}
                    </div>
                    <div className="modal-thumbnails">
                        {project.images.map((img, index) => (
                            <div key={index} className={`modal-thumbnail ${index === activeImageIndex ? 'active' : ''}`} onClick={() => setActiveImageIndex(index)}>
                                <img src={img} alt={`thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal-details">
                    <h2>{project.title}</h2>
                    <p>{project.type}</p>
                    <div className="modal-links">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><LinkIcon /> Live Demo</a>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><GitHubIcon /> GitHub Repo</a>
                    </div>
                    <h3>Project Overview</h3>
                    <p>{project.overview}</p>
                    <h3>Key Features</h3>
                    <ul>
                        {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                    <h3>Technical Deep Dive</h3>
                    <p>{project.technical}</p>
                </div>
            </div>
        </div>
    );
};


const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalProject, setModalProject] = useState(null);
    const [imageStatus, setImageStatus] = useState('active');
    
    // 2. Create a ref to attach to the featured project container
    const featuredProjectRef = useRef(null);

    const handleProjectSelect = (index) => {
        if (index === activeIndex) return;

        setImageStatus('exiting');
        setTimeout(() => {
            setActiveIndex(index);
            setImageStatus('entering');
            setTimeout(() => setImageStatus('active'), 0);
            
            // 3. NEW: Auto-scroll logic
            // If the screen is mobile-sized (less than 768px), scroll to the content
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    featuredProjectRef.current?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100); // A small delay to ensure the element is ready
            }

        }, 400);
    };

    const activeProject = projectsData[activeIndex];

    return (
        <>
            {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
            <section className="spotlight-projects-section">
                <div className="spotlight-container">
                    {/* 4. Attach the ref to the featured project div */}
                    <div className="featured-project" ref={featuredProjectRef}> 
                        <div className="featured-image-container">
                            {projectsData.map((p, index) => (
                                <img
                                    key={p.title}
                                    src={p.images[0]}
                                    alt={`${p.title} Snapshot`}
                                    className={`
                                        featured-image 
                                        ${index === activeIndex && imageStatus === 'entering' && 'entering'}
                                        ${index === activeIndex && imageStatus === 'active' && 'active'}
                                        ${index !== activeIndex && 'exiting'}
                                    `}
                                />
                            ))}
                        </div>
                        <div className="featured-content" key={activeIndex}>
                            <div className="text-reveal-container"><h2 className="project-title">{activeProject.title}</h2></div>
                            <div className="text-reveal-container"><p className="project-description">{activeProject.shortDescription}</p></div>
                            <div className="text-reveal-container"><div className="tech-stack">{activeProject.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div></div>
                            <div className="text-reveal-container">
                                <div className="featured-links">
                                    <button onClick={() => setModalProject(activeProject)} className="btn btn-primary">View Details</button>
                                    <a href={activeProject.repo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" ><GitHubIcon /> GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-list-container">
                        <div className="about-heading">
                            <h1 id="services-heading">Projects</h1>
                            <div className="heading-underline" />
                        </div>
                        <div className="project-list">
                            <div className="active-project-indicator" style={{ transform: `translateY(${activeIndex * 96}px)` }} />
                            {projectsData.map((project, index) => (
                                <div key={project.title} className={`project-preview-card ${index === activeIndex ? 'active' : ''}`} onClick={() => handleProjectSelect(index)}>
                                    <h3>{project.title}</h3>
                                    <p>{project.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;