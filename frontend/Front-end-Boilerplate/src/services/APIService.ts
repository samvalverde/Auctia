class APIService {
    private static instance: APIService;
  
    private constructor() {}
  
    static getInstance(): APIService {
      if (!APIService.instance) {
        APIService.instance = new APIService();
      }
      return APIService.instance;
    }
  
    async fetch(endpoint: string, method: string = 'GET'): Promise<any> {
      console.log(`Simulando solicitud a la API: ${method} ${endpoint}`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'success',
            data: `Respuesta simulada de ${endpoint}`,
          });
        }, 1000); // Simula la respuesta de una API
      });
    }
  }
  
  export default APIService;