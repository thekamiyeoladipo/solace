import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/solace logo.svg' // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-[#E0EFFF] h-[100px] flex items-center sticky top-0 z-50 border-b border-dark">
      <div className="container mx-auto flex justify-between items-center w-full px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Solace Logo" className="h-auto w-auto" />
        </div>

        {/* Links */}
        <ul className="flex space-x-12 text-lg font-normal">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        {/* Button */}
        <div>
          <button className="bg-faintgray text-dark px-6 py-3 rounded-lg">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar