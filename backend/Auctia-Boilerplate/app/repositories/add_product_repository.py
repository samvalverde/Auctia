from pymongo import MongoClient
import os

class AddProductRepository:
    @staticmethod
    def add_product(product):
        client = MongoClient(os.getenv('MONGO_URI'))
        db = client['Auctia']
        collection = db['products']

        # Crear un nuevo documento de producto
        collection.insert_one(product)
        return {"message": f"Producto {product['nombre']} creado con éxito"}
