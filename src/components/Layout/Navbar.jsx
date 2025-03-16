import React from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaCube, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-dark-darker text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-primary"
          >
            Prancierian
          </motion.div>
        </Link>
        
        <div className="flex space-x-6">
          <NavLink to="/wallet" icon={<FaWallet />} text="Wallet" />
          <NavLink to="/mining" icon={<FaCube />} text="Mining" />
          <NavLink to="/assistant" icon={<FaRobot />} text="AlteredDimension" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link 
    to={to}
    className="flex items-center space-x-2 hover:text-primary transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;