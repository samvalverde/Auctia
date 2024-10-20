import os

class Config:
    # Configuraciones básicas de Flask
    DEBUG = False
    TESTING = False

    # Clave secreta para sesiones Flask (puedes generar una aleatoria)
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_secret_key')

    # Configuración de conexión a MongoDB Atlas
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb+srv://erikaupor:Y6GS6MTqmYkDpt0U@auctia.b1zws.mongodb.net/Auctia?retryWrites=true&w=majority')

    # Otras configuraciones que puedas necesitar
