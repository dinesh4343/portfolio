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
