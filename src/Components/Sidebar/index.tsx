// Sidebar.js
import {
  FaChalkboardTeacher,
  FaUsers,
  FaSearch,
  FaWallet,
  FaChartLine,
  FaBullhorn,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md" aria-label="Sidebar">
      <div className="overflow-y-auto h-full py-4 px-3">
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
  );
}

export default Sidebar;
