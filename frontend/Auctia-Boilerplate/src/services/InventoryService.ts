class InventoryService {
  private static instance: InventoryService;

  private constructor() {
    // Constructor privado para prevenir instanciación directa
  }

  static getInstance(): InventoryService {
    if (!InventoryService.instance) {
      InventoryService.instance = new InventoryService();
    }
    return InventoryService.instance;
  }

  uploadFiles(files: File[]): Promise<string[]> {
    return new Promise((resolve) => {
      // Simulación de carga de archivos
      setTimeout(() => {
        const fileNames = files.map((file) => file.name);
        resolve(fileNames); // Retorna los nombres de los archivos
      }, 2000);
    });
  }
}

export default InventoryService;