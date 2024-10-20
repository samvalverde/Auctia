from pymongo import MongoClient
import os

class UpdateProductRepository:
    @staticmethod
    def update_product(product):
        client = MongoClient(os.getenv('MONGO_URI'))
        db = client['Auctia']
        collection = db['products']

        # Actualizar el producto existente
        collection.update_one(
            {"nombre": product['nombre'], "distribuidor": product['distribuidor']},
            {"$set": product}
        )
        return {"message": f"Producto {product['nombre']} actualizado con éxito"}
