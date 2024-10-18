import React from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PATHS from '../../router/paths';

const HeaderMenu = [
  { id: 1, path: PATHS.home, title: 'Home' },
  { id: 2, path: PATHS.dist.load_inventory, title: 'Load Inventory' },
  { id: 3, path: PATHS.dist.search_product, title: 'Search Product' },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo y Título */}
        <div className="flex items-center">
          <img
            src="../../../logo-fe.jpg"
            alt="Logo"
            className="h-16 w-16 mr-4"
          />
          <h1 className="text-3xl font-semibold text-green-400">Auctia</h1>
        </div>

        {/* Menú de Navegación */}
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

        {/* Icono de Usuario */}
        <div className="flex items-center">
          <RiUser3Line className="w-8 h-8 text-white hover:text-green-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
