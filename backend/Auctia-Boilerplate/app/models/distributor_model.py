from pymongo import MongoClient
import os

class DistributorModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['distributors']

    def registrarDistribuidor(self, nombre, email, telefono, direccion, membresias, categoria_usuario):
        distributor_document = {
            "nombre": nombre,
            "email": email,
            "telefono": telefono,
            "direccion": direccion,
            "membresias": membresias,
            "categoria_usuario": categoria_usuario
        }
        self.collection.insert_one(distributor_document)
        return {"message": "Distribuidor registrado con éxito"}

    def actualizarDistribuidor(self, email, update_fields):
        # Actualizar distribuidor por email
        self.collection.update_one({"email": email}, {"$set": update_fields})
        return {"message": "Distribuidor actualizado con éxito"}

    def eliminarDistribuidor(self, email):
        # Eliminar distribuidor por email
        self.collection.delete_one({"email": email})
        return {"message": "Distribuidor eliminado con éxito"}
