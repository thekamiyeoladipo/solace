import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Send } from "lucide-react";
import logo from "../assets/solace logo.svg";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 hidden">
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo, Address, Socials */}
        <div>
          <img src={logo} alt="Solace Logo" className="h-10 w-auto mb-4" />
          <p className="text-sm font-semibold mb-4">
            36927 Towne View Lake <br /> Daishaton, KS 60725
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-gray-200 rounded"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><Youtube size={18} /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><Send size={18} /></a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Services</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Services</Link></li>
          </ul>

          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:underline">E-commerce</Link></li>
            <li><Link to="#" className="hover:underline">Real Estate</Link></li>
            <li><Link to="#" className="hover:underline">Technology</Link></li>
            <li><Link to="#" className="hover:underline">Corporate</Link></li>
            <li><Link to="#" className="hover:underline">Education</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="font-bold mb-4">Subscribe</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4">
        <p className="text-center text-white text-sm">
          Copyright © {new Date().getFullYear()}.All rights reserved.
        </p>
      </div>
    </footer>
  );
}
