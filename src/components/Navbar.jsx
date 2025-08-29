import { NavLink } from 'react-router-dom'
import logo from '../assets/solace logo.svg'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);
const [closing, setClosing] = useState(false);

const handleClose = () => {
  setClosing(true); // trigger slideUp
  setTimeout(() => {
    setMenuOpen(false); // finally unmount
    setClosing(false);  // reset
  }, 400); // match animation duration
};

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
  ];

  return (
     <nav className="bg-[#E0EFFF] h-[100px] flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center w-full px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Solace Logo" className="h-auto w-auto max-h-[60px]" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-12 text-lg font-normal">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-green transition ${
                    isActive ? "text-green font-semibold" : "text-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-faintgray text-dark px-6 py-3 rounded-lg cursor-pointer hover:bg-green transition">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
  <div
    className={`fixed inset-0 bg-[#E0EFFF] z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-medium ${
      closing ? "animate-slideUp" : "animate-slideDown"
    }`}
  >
    {/* Close Button */}
    <button
      className="absolute top-6 right-6 text-dark cursor-pointer"
      onClick={handleClose}
    >
      <X size={36} />
    </button>

    {/* Mobile Links */}
    {navLinks.map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        onClick={handleClose}
        className={({ isActive }) =>
          `hover:text-blue-600 transition ${
            isActive ? "text-blue-700 font-bold underline" : "text-dark"
          }`
        }
      >
        {link.name}
      </NavLink>
    ))}

    {/* Mobile Button */}
    <button className="bg-faintgray text-dark px-6 py-3 rounded-lg">
      Get a Quote
    </button>
  </div>
)}

    </nav>
  )
}

export default Navbar