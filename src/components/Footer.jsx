import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626] py-6">
      <p className="text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
