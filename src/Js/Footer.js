import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function SocialSidebar() {
  const links = [
    {
      id: 1,
      href: "mailto:dineshpandian008@gmail.com",
      label: "Email",
      icon: <MdEmail size={20} />,
      color: "bg-red-500",
    },
    {
      id: 2,
      href: "https://www.instagram.com/d.i.n_x_e.s.h/",
      label: "Instagram",
      icon: <FaInstagram size={20} />,
      color: "bg-pink-500",
    },
    {
      id: 3,
      href: "https://github.com/dinesh4343",
      label: "GitHub",
      icon: <FaGithub size={20} />,
      color: "bg-gray-700",
    },
    {
      id: 4,
      href: "https://www.linkedin.com/in/dinesh-pandian43/",
      label: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      color: "bg-blue-600",
    },
  ];

  return (
    <aside className="social-sidebar">
      <ul>
        {links.map(({ id, href, label, icon }) => (
          <li key={id} className="social-item">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label={label}
            >
              {icon}
              <span className="social-text">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
