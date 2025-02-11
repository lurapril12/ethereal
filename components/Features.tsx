"use client";
import { motion } from "framer-motion";
import { RiSecurePaymentLine, RiExchangeFundsFill, RiArtboardLine } from "react-icons/ri";
import { useTheme } from "./ThemeContext";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const { darkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-xl"
    >
      <div className={`text-4xl mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <RiSecurePaymentLine />,
      title: "Secure Transactions",
      description: "Advanced encryption and blockchain technology ensuring your assets are protected at all times.",
      delay: 0.2
    },
    {
      icon: <RiExchangeFundsFill />,
      title: "Smart Trading",
      description: "Automated trading strategies with real-time market analysis and portfolio optimization.",
      delay: 0.4
    },
    {
      icon: <RiArtboardLine />,
      title: "NFT Gallery",
      description: "Showcase and trade unique digital art pieces in our curated NFT marketplace.",
      delay: 0.6
    }
  ];

  return (
    <section id="feature" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background Circle Effect */}
      <div className="bg-circle-container">
        <div className="bg-circle-background" />
        <div className="bg-circle" />
      </div>

      {/* Section Content */}
      <div className="z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 navbar-text">
            Powerful Features
          </h2>
          <p className="navbar-text opacity-80 max-w-2xl mx-auto">
            Experience the next generation of decentralized finance with our cutting-edge features
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;