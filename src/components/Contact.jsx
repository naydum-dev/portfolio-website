import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = ({ contact }) => {
  const contactLinks = [
    {
      name: "Email",
      url: `mailto:${contact.email}`,
      icon: <HiMail />,
      display: contact.email,
    },
    {
      name: "GitHub",
      url: contact.github,
      icon: <FaGithub />,
      display: "GitHub Profile",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0a0a] py-20 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 mb-12"
        >
          Feel free to reach out to me through any of these platforms!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#171717] border border-[#262626] rounded-lg text-gray-300 hover:border-purple-500 hover:text-purple-500 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium">{link.display}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
