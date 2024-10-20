import InventoryService from "../../services/InventoryService";
import FileUploadService from "../../services/FileUploadService";

class LoadInventoryManager {

    private inventoryService: InventoryService;
    private fileUploadService: FileUploadService;
  
    constructor() {
      this.inventoryService = InventoryService.getInstance();
      this.fileUploadService = new FileUploadService();
    }
  
    async processFiles(files: File[]): Promise<void> {
      try {
        console.log("Cargando archivos al servicio de inventario...");
        const uploadedFiles = await this.inventoryService.uploadFiles(files);
        
        console.log("Archivos cargados. Ahora procesando con el servicio externo...");
        const externalResponse = await this.fileUploadService.sendToExternalService(files);
        
        console.log("Respuesta del servicio externo:", externalResponse);
      } catch (error) {
        console.error("Error en la carga y procesamiento de archivos:", error);
      }
    }
  }
  