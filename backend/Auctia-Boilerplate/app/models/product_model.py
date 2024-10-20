from pymongo import MongoClient
import os

class ProductModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['products']

    def crearProducto(self, nombre, distribuidor, distribuidor_usuarioId, descripcion, categoria, precio, fabricante, stock):
        product_document = {
            "nombre": nombre,
            "distribuidor": distribuidor,
            "distribuidor_usuarioId": distribuidor_usuarioId,
            "descripcion": descripcion,
            "categoria": categoria,
            "precio": precio,
            "fabricante": fabricante,
            "stock": stock
        }
        self.collection.insert_one(product_document)
        return {"message": "Producto creado con éxito"}

    def actualizarProducto(self, nombre, update_fields):
        # Actualizar producto por nombre
        self.collection.update_one({"nombre": nombre}, {"$set": update_fields})
        return {"message": "Producto actualizado con éxito"}

    def eliminarProducto(self, nombre):
        # Eliminar producto por nombre
        self.collection.delete_one({"nombre": nombre})
        return {"message": "Producto eliminado con éxito"}
