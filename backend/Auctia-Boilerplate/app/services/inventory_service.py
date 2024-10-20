from app.repositories.add_product_repository import AddProductRepository
from app.repositories.update_product_repository import UpdateProductRepository
from pymongo import MongoClient
import os

class InventoryService:
    @staticmethod
    def validate_products(products, distribuidor):
        # Procesar cada producto
        for product in products:
            if InventoryService.product_exists(product['nombre'], distribuidor):
                UpdateProductRepository.update_product(product)
            else:
                AddProductRepository.add_product(product)
        
        return {"message": "Productos procesados con éxito"}

    @staticmethod
    def product_exists(nombre, distribuidor):
        # Conectar a MongoDB
        client = MongoClient(os.getenv('MONGO_URI'))
        db = client['Auctia']
        collection = db['products']

        # Buscar si ya existe un producto con el mismo nombre y distribuidor
        existing_product = collection.find_one({"nombre": nombre, "distribuidor": distribuidor})

        # Si existe el producto, retornar True, de lo contrario False
        return existing_product is not None
