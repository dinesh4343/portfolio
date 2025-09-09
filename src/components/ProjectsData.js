// src/data/projectsData.js

const projectsData = [
    {
        "title": "Trantigram - Language Translation App",
        "type": "Frontend Translation Tool",
        "shortDescription": "A real-time language translation tool built with React. It allows users to instantly translate text between 100+ languages through a clean and responsive UI.",
        "tech": ["React", "CSS", "React Bootstrap", "Material Design Icons", "Google Translate API"],
        "images": [
            "/Projects/Trantigram/img0.png",
            "/Projects/Trantigram/img1.png",
            "/Projects/Trantigram/img3.png",
            "/Projects/Trantigram/img4.png"
        ],
        "demo": "https://dinesh4343.github.io/trantigram/",
        "repo": "https://github.com/dinesh4343/trantigram",
        "overview": "Trantigram is a dynamic, client-side application designed for instant language translation. Built with React, it provides a seamless user experience with features like a dark mode toggle and a fully responsive layout that works on desktops, tablets, and mobile devices. The interface is styled professionally using React Bootstrap and Material Design Icons for modern aesthetics and intuitive interaction.",
        "features": [
            "Instant text translation between over 100 languages.",
            "Dark mode toggle for improved readability and user comfort.",
            "Fully responsive design ensuring a great experience on any device.",
            "Clean and modular codebase with reusable React components for scalability.",
            "Styled with React Bootstrap for a sleek, professional look and feel."
        ],
        "technical": "This application is a single-page application built entirely with React. It utilizes React Hooks for state management and handling component logic. The translation functionality is powered by integrating the Google Translate API. The UI is constructed with React Bootstrap components and enhanced with custom CSS for responsiveness and the dark mode theme. The project is version-controlled with Git and hosted on GitHub.",
        "learnings": [
            "Gained proficiency in React fundamentals, including hooks, state, and props.",
            "Developed skills in building reusable components to create maintainable code.",
            "Mastered responsive web design using CSS to ensure cross-device compatibility.",
            "Successfully implemented a dark mode feature to enhance user experience.",
            "Practiced version control and repository management with Git and GitHub."
        ]
    },
    {
        "title": "TICKET_ZONE",
        "type": "Smart Bus Ticketing Application",
        "shortDescription": "A smart application for modernizing public transport with digital ticket reservations, seat allocation, real-time bus tracking, and cashless payments.",
        "tech": ["Mobile App Development", "Web Application", "Database Management", "Digital Payments", "GPS Tracking", "API Integration"],
        "images": [
            "/Projects/TicketZone/img1.png",
            "/Projects/TicketZone/img2.png",
            "/Projects/TicketZone/img3.png",
            "/Projects/TicketZone/img4.png"
        ],
        "demo": "dinesh4343.github.io/TICKET_ZONE/index.html",
        "repo": "dinesh4343.github.io/TICKET_ZONE",
        "overview": "Ticket Zone is a proposed smart application designed to revolutionize bus ticketing and commuting. It streamlines the entire process by allowing users to purchase tickets, reserve seats, and make cashless payments through a user-friendly mobile app and website. This initiative aims to reduce wait times, manage passenger capacity effectively, and eliminate paper tickets, aligning with modern smart city goals for a seamless and efficient travel experience.",
        "features": [
            "Easy ticket booking through a dedicated mobile app, website, and integrated messaging platforms like WhatsApp.",
            "Multiple secure digital payment options including wallets, net banking, and cards.",
            "Real-time bus tracking, schedule information, and seat availability updates.",
            "Electronic ticket delivery (in-app, email, SMS) and verification for paperless boarding.",
            "Offline ticket purchasing options via dedicated devices at bus stops.",
            "Integrated customer support and real-time notifications for itinerary changes."
        ],
        "technical": "The system architecture includes a user-facing mobile app and website for booking and tracking. A central server manages business logic, including a smart seat allocation algorithm, real-time data processing, and secure transaction handling. The platform integrates with payment gateways for cashless transactions and GPS systems for accurate bus tracking. The database is designed to handle multiple simultaneous user requests, storing passenger details, routes, and transaction histories securely.",
        "futureScope": [
            "Geographical expansion to serve new regions and transportation partners.",
            "Deeper integration with smart city infrastructure for optimized routing and efficiency.",
            "Advanced data analytics to provide insights for urban planning and service improvements.",
            "Strategic partnerships with financial institutions to offer seamless payment solutions.",
            "Continuous feature enhancements and algorithm improvements based on community feedback."
        ]
    },
    {
        "title": "TICKET_ZONE - Admin Panel",
        "type": "Web-Based Admin Dashboard",
        "shortDescription": "The administrative backend for the Ticket Zone application, providing tools to manage buses, routes, passengers, and view operational data at a glance.",
        "tech": ["HTML", "CSS", "JavaScript", "API Integration", "Data Visualization"],
        "images": [
            "/Projects/TicketZoneAdmin/img1.png",
            "/Projects/TicketZoneAdmin/img2.png",
            "/Projects/TicketZoneAdmin/img3.png"
        ],
        "demo": "https://dinesh4343.github.io/TICKET_ZONE_ADMIN/index.html",
        "repo": "https://github.com/dinesh4343/TICKET_ZONE_ADMIN",
        "overview": "This project is the central administrative dashboard for the TICKET_ZONE smart bus ticketing system. It provides administrators with a comprehensive interface to manage and monitor the core components of the service. The dashboard offers key metrics like total buses, routes, and passenger counts, enabling efficient operational control and data-driven decision-making.",
        "features": [
            "A central dashboard displaying key statistics: Total Buses, Total Routes, Total Passengers, and Today's Passengers.",
            "Bus Management module to add, view, and manage the fleet of buses.",
            "Route Management section for adding and viewing all available bus routes.",
            "Passenger Information panel to view details of registered users.",
            "Booking Management to view and track ticket reservations.",
            "Clean, intuitive, and responsive user interface with sidebar navigation."
        ],
        "technical": "The admin panel is a client-side web application built with HTML, CSS, and JavaScript. It is designed to interact with a backend server via APIs to fetch, display, and manage the application's data. The interface is structured for clarity, using cards to highlight important stats and tables to display detailed information, making it a powerful tool for system administrators."
    },
    {
        "title": "Oratis - React Concepts",
        "type": "Educational React Application",
        "shortDescription": "A modern React project built to demonstrate core web development concepts and best practices, from component architecture to state management.",
        "tech": ["React", "React Router", "Context API", "CSS Modules", "Node.js"],
        "images": [
            "/Projects/Oratis/img1.png",
            "/Projects/Oratis/img2.png"
        ],
        "demo": "https://dinesh4343.github.io/oratis/",
        "repo": "https://github.com/dinesh4343/oratis",
        "overview": "Oratis is an educational project designed as a practical guide to essential web development concepts within the React ecosystem. It serves as a reference for developers to understand and implement best practices, covering everything from the fundamentals of components and hooks to more advanced topics like client-side routing, global state management, and performance optimization.",
        "features": [
            "Demonstrates fundamental React principles: Components, Props, State, and Hooks.",
            "Implements client-side navigation and routing using React Router.",
            "Manages global application state efficiently with the built-in Context API.",
            "Shows best practices for fetching data from external RESTful APIs.",
            "Uses CSS Modules for scoped, component-level styling and responsive design.",
            "Includes examples of controlled forms with client-side validation.",
            "Features Error Boundaries for gracefully handling rendering errors."
        ],
        "technical": "This project is a single-page application built entirely with React. It leverages React Router for declarative routing and the Context API for state management, avoiding external libraries for a leaner footprint. Styling is handled via CSS Modules to ensure class names are locally scoped and maintainable. The entire development workflow is managed using Node.js and npm for dependency management and running build scripts."
    },
    {
        "title": "AGSAIMO - Sustainable Solutions",
        "type": "Static Website for a Sustainability Startup",
        "shortDescription": "A clean, professional website developed for AGSAIMO, a startup dedicated to converting solid waste into high-quality, eco-friendly manure and other sustainable products.",
        "tech": ["HTML", "CSS", "JavaScript"],
        "images": [
            "/Projects/Agsaimo/img1.png",
            "/Projects/Agsaimo/img2.png"
        ],
        "demo": "https://dinesh4343.github.io/AGSAIMO/",
        "repo": "https://github.com/dinesh4343/AGSAIMO",
        "overview": "This project establishes a professional online presence for AGSAIMO, a startup with a mission to promote environmental sustainability. The website clearly communicates the company's commitment to producing valuable, eco-friendly products from solid waste through research and innovation. It is designed to inform potential customers, partners, and the community about their vision, processes, and high-quality manure products.",
        "features": [
            "A clear and compelling 'About Us' section detailing the company's mission and vision.",
            "A dedicated showcase for their eco-friendly products derived from waste.",
            "An outline of their innovative and sustainable manufacturing process.",
            "A responsive, multi-page layout that is accessible on desktops, tablets, and mobile devices.",
            "An integrated contact form for inquiries and business development.",
            "Smooth navigation with a clean, professional user interface."
        ],
        "technical": "This is a static website built with foundational web technologies: HTML for structure, CSS for styling, and JavaScript for interactive elements. The site is designed to be lightweight, fast-loading, and easily maintainable. Its architecture focuses on providing a clear, direct, and informative user experience without the need for a complex backend, making it an ideal and cost-effective solution for a startup."
    }
];

export default projectsData;