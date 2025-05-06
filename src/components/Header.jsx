import React from 'react';
import { FaLock } from "react-icons/fa";

import { Link } from 'react-router';
export const Header = () => {

  const token = localStorage.getItem("token");
  return (
    <header className="flex flex-row bg-gradient-to-tl from-blue-600 via-indigo-600 to-purple-700 sticky  p-5  w-full  top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-row space-x-6 text-white font-medium">
          <li className="hover:text-gray-600 transition duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          {!token &&
            <li><Link to={"/login"}><FaLock className="text-white mr-2" />
            </Link></li>}

        </ul>
      </nav>
    </header>
  );
};
export default Header

