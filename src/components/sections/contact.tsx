"use client";
import React, { useState } from "react";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  {
    icon: <SiGithub size={28} />,
    label: "GitHub",
    href: config.social.github,
    description: "Check out my full source code",
    color: "#d8b9ff",
  },
  {
    icon: <SiLinkedin size={28} />,
    label: "LinkedIn",
    href: config.social.linkedin,
    description: "Let's connect professionally",
    color: "#9ecaff",
  },
  {
    icon: <HiOutlineMail size={30} />,
    label: "Email",
    href: `mailto:${config.email}`,
    description: "Drop me a message directly",
    color: "#d4bbff",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeader
          id="contact"
          title="Get In Touch"
          desc="Interested in working together? Drop me a message below."
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 transform-gpu will-change-transform shadow-lg shadow-black/20">
              <h3 className="text-2xl font-semibold text-[#ebdeee] mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#cac3d8]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low/50 border border-[#494455]/40 rounded-lg px-4 py-3 text-[#ebdeee] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#cac3d8]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low/50 border border-[#494455]/40 rounded-lg px-4 py-3 text-[#ebdeee] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#cac3d8]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low/50 border border-[#494455]/40 rounded-lg px-4 py-3 text-[#ebdeee] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-all duration-300 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient w-full py-4 rounded-lg mt-2 font-medium text-lg flex justify-center items-center gap-2 transform-gpu disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Socials/Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col h-full justify-center"
          >
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something awesome.</h3>
              <p className="text-[#cac3d8] leading-relaxed">
                I'm currently looking for new opportunities. My inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {socialLinks.map((social) => (
                <motion.div key={social.label} variants={itemVariants}>
                  <Link
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    className="block group"
                  >
                    <div className="glass-card rounded-xl p-5 flex items-center gap-5 border border-[#494455]/15 group-hover:border-[#494455]/40 group-hover:bg-surface-container-high/60 transition-all duration-300 transform-gpu will-change-transform group-hover:translate-x-2">
                      <div
                        className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: `${social.color}15`, color: social.color }}
                      >
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#ebdeee] group-hover:text-white transition-colors">
                          {social.label}
                        </h4>
                        <p className="text-sm text-[#948ea1] mt-0.5">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
