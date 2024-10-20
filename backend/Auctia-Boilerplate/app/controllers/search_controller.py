from flask import Blueprint, request, jsonify
from app.services.product_search_service import ProductSearchService
#from app.security.auth import requires_auth  # Si deseas proteger la búsqueda con autenticación

# Definir el Blueprint para las rutas de búsqueda
search_bp = Blueprint('search', __name__)

# Endpoint para buscar productos
@search_bp.route('/buscarProducto', methods=['GET'])
#@requires_auth  # Puedes quitar esto si no deseas proteger la búsqueda con autenticación
def buscar_producto():
    try:
        query = request.args.get('q')  # Obtener el parámetro de búsqueda desde la URL
        if not query:
            return jsonify({"error": "Falta el parámetro de búsqueda 'q'"}), 400

        # Llamar al servicio de búsqueda de productos
        productos = ProductSearchService.buscar_producto(query)

        return jsonify(productos), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
