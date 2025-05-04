import React from 'react';
import { Link } from 'react-router';
export const Header = () => {
  return (
    <header className="flex flex-row bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-row space-x-6 text-gray-600 font-medium">
          <li className="hover:text-blue-600 transition duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header

