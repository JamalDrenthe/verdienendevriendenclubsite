import React from 'react';
import { Link } from 'wouter';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-cyber-gray border-b border-cyber-green/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-cyber-green font-bold text-xl relative">
          <span className="relative z-10">VVC</span>
          <div className="absolute -top-1 -left-1 w-full h-full bg-cyber-green/20 blur-sm z-0"></div>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="hover:text-cyber-green transition-colors">Over</a></li>
          <li><a href="#how-it-works" className="hover:text-cyber-green transition-colors">Hoe het werkt</a></li>
          <li><a href="#benefits" className="hover:text-cyber-green transition-colors">Voordelen</a></li>
        </ul>
        <a href="#cta" className="bg-gradient-to-r from-cyber-green to-cyber-blue px-4 py-2 rounded text-sm md:text-base font-bold hover:shadow-neon-green transition-all duration-300 hover:scale-105">
          Join Nu
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
