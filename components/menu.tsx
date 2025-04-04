import { FC, RefObject } from "react";

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  footOfPageRef: RefObject<HTMLFormElement> | null;
  homeOfPageRef: RefObject<HTMLFormElement> | null;
  scrollToContact: () => void;
}

export const SlideMenu: FC<SlideMenuProps> = ({ isOpen, onClose, footOfPageRef, homeOfPageRef ,scrollToContact}) => {
  const scrollToFoot = () => {
    footOfPageRef?.current?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };
  const scrollToHome = () => {
    homeOfPageRef?.current?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  const scrollToContactv1 = () => {
    scrollToContact();
    onClose();
  };

  const menuOptions = [
    { option: "Inicio", func: scrollToHome },
    { option: "Productos", func: onClose },
    { option: "Servicios", func: onClose },
    { option: "Contacto", func: scrollToContactv1 },
    { option: "Redes", func: scrollToFoot }
  ];

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
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
              {menuOptions.map((date, index) => (
                <li key={index}>
                  <button
                    onClick={date.func}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    {date.option}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};