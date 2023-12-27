// Sidebar.js
import { useState } from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaSearch,
  FaWallet,
  FaChartLine,
  FaBullhorn,
  FaCalendarAlt,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* Ícone de Menu Hamburger e Fechar */}
      <div className="md:hidden  items-center z-20">
        <button onClick={toggleSidebar} className="p-2">
          {isSidebarOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`h-screen fixed inset-y-0 left-0 z-10 w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
        aria-label="Sidebar"
      >
        {/* Sidebar Header */}
        <div className="flex justify-center items-center p-4">
          <img src={logo} alt="Logo da Empresa" className="h-20 w-20" />
        </div>

        <div className="overflow-y-auto h-full py-2 px-3">
          <ul className="space-y-2">
            {/* Painel */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-blue hover:text-white"
              >
                <FaChalkboardTeacher className="text-innovarte-blue mr-2" />
                <span>Painel</span>
              </a>
            </li>
            {/* Professores */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-green hover:text-white"
              >
                <FaUsers className="text-innovarte-green mr-2" />
                <span>Professores</span>
              </a>
            </li>
            {/* Clientes */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-yellow hover:text-white"
              >
                <FaUsers className="text-innovarte-yellow mr-2" />
                <span>Clientes</span>
              </a>
            </li>
            {/* Pesquisar */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-red hover:text-white"
              >
                <FaSearch className="text-innovarte-red mr-2" />
                <span>Pesquisar</span>
              </a>
            </li>
            {/* Financeiro */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-blue hover:text-white"
              >
                <FaWallet className="text-innovarte-blue mr-2" />
                <span>Financeiro</span>
              </a>
            </li>
            {/* Estatísticas */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-green hover:text-white"
              >
                <FaChartLine className="text-innovarte-green mr-2" />
                <span>Estatísticas</span>
              </a>
            </li>
            {/* Marketing */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-yellow hover:text-white"
              >
                <FaBullhorn className="text-innovarte-yellow mr-2" />
                <span>Marketing</span>
              </a>
            </li>
            {/* Agenda */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-red hover:text-white"
              >
                <FaCalendarAlt className="text-innovarte-red mr-2" />
                <span>Agenda</span>
              </a>
            </li>
            {/* Configurações */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-gray-900 hover:bg-innovarte-blue hover:text-white"
              >
                <FaCog className="text-innovarte-blue mr-2" />
                <span>Configurações</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
