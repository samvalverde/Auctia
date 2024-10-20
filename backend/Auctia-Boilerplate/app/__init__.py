from flask import Flask
from app.initializers.db_initializer import initialize_collections
from app.config import Config
from app.controllers.search_controller import search_bp

def create_app():
    app = Flask(__name__)

    # Aquí puedes cargar la configuración
    app.config.from_object('app.config.Config')

    # Inicializar la base de datos y las colecciones en MongoDB Atlas
    with app.app_context():
        initialize_collections()

    app.register_blueprint(search_bp, url_prefix='/')  # Verifica que esté registrado correctamente

    return app
