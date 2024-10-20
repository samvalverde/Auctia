import requests
import os

API_GATEWAY_URL = os.getenv('API_GATEWAY_URL')

class APIGatewayService:
    @staticmethod
    def invoke_api(endpoint, payload):
        """
        Invoca un endpoint a través de Amazon API Gateway.
        """
        # Estructura básica para invocar un endpoint de API Gateway
        """
        url = f"{API_GATEWAY_URL}/{endpoint}"
        headers = {"Content-Type": "application/json"}
        
        try:
            response = requests.post(url, json=payload, headers=headers)
            if response.status_code == 200:
                return response.json()
            else:
                return {"error": response.json()}
        except Exception as e:
            return {"error": str(e)}
        """
        pass

    @staticmethod
    def get_resource(resource_id):
        """
        Realiza una solicitud GET a través de Amazon API Gateway.
        """
        # Estructura básica para realizar una solicitud GET a un recurso
        """
        url = f"{API_GATEWAY_URL}/{resource_id}"
        headers = {"Content-Type": "application/json"}

        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                return response.json()
            else:
                return {"error": response.json()}
        except Exception as e:
            return {"error": str(e)}
        """
        pass
