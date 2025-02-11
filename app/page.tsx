"use client";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeContext';
import Calltoaction from '@/components/Calltoaction';

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <>
      <Navbar />
      <button 
        onClick={toggleTheme} 
        className="absolute top-5 right-5 p-2 glass hover:opacity-80 transition-opacity duration-300"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <Hero />
      <Features />
      <Calltoaction />    
      <Footer />
    </>
  );
}