from pymongo import MongoClient, Binary
import os

class InventoryModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['inventories']

    def procesarInventario(self, file, distribuidor, userDistribuidor):
        # Convertir el archivo en binario
        file_binary = Binary(file.read())

        # Buscar si ya existe un documento con el distribuidor
        existing_inventory = self.collection.find_one({"distribuidor": distribuidor})

        if existing_inventory:
            # Actualizar el documento existente
            self.collection.update_one(
                {"distribuidor": distribuidor},
                {"$set": {"archivoInventario": file_binary, "userDistribuidor": userDistribuidor}}
            )
            return {"message": "Inventario actualizado con éxito"}
        else:
            # Crear un nuevo documento de inventario
            inventory_document = {
                "distribuidor": distribuidor,
                "userDistribuidor": userDistribuidor,
                "archivoInventario": file_binary
            }

            # Insertar el documento en la colección
            self.collection.insert_one(inventory_document)
            return {"message": "Inventario cargado con éxito"}
