import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6" />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TechForge
              </span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Customize your perfect electronic device with our advanced configuration system. 
              From smartphones to laptops, create technology that fits your exact needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products?category=smartphones" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=laptops" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=desktops" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Desktops
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=monitors" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Monitors
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=accessories" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/support/help" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/support/contact" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/support/shipping" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link 
                  to="/support/returns" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link 
                  to="/support/warranty" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 TechForge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/legal/privacy" 
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/legal/terms" 
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/legal/cookies" 
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}