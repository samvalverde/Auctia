from app.models.inventory_model import InventoryModel
from app.services.inventory_service import InventoryService

class SageMakerService:
    @staticmethod
    def process_inventory(file, distribuidor, userDistribuidor):
        # Guardar o actualizar el inventario en la base de datos
        inventory_model = InventoryModel()
        inventory_model.procesarInventario(file, distribuidor, userDistribuidor)

        # Omisión del procesamiento del archivo con Amazon SageMaker por ahora
        # Estructura para la conexión con SageMaker
        def process_with_sagemaker(file_binary):
            # Aquí irá la conexión con Amazon SageMaker, por ahora solo la estructura
            # Ejemplo de conexión con Amazon SageMaker (especificar configuración, modelo, etc.)
            """
            import boto3

            client = boto3.client('sagemaker-runtime')
            response = client.invoke_endpoint(
                EndpointName='nombre-del-endpoint',
                ContentType='application/octet-stream',
                Body=file_binary
            )
            return response['Body'].read()
            """
            pass

        # Aquí se llamaría a SageMaker para procesar el archivo
        # response = process_with_sagemaker(file_binary)

        # Para la estructura, omitimos el procesamiento, y pasamos al siguiente paso
        products = []  # Aquí irían los productos procesados por SageMaker (ahora vacío)

        # Llamar a InventoryService para validar y manejar productos
        return InventoryService.validate_products(products, distribuidor)
