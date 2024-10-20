from pymongo import MongoClient
import os

class UserModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['users']

    def registrarUsuario(self, nombre, email, direccion, membresias, tipo_usuario):
        user_document = {
            "nombre": nombre,
            "email": email,
            "direccion": direccion,
            "membresias": membresias,
            "tipo_usuario": tipo_usuario
        }
        self.collection.insert_one(user_document)
        return {"message": "Usuario registrado con éxito"}

    def actualizarUsuario(self, email, update_fields):
        # Actualizar campos del usuario por email
        self.collection.update_one({"email": email}, {"$set": update_fields})
        return {"message": "Usuario actualizado con éxito"}

    def eliminarUsuario(self, email):
        # Eliminar usuario por email
        self.collection.delete_one({"email": email})
        return {"message": "Usuario eliminado con éxito"}
