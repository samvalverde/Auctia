from flask import Blueprint, request, jsonify
from app.services.sage_maker_service import SageMakerService
#from app.security.auth import requires_auth

# Definir el Blueprint para las rutas de inventario
inventory_bp = Blueprint('inventory', __name__)

# Endpoint para cargar inventario
@inventory_bp.route('/cargarInventario', methods=['POST'])
#@requires_auth  # Protege este endpoint con autenticación
def cargar_inventario():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "Falta el archivo de inventario"}), 400

        file = request.files['file']
        distribuidor = request.form.get('distribuidor')
        userDistribuidor = request.form.get('userDistribuidor')

        # Llamar al SageMakerService para procesar el inventario
        result = SageMakerService.process_inventory(file, distribuidor, userDistribuidor)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
