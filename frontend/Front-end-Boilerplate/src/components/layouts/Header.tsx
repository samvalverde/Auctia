import { RiShoppingCart2Line, RiUser3Line, RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PATHS from '../../router/paths';
import logo1 from '../../assets/icons/logo1.jpg';
import logo2 from '../../assets/icons/logo2.jpg';

const HeaderMenu = [
  { id: 1, path: PATHS.home, title: 'Home' },
  { id: 2, path: PATHS.dist.load_inventory, title: 'Load Inventory' },
  { id: 3, path: PATHS.dist.search_product, title: 'Search Product' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartDropdown = () => {
    setCartDropdownOpen(!isCartDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo y Título */}
        <div className="flex items-center">
          <Link to={PATHS.home}>
            <img
              src={logo1}
              alt="Logo"
              className="h-full w-16 mr-4"
            />
          </Link>
          <Link to={PATHS.home}>
            <img
              src={logo2}
              alt="Logo"
              className="h-full w-36 mr-4"
            />
          </Link>
        </div>

        {/* Botón para el menú en pantallas pequeñas */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white hover:text-green-400 focus:outline-none"
          >
            <RiMenuLine className="w-8 h-8" />
          </button>
        </div>

        {/* Menú de Navegación para pantallas medianas y grandes */}
        <nav className="hidden md:flex space-x-6">
          {HeaderMenu.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-xl text-gray-200 hover:text-green-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Iconos de carrito de compras y usuario */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Shopping Cart Dropdown */}
          <div className="relative">
            <RiShoppingCart2Line
              className="w-8 h-8 text-white hover:text-green-400 cursor-pointer"
              onClick={toggleCartDropdown}
            />
            {isCartDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ver Carrito</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Checkout</li>
                </ul>
              </div>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <RiUser3Line
              className="w-8 h-8 text-white hover:text-green-400 cursor-pointer"
              onClick={toggleUserDropdown}
            />
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mi Perfil</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Cerrar Sesión</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú colapsable para pantallas pequeñas */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4">
            {HeaderMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="block text-lg text-gray-200 hover:text-green-400"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <RiShoppingCart2Line className="w-8 h-8 text-white hover:text-green-400 cursor-pointer" />
              <RiUser3Line className="w-8 h-8 text-white hover:text-green-400 cursor-pointer" />
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
