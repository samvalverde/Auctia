import FileUploadService from '../../services/FileUploadService'; // Servicio que ahora se inyectará.

class InventoryLoader {
  private fileUploadService: FileUploadService;

  constructor(fileUploadService: FileUploadService) {
    this.fileUploadService = fileUploadService;
  }

  async uploadInventoryFiles(files: File[]): Promise<void> {
    try {
      const results = await this.fileUploadService.sendToExternalService(files);
      console.log('Archivos cargados exitosamente:', results);
    } catch (error) {
      console.error('Error al cargar los archivos:', error);
    }
  }
}

export default InventoryLoader;
