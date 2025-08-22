import React, { useRef, useEffect } from 'react';
 // Import the CSS for styling

const ParticleNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const options = {
            particleColor: 'rgba(255, 255, 255, 0.7)',
            lineColor: 'rgba(255, 255, 255, 0.1)',
            particleAmount: 50,
            defaultRadius: 1.5,
            variantRadius: 1.5,
            defaultSpeed: 0.3,
            variantSpeed: 0.5,
            linkRadius: 200,
        };

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
                this.directionAngle = Math.floor(Math.random() * 360);
                this.color = options.particleColor;
                this.radius = options.defaultRadius + Math.random() * options.variantRadius;
                this.vector = {
                    x: Math.cos(this.directionAngle) * this.speed,
                    y: Math.sin(this.directionAngle) * this.speed,
                };
            }

            update() {
                this.border();
                this.x += this.vector.x;
                this.y += this.vector.y;
            }

            border() {
                if (this.x >= canvas.width || this.x <= 0) {
                    this.vector.x *= -1;
                }
                if (this.y >= canvas.height || this.y <= 0) {
                    this.vector.y *= -1;
                }
                if (this.x > canvas.width) this.x = canvas.width;
                if (this.y > canvas.height) this.y = canvas.height;
                if (this.x < 0) this.x = 0;
                if (this.y < 0) this.y = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function linkParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const distance = Math.sqrt(
                        Math.pow(particles[i].x - particles[j].x, 2) +
                        Math.pow(particles[i].y - particles[j].y, 2)
                    );

                    if (distance < options.linkRadius) {
                        const opacity = 1 - distance / options.linkRadius;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const setup = () => {
            particles = [];
            for (let i = 0; i < options.particleAmount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            linkParticles();
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        setup();
        animate();

        const handleResize = () => {
            resizeCanvas();
            setup();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return <canvas ref={canvasRef} className="particle-network-canvas"></canvas>;
};

export default ParticleNetwork;

