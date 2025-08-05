import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId)
    setOpen(false)
  }

  const Menuitem = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Our Services" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Our Team" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900 shadow-md" : "bg-gray-700"}`}>
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Patil Construction</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-10 text-white">
          {Menuitem.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition ${
                activeSection === item.id ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className='hidden md:flex space-x-3'>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-300'>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank"  rel="noopener noreferrer" className='text-gray-300'>
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {open ? (
            <FaTimes size={24} className="text-white cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <FaBars size={24} className="text-white cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-white items-center">
            {Menuitem.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${
                  activeSection === item.id ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Social Icons (Mobile) */}
          <div className='flex mt-4 space-x-4 justify-center'>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-300'>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-300'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
