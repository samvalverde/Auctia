class ConfigService {
    private static instance: ConfigService;
  
    private config: { [key: string]: string | undefined } = {
      apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
      stripeApiKey: process.env.REACT_APP_STRIPE_API_KEY,
      amazonApiGatewayUrl: process.env.REACT_APP_AMAZON_API_GATEWAY_URL,
    };
  
    private constructor() {
      // Constructor privado para evitar la instanciación directa.
    }
  
    static getInstance(): ConfigService {
      if (!ConfigService.instance) {
        ConfigService.instance = new ConfigService();
      }
      return ConfigService.instance;
    }
  
    getConfig(key: string): string | undefined {
      return this.config[key];
    }
  
    setConfig(key: string, value: string): void {
      this.config[key] = value;
    }
  
    // Método para actualizar configuraciones dinámicas (si fuese necesario).
    updateConfig(newConfig: { [key: string]: string }): void {
      this.config = { ...this.config, ...newConfig };
    }
  }
  
  export default ConfigService;
  