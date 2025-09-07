import React from 'react';


const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TargetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const AboutSection = () => {
  return (
    <div className="about-section" id='about'>
      <div className="about-container">
        
        <div className="about-heading">
           <h1>About</h1>
           <div className="heading-underline"></div>
        </div>

        <div className="about-grid">
          
          <div className="image-column">
            <div className="image-wrapper">
                <img 
                    className="profile-image" 
                    src="/Png/img1.png" 
                    alt="A professional headshot of the portfolio owner"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/2d3748/edf2f7?text=Avatar'; }}
                />
                <div className="pulsing-border"></div>
            </div>
          </div>

          <div className="text-column">
            <p className="about-text">
              My professional journey is guided by a core principle: <strong>continuous improvement</strong>. With a solid background in programming and web development, I have developed a practical skill set for building robust and efficient digital solutions. My experience has provided me with a strong understanding of the full development lifecycle, from initial concept to final deployment. I pride myself on writing clean, maintainable code and collaborating effectively to turn complex requirements into functional, user-friendly applications.
            </p>
            
            <div className="points-container">
                <div className="point-item">
                  <div className="point-icon-wrapper">
                      <BriefcaseIcon />
                  </div>
                  <div className="point-text">
                    <h3>Driven by Growth</h3>
                    <p>
                      The technology landscape is in a constant state of flux, and my motivation is directly tied to my ability to adapt and evolve with it.
                    </p>
                  </div>
                </div>
                
                <div className="point-item">
                  <div className="point-icon-wrapper">
                      <TargetIcon />
                  </div>
                  <div className="point-text">
                    <h3>Seeking Impact</h3>
                    <p>
                      My objective is not simply to fill a position, but to become a valuable asset who makes a measurable impact.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
