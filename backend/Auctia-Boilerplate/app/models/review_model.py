from pymongo import MongoClient
import os

class ReviewModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['reviews']

    def crearReseña(self, referenciaId, tipo, usuarioId, calificacion, comentario, fecha):
        review_document = {
            "referenciaId": referenciaId,
            "tipo": tipo,
            "usuarioId": usuarioId,
            "calificacion": calificacion,
            "comentario": comentario,
            "fecha": fecha
        }
        self.collection.insert_one(review_document)
        return {"message": "Reseña creada con éxito"}

    def actualizarReseña(self, referenciaId, update_fields):
        # Actualizar reseña por referenciaId
        self.collection.update_one({"referenciaId": referenciaId}, {"$set": update_fields})
        return {"message": "Reseña actualizada con éxito"}

    def eliminarReseña(self, referenciaId):
        # Eliminar reseña por referenciaId
        self.collection.delete_one({"referenciaId": referenciaId})
        return {"message": "Reseña eliminada con éxito"}
