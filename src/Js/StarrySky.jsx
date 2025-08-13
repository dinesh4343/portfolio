import React, { useRef, useEffect } from 'react';


const StarrySky = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        // Set canvas dimensions to fill its container
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        // The Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5; // Particle size
                this.speedX = (Math.random() * 0.5 - 0.25); // Horizontal speed
                this.speedY = (Math.random() * 0.5 - 0.25); // Vertical speed
                this.color = 'rgba(255, 255, 255, 0.8)';
            }

            // Update particle position
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reset particle if it goes off-screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            // Draw the particle on the canvas
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const particle of particles) {
                particle.update();
                particle.draw();
            }
            requestAnimationFrame(animate);
        };
        
        // Set initial size and start animation
        resizeCanvas();
        init();
        animate();

        // Handle window resizing
        const handleResize = () => {
            resizeCanvas();
            init(); // Re-initialize particles for new size
        };
        
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []); // Empty dependency array ensures this runs only once on mount

    return <canvas ref={canvasRef} className="starry-sky-canvas"></canvas>;
};

export default StarrySky;
