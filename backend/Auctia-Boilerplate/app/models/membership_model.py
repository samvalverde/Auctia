from pymongo import MongoClient
import os

class MembershipModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['memberships']

    def crearMembresia(self, plan_membresia, descripcion, fecha_inicio, estado, precio, tipo):
        membership_document = {
            "plan_membresia": plan_membresia,
            "descripcion": descripcion,
            "fecha_inicio": fecha_inicio,
            "estado": estado,
            "precio": precio,
            "tipo": tipo
        }
        self.collection.insert_one(membership_document)
        return {"message": "Membresía creada con éxito"}

    def actualizarMembresia(self, plan_membresia, update_fields):
        # Actualizar membresía por plan
        self.collection.update_one({"plan_membresia": plan_membresia}, {"$set": update_fields})
        return {"message": "Membresía actualizada con éxito"}

    def eliminarMembresia(self, plan_membresia):
        # Eliminar membresía por plan
        self.collection.delete_one({"plan_membresia": plan_membresia})
        return {"message": "Membresía eliminada con éxito"}
