import requests
import os

YOTPO_API_KEY = os.getenv('YOTPO_API_KEY')
YOTPO_SECRET_KEY = os.getenv('YOTPO_SECRET_KEY')

class YotpoService:
    @staticmethod
    def create_review(product_id, user_email, review_content, score):
        """
        Crea una reseña en Yotpo para un producto específico.
        """
        # Estructura básica para hacer una solicitud POST a Yotpo y crear una reseña
        """
        url = f"https://api.yotpo.com/v1/apps/{YOTPO_API_KEY}/reviews"
        headers = {"Content-Type": "application/json"}
        data = {
            "app_key": YOTPO_API_KEY,
            "sku": product_id,
            "email": user_email,
            "review_content": review_content,
            "score": score
        }

        response = requests.post(url, json=data, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            return {"error": response.json()}
        """
        pass

    @staticmethod
    def get_reviews(product_id):
        """
        Obtiene todas las reseñas para un producto específico en Yotpo.
        """
        # Estructura básica para hacer una solicitud GET a Yotpo para obtener las reseñas de un producto
        """
        url = f"https://api.yotpo.com/v1/apps/{YOTPO_API_KEY}/products/{product_id}/reviews"
        headers = {"Content-Type": "application/json"}

        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            return {"error": response.json()}
        """
        pass
