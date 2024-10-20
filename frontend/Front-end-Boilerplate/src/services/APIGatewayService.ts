class APIGatewayService {
    private static instance: APIGatewayService;
  
    private constructor() {}
  
    static getInstance(): APIGatewayService {
      if (!APIGatewayService.instance) {
        APIGatewayService.instance = new APIGatewayService();
      }
      return APIGatewayService.instance;
    }
  
    async fetchInventoryData(distributorId: string): Promise<any> {
      console.log(`Simulando solicitud a Amazon API Gateway para el distribuidor ${distributorId}...`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            statusCode: 200,
            body: [
              { productId: '123', name: 'Llantas Todo Terreno', quantity: 5 },
              { productId: '456', name: 'Filtro de Aceite', quantity: 10 },
            ],
          });
        }, 2000); // Simula el tiempo de respuesta del API Gateway
      });
    }
  
    async submitInventoryUpdate(distributorId: string, files: File[]): Promise<any> {
      console.log(`Simulando la actualización de inventario a través de Amazon API Gateway para el distribuidor ${distributorId}...`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            statusCode: 200,
            message: 'Actualización exitosa',
          });
        }, 3000); // Simula una respuesta de éxito
      });
    }
  }
  
  export default APIGatewayService;