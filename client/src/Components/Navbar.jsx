import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiMenu2Line } from 'react-icons/ri';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'Solutions', link: '/services' },
    { name: 'Company', link: '/company' },
    { name: 'Insights', link: '/insights' },
    { name: 'Careers', link: '/' },
  ];

  return (
    <nav className="w-full h-[10%] md:h-[auto] md:px-16 fixed top-0 left-0 bg-transparent z-50">
      <div className=''>
        <div className="flex items-center justify-between md:py-2 px-4 md:px-12">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 m-10">
            <a href="/" className="cursor-pointer">
              MY LOGO
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-brand-red transition-colors hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div
            onClick={() => setOpen(!open)}
            className="block md:hidden text-2xl cursor-pointer rounded-full text-white bg-red-400 p-2.5"
          >
            {open ? <IoClose /> : <RiMenu2Line />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden bg-white w-full text-left px-5 transition-all duration-300 ${
            open ? 'block' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="py-3 text-lg border-b">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
