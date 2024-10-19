import { Card, Divider } from '@tremor/react';
import ProductSearchService from '../services/ProductSearchService'; // Importa el servicio de búsqueda
import dummy1 from '../assets/icons/dummy1.jpg';
import dummy2 from '../assets/icons/dummy2.jpg';
import dummy3 from '../assets/icons/dummy3.jpg';
import dummy4 from '../assets/icons/dummy4.jpg';
import dummy5 from '../assets/icons/dummy5.jpg';

const data = [
  {
    name: 'Filtro de Aceite',
    description: 'Filtro de alta eficiencia para autos y motocicletas',
    icon: dummy1,
    action: ['Comprar', 'Agregar al carrito'],
  },
  {
    name: 'Llantas Todo Terreno',
    description: 'Resistente a diferentes terrenos y condiciones climáticas',
    icon: dummy2,
    action: ['Comprar', 'Agregar al carrito'],
  },
  {
    name: 'Kit de Herramientas',
    description: 'Herramientas esenciales para reparaciones automotrices',
    icon: dummy3,
    action: ['Comprar', 'Agregar al carrito'],
  },
  {
    name: 'Motor para Motocicleta',
    description: 'Motor de alto rendimiento para motocicletas deportivas',
    icon: dummy4,
    action: ['Comprar', 'Agregar al carrito'],
  },
  {
    name: 'Batería para Automóvil',
    description: 'Batería de larga duración para todo tipo de automóviles',
    icon: dummy5,
    action: ['Comprar', 'Agregar al carrito'],
  },
];

export default function SearchProduct() {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    ProductSearchService.searchProducts(query); // Llama al servicio para realizar la búsqueda
  };

  return (
    <div className="min-h-fit bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-7 gap-8">
        {/* Left Sidebar (Categorías) */}
        <aside className="col-span-2 bg-white shadow-md rounded-lg p-6 hidden md:block">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Categorías de Productos</h3>
          <ul className="space-y-4">
            <li className="text-gray-700 cursor-pointer hover:text-green-500">Motores</li>
            <li className="text-gray-700 cursor-pointer hover:text-green-500">Filtros</li>
            <li className="text-gray-700 cursor-pointer hover:text-green-500">Baterías</li>
            <li className="text-gray-700 cursor-pointer hover:text-green-500">Llantas</li>
            <li className="text-gray-700 cursor-pointer hover:text-green-500">Herramientas</li>
          </ul>
        </aside>

        {/* Right Section (Search bar + Grid) */}
        <section className="col-span-7 md:col-span-5">
          {/* Barra de Búsqueda */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 text-left justify-start my-4">Búsqueda de productos</h2>
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full p-4 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleSearch} // Manejador de búsqueda
            />
          </div>

          {/* Divider */}
          <Divider className="my-4" />

          {/* Productos (Grid) */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <Card key={item.name} className="flex flex-col justify-between p-6">
                {/* Condicional para icono de imagen local */}
                <img src={item.icon} alt={item.name} className="mx-auto w-24 h-24 mb-4" />
                <div className="mt-6 flex-1">
                  <dt className="text-lg font-medium text-gray-900">{item.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{item.description}</dd>
                </div>
                <div className="flex justify-evenly mt-8 space-x-4 w-full">
                  <button
                    type="button"
                    className="mt-4 w-full bg-green-600 text-white py-1 rounded-lg hover:bg-green-700 transition-all"
                  >
                    {item.action[0]}
                  </button>
                  <button
                    type="button"
                    className="mt-4 w-full bg-green-600 text-white py-1 rounded-lg hover:bg-green-700 transition-all"
                  >
                    {item.action[1]}
                  </button>
                </div>
              </Card>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
