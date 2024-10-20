import json
import os
from pymongo import MongoClient

# Función para cargar archivos JSON
def load_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Inicializar las colecciones en MongoDB Atlas
def initialize_collections():
    # Conectar a MongoDB Atlas usando PyMongo
    client = MongoClient('mongodb+srv://erikaupor:Y6GS6MTqmYkDpt0U@auctia.b1zws.mongodb.net/')

    # Seleccionar la base de datos
    db = client['Auctia']

    # Directorio donde se encuentran los archivos JSON
    data_directory = 'data/'

    # Cargar y crear colecciones a partir de los archivos JSON
    collections = {
        'users': 'user.json',
        'products': 'producto.json',
        'distributors': 'distribuidores.json',
        'reviews': 'reseñas.json',
        'inventories': 'inventario.json',
        'memberships': 'membresias.json',
        'bitacora_searches': 'bitacoraSearches.json'
    }

    for collection_name, file_name in collections.items():
        # Cargar datos del archivo JSON
        file_path = os.path.join(data_directory, file_name)
        data = load_json(file_path)
        
        # Insertar los documentos en la colección correspondiente
        if isinstance(data, list):
            db[collection_name].insert_many(data)
        else:
            db[collection_name].insert_one(data)

    print("Database 'Auctia' initialized successfully with collections.")

