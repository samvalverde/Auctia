from pymongo import MongoClient
import os

class SearchProductRepository:
    @staticmethod
    def buscar_producto(query):
        # Conectar a MongoDB
        client = MongoClient(os.getenv('MONGO_URI'))
        db = client['Auctia']
        collection = db['products']

        # Realizar una búsqueda con $regex (filtro insensible a mayúsculas y minúsculas)
        # El patrón busca coincidencias donde el nombre contenga la palabra del query
        productos = collection.find({"nombre": {"$regex": f".*{query}.*", "$options": "i"}})

        # Convertir los resultados a una lista de diccionarios
        productos_list = [{
                            "nombre": prod["nombre"], 
                            "precio": prod["precio"], 
                            "descripcion": prod["descripcion"],
                            "distribuidor": prod["distribuidor"],
                            "fabricante": prod["fabricante"],
                            "stock": prod["stock"]
                           }
                          for prod in productos]
        
        return productos_list
