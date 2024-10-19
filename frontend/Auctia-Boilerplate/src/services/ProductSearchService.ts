class ProductSearchService {
    searchProducts(query: string) {
      // Simulación de una búsqueda de productos
      console.log(`Buscando productos para: ${query}`);
      // Aquí podría haber un llamado a una API para obtener los resultados
    }
  }
  
  export default new ProductSearchService(); // Singleton: solo hay una instancia
  