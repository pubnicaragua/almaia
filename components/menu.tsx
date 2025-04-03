import { FC } from "react";


interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideMenu: FC<SlideMenuProps> = ({ isOpen, onClose }) => {

  const menuOptions = [
    "Inicio",
    "Productos",
    "Servicios",
    "Contacto",
    "Blog"
  ];

  return (
    <div className="relative">
      {/* Fondo oscuro semitransparente (solo cuando el menú está abierto) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Menú deslizante */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
            Menú
          </h2>

          <nav className="flex-1">
            <ul className="space-y-3">
              {menuOptions.map((option, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t">
            <button className="text-gray-500 hover:text-gray-700">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};