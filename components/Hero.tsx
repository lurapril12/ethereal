"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

const GRADIENT_COLORS = ["#13FFAA", "#1E67C6", "#CEB84C", "#DD35C6"];

export const Hero = () => {
  const color = useMotionValue(GRADIENT_COLORS[0]);
  const { darkMode } = useTheme();

  useEffect(() => {
    animate(color, GRADIENT_COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${darkMode ? '#000' : '#fff'} 50%, ${color})`;

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('feature');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* Background Circle Effect */}
      <div className="bg-circle-container">
        <div className="bg-circle-background" />
        <div className="bg-circle" />
      </div>

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Discover the Future of Decentralized Art & Finance
        </h1>
        {/* About */}
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl`}>
          Experience the power of seamless digital asset management, secure transactions,
          and innovative financial solutions in the decentralized ecosystem.
        </p>
        {/* CTA Button */}
        <button 
          onClick={scrollToFeatures}
          className="glass hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold rounded-full"
        >
          Get Started Now
        </button>
      </div>

      {/* Responsive Design - Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem;
          }
        }
      `}</style>
    </motion.section>
  );
};