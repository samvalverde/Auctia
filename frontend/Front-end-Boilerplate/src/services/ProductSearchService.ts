class ProductSearchService {
  private products: { name: string; description: string; category: string }[] = [
    { name: 'Filtro de Aceite', description: 'Filtro de alta eficiencia para autos y motocicletas', category: 'Filtros' },
    { name: 'Llantas Todo Terreno', description: 'Resistente a diferentes terrenos', category: 'Llantas' },
    { name: 'Kit de Herramientas', description: 'Herramientas esenciales para reparaciones automotrices', category: 'Herramientas' },
    { name: 'Motor para Motocicleta', description: 'Motor de alto rendimiento para motocicletas deportivas', category: 'Motores' },
    { name: 'Batería para Automóvil', description: 'Batería de larga duración', category: 'Baterías' },
  ];

  private static instance: ProductSearchService;

  private constructor() {
    // Constructor privado para prevenir instanciación directa
  }

  static getInstance(): ProductSearchService {
    if (!ProductSearchService.instance) {
      ProductSearchService.instance = new ProductSearchService();
    }
    return ProductSearchService.instance;
  }

  searchProducts(query: string): Promise<{ name: string; description: string; category: string }[]> {
    return new Promise((resolve) => {
      console.log(`Buscando productos para: ${query}`);

      // Simulamos un tiempo de búsqueda con una llamada asíncrona
      setTimeout(() => {
        const filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );

        resolve(filteredProducts);
      }, 1000); // Simulamos un delay de 1 segundo para la búsqueda
    });
  }

  // Función opcional para agregar productos en caso de que quieras extender la funcionalidad
  addProduct(product: { name: string; description: string; category: string }) {
    this.products.push(product);
  }
}

export default ProductSearchService.getInstance(); // Singleton: solo hay una instancia
  