import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);

      // Auto-hide popup after 3s
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving message:", error);
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-box"
      >
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="success-popup"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="success-icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <p>Message Sent Successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
