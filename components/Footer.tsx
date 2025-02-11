"use client";
import { useTheme } from "./ThemeContext";
import Link from "next/link";

function Footer() {
  const { darkMode } = useTheme();

  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Feature", path: "#feature" },
    { title: "Explore More", path: "#calltoaction" },
  ];

  return (
    <footer className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-8`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1 md:justify-self-end">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">
            Email:{" "}
            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              info@ethereal.com
            </span>
          </p>
          <p>Follow us on:</p>
          <div className="mt-2 flex space-x-4">
            {[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "Github", url: "https://github.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-1 md:justify-self-end">
          <h3 className="text-xl font-semibold mb-4">Navigation Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${
                    darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                  } transition`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mt-7">
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
          © 2025 <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Ethereal</span>. All rights reserved.
        </p>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm mt-2`}>
          Designed with care for our users.
        </p>
      </div>
    </footer>
  );
}

export default Footer;