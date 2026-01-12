import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            <Link href="/" className="hover:text-white/80 transition-colors duration-200">VVC</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors duration-200">Home</Link>
            <Link href="/over-ons" className="text-white/80 hover:text-white transition-colors duration-200">Over Ons</Link>
            <Link href="/hoe-werkt-het" className="text-white/80 hover:text-white transition-colors duration-200">Hoe werkt het?</Link>
            <Link href="/vacatures" className="text-white/80 hover:text-white transition-colors duration-200">Vacatures</Link>
            <Link href="/vrienden-worden" className="text-white/80 hover:text-white transition-colors duration-200">Vrienden worden?</Link>
            <a href="https://verdienendevriendenclub.vercel.app/" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-200">
              Inloggen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3">
            <Link
              href="/"
              className="block text-white/80 hover:text-white py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="block text-white/80 hover:text-white py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Over Ons
            </Link>
            <Link
              href="/hoe-werkt-het"
              className="block text-white/80 hover:text-white py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Hoe werkt het?
            </Link>
            <Link
              href="/vacatures"
              className="block text-white/80 hover:text-white py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Vacatures
            </Link>
            <Link
              href="/vrienden-worden"
              className="block text-white/80 hover:text-white py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Vrienden worden?
            </Link>
            <a
              href="https://verdienendevriendenclub.vercel.app/"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-200 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Inloggen
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
