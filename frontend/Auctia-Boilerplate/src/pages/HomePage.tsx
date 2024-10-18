import { Link } from 'react-router-dom';
import Header from '../components/layouts/Header'; // Asegúrate de importar el header correctamente

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Bienvenido a Auctia
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          La solución para la gestión de inventarios y búsqueda de productos para distribuidores y compradores.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carga de Inventario */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Carga tu Inventario</h2>
            <p className="mt-2 text-gray-600">
              Sube tus productos de manera rápida y sencilla. Nuestro sistema se encarga de procesarlos automáticamente.
            </p>
            <Link
              to="/load-inventory"
              className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Ir a Cargar Inventario
            </Link>
          </div>

          {/* Búsqueda de Productos */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Buscar Productos</h2>
            <p className="mt-2 text-gray-600">
              Encuentra productos disponibles en nuestro sistema y conecta con distribuidores.
            </p>
            <Link
              to="/search-product"
              className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Ir a Buscar Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
