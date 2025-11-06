import { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/logo_tijutech.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (isMenuOpen) {
        const isClickInsideMenu = menuRef.current?.contains(event.target);
        const isClickOnButton = buttonRef.current?.contains(event.target);
        if (!isClickInsideMenu && !isClickOnButton) {
          setIsMenuOpen(false);
        }
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  return (
    <header
      id="home"
      className="sticky top-0 backdrop-blur-md shadow-md flex items-center h-16 p-6 mx-8 rounded-lg gap-8 z-50 overflow-visible justify-between md:p-8"
    >
      <img src={logo} alt="Logo TijuTech" className="h-10 w-auto" />
      <div className="gap-2 text-gray-200 font-semibold text-lg flex">
        <nav className="hidden md:flex gap-8">
          <a
            href="#home"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Início
          </a>
          <a
            href="#products"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Produtos
          </a>
          <a
            href="#choose-us"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Sobre Nós
          </a>
          <a
            href="#contact"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Contato
          </a>
        </nav>

        <button
          ref={buttonRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-x-48 right-1.5 top-16 z-50"
          >
            <nav className="bg-black/40 backdrop-blur-md shadow-lg rounded-lg rounded-t-none p-4 flex flex-col gap-3 text-white font-semibold">
              <a
                href="#home"
                className="hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#products"
                className="hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#choose-us"
                className="hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#contact"
                className="hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
