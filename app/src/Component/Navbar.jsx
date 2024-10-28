import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUser, faBars, faWindowClose, faHeart, faBook } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center h-32 justify-between px-5 sm:px-7 bg-gradient-to-r from-orange-300 to-purple-300 shadow-lg ">

      <div className="text-2xl font-bold text-white flex items-center">
        <FontAwesomeIcon className="cursor-pointer text-black text-xl" icon={faBook} />
        <NavLink to="/" className="no-underline text-white ml-2">Bookore</NavLink>
      </div>

      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faWindowClose : faBars} className="text-black text-2xl" />
        </button>
      </div>

      <ul
        className={`flex-col sm:flex-row sm:flex ${
          isOpen ? "flex" : "hidden"
        } absolute sm:relative left-0  sm:w-auto sm:bg-transparent  sm:static text-center sm:gap-5 sm:items-center sm:pl-0 pl-6 transition-all duration-300 ease-in-out`}
      >
        <NavLink to="/home" onClick={() => setIsOpen(false)} className="no-underline">
          <li className="font-semibold py-3 sm:py-0 px-4 sm:px-2 text-gray-800 hover:bg-orange-400 hover:text-white transition duration-200">
            HOME
          </li>
        </NavLink>
        <NavLink to="/collection" onClick={() => setIsOpen(false)} className="no-underline">
          <li className="font-semibold py-3 sm:py-0 px-4 sm:px-2 text-gray-800 hover:bg-orange-400 hover:text-white transition duration-200">
            COLLECTIONS
          </li>
        </NavLink>
        <NavLink to="/aboutus" onClick={() => setIsOpen(false)} className="no-underline">
          <li className="font-semibold py-3 sm:py-0 px-4 sm:px-2 text-gray-800 hover:bg-orange-400 hover:text-white transition duration-200">
            ABOUT US
          </li>
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="no-underline">
          <li className="font-semibold py-3 sm:py-0 px-4 sm:px-2 text-gray-800 hover:bg-orange-400 hover:text-white transition duration-200">
            CONTACT US
          </li>
        </NavLink>
      </ul>

      <div className="flex items-center space-x-5 text-black">
   
        {/* <div className="relative hidden sm:block"> 
          <input
            className="w-40 h-10 px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-md focus:outline-none"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div> */}

        <FontAwesomeIcon className="cursor-pointer text-xl sm:mb-3 mt-1" icon={faShoppingCart} />
        <FontAwesomeIcon className="cursor-pointer text-xl sm:mb-3 mt-1" icon={faHeart} />
        <FontAwesomeIcon className="cursor-pointer text-xl sm:mb-3 mt-1" icon={faUser} />
      </div>
    </div>
  );
}

export default Navbar;

