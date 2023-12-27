// TopBar.js
import { useState } from "react";
import {
  IoMdNotificationsOutline,
  IoMdPerson,
  IoMdAdd,
  IoIosArrowDown,
} from "react-icons/io";

function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Search and Add */}
      <div className="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Pesquisar"
          className="border p-2 rounded w-full"
        />
        <button className="bg-innovarte-blue text-white p-2 rounded">
          <IoMdAdd className="h-5 w-5" />
        </button>
      </div>

      {/* User Info and Notifications */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="p-2 rounded-full hover:bg-gray-200">
          <IoMdNotificationsOutline className="h-6 w-6 text-gray-600" />
        </button>

        {/* User Profile and Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center p-2 rounded-full hover:bg-gray-200"
          >
            <IoMdPerson className="h-6 w-6 text-gray-600 mr-2" />
            <span className="hidden sm:block text-gray-600 mr-1">Gestor</span>
            <IoIosArrowDown className="h-4 w-4 text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-xl z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Meu Perfil
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Configurações
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sair
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
