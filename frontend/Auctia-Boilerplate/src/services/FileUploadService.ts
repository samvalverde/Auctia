// Ambassador
// Se crea un intermediario entre la aplicación y un servicio externo, que en este caso sería simulado.

class FileUploadService {
  async sendToExternalService(files: File[]): Promise<string[]> {
    return new Promise((resolve) => {
      console.log("Enviando archivos al servicio externo...");

      // Simulamos un tiempo de respuesta de un servicio externo
      setTimeout(() => {
        const response = files.map((file) => `Procesado ${file.name}`);
        resolve(response);
      }, 3000);
    });
  }
}

export default FileUploadService;