
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="font-poppins font-bold text-lg">OOP Solutions</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading Dubai-based software house specializing in cutting-edge technology solutions, 
              AI applications, and comprehensive software development services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@oopsolutions.com" className="hover:text-primary transition-colors">
                  info@oopsolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+971 XX XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-gray-300 hover:text-primary transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/pos-systems" className="text-gray-300 hover:text-primary transition-colors">
                  POS & Inventory Systems
                </Link>
              </li>
              <li>
                <Link to="/services/ai-applications" className="text-gray-300 hover:text-primary transition-colors">
                  AI Applications
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-gray-300 hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-services" className="text-gray-300 hover:text-primary transition-colors">
                  AI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on technology trends and our services.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full px-3 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 OOP Solutions. All rights reserved. | Proudly serving Dubai and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
