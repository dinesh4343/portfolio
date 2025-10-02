import React, { useState, useEffect, useRef } from 'react';
import { FaHome } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

// It's good practice to define roles and other constants outside the component
// if they don't depend on props or state.
const ROLES = ["Full Stack Developer", "UI/UX Enthusiast", "Creative Coder", "Problem Solver", "Certified PEGA Senior System Architect"];

// This is our main App component.
// In a real application, you might name this HeroSection and import it into App.js.
export default function App() {
    // State to hold the text that will be displayed with the typing effect
    const [typedRole, setTypedRole] = useState('');

    // Refs to manage the typing animation logic without causing re-renders
    const roleIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);

       const [buttonState, setButtonState] = useState('idle');


 const handleClick = () => {
    // 1. Don't do anything if a process is already running
    if (buttonState !== 'idle') return;

    // 2. Set the state to 'loading' to start the animation
    setButtonState('loading');

    // 3. Create a link and click it to start the actual download
    const link = document.createElement('a');
    link.href = '/Resume/resume.pdf'; // Make sure your PDF is in the /public folder
    link.download = 'Dinesh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 4. Set state to 'success' almost immediately
    //    The short delay gives the UI time to show the loading animation gracefully.
    setTimeout(() => {
      setButtonState('success');

      // 5. Reset the button back to idle after showing the success message
      setTimeout(() => {
        setButtonState('idle');
      }, 2000); // Show success for 2 seconds
    }, 400); // A short delay for a smooth animation transition
  };

    useEffect(() => {
        // A reference to the timeout to clear it on component unmount
        let timeoutId;

        const type = () => {
            const currentRole = ROLES[roleIndex.current];
            // Adjust speed of typing and deleting
            let typeSpeed = isDeleting.current ? 60 : 120;

            // Logic for deleting text
            if (isDeleting.current) {
                setTypedRole(currentRole.substring(0, charIndex.current - 1));
                charIndex.current--;
            }
            // Logic for typing text
            else {
                setTypedRole(currentRole.substring(0, charIndex.current + 1));
                charIndex.current++;
            }

            // --- State Transitions for the Typing Animation ---

            // 1. If the word is fully typed, pause, then start deleting.
            if (!isDeleting.current && charIndex.current === currentRole.length) {
                typeSpeed = 2000; // Pause at the end of the word
                isDeleting.current = true;
            }
            // 2. If the word is fully deleted, move to the next word and pause before typing.
            else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false;
                roleIndex.current = (roleIndex.current + 1) % ROLES.length;
                typeSpeed = 500; // Pause before typing the next word
            }

            timeoutId = setTimeout(type, typeSpeed);
        };

        // Start the typing animation
        if (ROLES.length > 0) {
            timeoutId = setTimeout(type, 1000); // Initial delay before starting
        }

        // Cleanup function: runs when the component unmounts to prevent memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>



            <div className="hero-section">
                <div className="container">
                    <div className="content-wrapper">

                        {/* Left Side: Text Content */}
                        <div className="text-content">
                            <h1>Welcome to My Portfolio</h1>
                            <p className="subtitle">
                                I am <span>Dinesh Pandian M</span>
                            </p>
                            <p className="role-text">
                                A <span className="typed-role">{typedRole}</span><span className="typing-cursor"></span>
                            </p>
                            <br />

                            <p className='text-contnt'> <MdSchool /> Graduate on 2025</p>
                            <p className='text-contnt'> <FaBookOpen /> B Tech (Bachelor of Technology)</p>
                            <p className='text-contnt'><span></span><FaHome /> Chennai</p>
                                <button
      className={`download-button ${buttonState}`}
      onClick={handleClick}
    >
      {/* Idle State Content */}

      <span className="button-content idle-content">
        <span className="button-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V15M12 15L16 11M12 15L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="button-text">Download CV</span>
      </span>
      
      {/* Loading/Success State Content */}
      <span className="button-content loading-content">
        <span className="button-loader"></span> {/* Changed class name here */}
      </span>
      
    </button>
                        </div>

                        {/* Right Side: Image with Custom Blob Shape */}
                        <div className="image-container">
                            <div className="blob-card">
                                <div className="blob-wrapper">
                                    <img
                                        src="/Png/img1.png"
                                        alt="A placeholder portrait"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://placehold.co/400x400/1f2937/ffffff?text=Not+Found';
                                        }}
                                        className="cover-image"
                                    />
                                </div>
                          
                                <img src="/Png/img.png" alt="Character" className="character" />
                              
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};
