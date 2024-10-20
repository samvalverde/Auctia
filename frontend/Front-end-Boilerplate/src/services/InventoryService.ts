// /Singleton pattern
// Servicio para simular la subida y procesamiento de archivos de inventario

class InventoryService {
  private static instance: InventoryService;

  // Constructor privado para evitar la creación directa de nuevas instancias
  private constructor() {}

  // Método estático para obtener la única instancia de InventoryService
  static getInstance(): InventoryService {
    if (!InventoryService.instance) {
      InventoryService.instance = new InventoryService();
    }
    return InventoryService.instance;
  }

  // Método para simular la subida de archivos
  uploadFiles(files: File[]): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fileNames = files.map((file) => file.name);
        console.log('Archivos subidos:', fileNames);
        resolve(fileNames); // Devuelve los nombres de los archivos
      }, 2000); // Simula un retardo de 2 segundos
    });
  }

  // Método para simular el procesamiento del inventario
  processInventory(files: File[]): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Inventario procesado:', files);
        resolve('Inventario procesado exitosamente.');
      }, 1000);
    });
  }
}

export default InventoryService;
