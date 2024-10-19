class FileUploadService {
    // Singleton para asegurar que solo hay una instancia
    private static instance: FileUploadService;
  
    private constructor() {}
  
    static getInstance() {
      if (!FileUploadService.instance) {
        FileUploadService.instance = new FileUploadService();
      }
      return FileUploadService.instance;
    }
  
    uploadFile(file: File) {
      console.log("Subiendo archivo:", file.name);
      // Aquí simulas la lógica de envío del archivo a un backend o servicio externo.
      // Implementar lógica real o simulada para interactuar con el servicio de procesamiento
    }
  }
  
  export default FileUploadService;
  