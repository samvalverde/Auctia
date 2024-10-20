from app.repositories.search_product_repository import SearchProductRepository

class ProductSearchService:
    @staticmethod
    def buscar_producto(query):
        # Llamar al repositorio para buscar el producto en MongoDB
        return SearchProductRepository.buscar_producto(query)
