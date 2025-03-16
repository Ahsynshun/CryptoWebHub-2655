import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCubes, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-dark to-dark-darker text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Welcome to the Future of
            <span className="text-primary"> Cryptocurrency</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the next evolution in blockchain technology with Prancierian's 
            innovative ecosystem and AI-powered mining solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={<FaChartLine />}
              title="Smart Trading"
              description="Advanced algorithms and AI-powered trading suggestions"
            />
            <FeatureCard 
              icon={<FaCubes />}
              title="Blockchain Integration"
              description="Seamless merging with major blockchain networks"
            />
            <FeatureCard 
              icon={<FaShieldAlt />}
              title="Secure Wallets"
              description="Military-grade encryption for your digital assets"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-dark-light p-6 rounded-xl"
  >
    <div className="text-primary text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Hero;