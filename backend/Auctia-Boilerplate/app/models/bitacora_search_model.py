from pymongo import MongoClient
import os

class BitacoraSearchModel:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGO_URI'))
        self.db = self.client['Auctia']
        self.collection = self.db['bitacora_searches']

    def addSearch(self, busqueda, fecha, resultados, palabrasClave):
        search_document = {
            "busqueda": busqueda,
            "fecha": fecha,
            "resultados": resultados,
            "palabrasClave": palabrasClave
        }
        self.collection.insert_one(search_document)
        return {"message": "Búsqueda agregada con éxito"}

    def findSearch(self, busqueda):
        # Buscar la búsqueda por texto
        results = self.collection.find({"busqueda": {"$regex": f".*{busqueda}.*", "$options": "i"}})
        # Convertir los resultados a una lista de diccionarios
        results_list = [{
                            "busqueda": res["busqueda"], 
                            "fecha": res["fecha"], 
                            "resultados": res["resultados"],
                            "palabrasClave": res["palabrasClave"]
                           }
                          for res in results]
        return results_list
