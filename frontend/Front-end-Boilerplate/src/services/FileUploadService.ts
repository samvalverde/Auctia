// Ambassador
// Se crea un intermediario entre la aplicación y un servicio externo, que en este caso sería simulado.

class FileUploadService {
  // Método que simula enviar los archivos a un servicio externo utilizando el patrón Ambassador
  async sendToExternalService(files: File[]): Promise<string[]> {
    return new Promise((resolve) => {
      console.log("Enviando archivos al servicio externo...");

      // Simulamos un retardo de respuesta del servicio externo
      setTimeout(() => {
        const response = files.map((file) => `Procesado: ${file.name}`);
        console.log('Respuesta del servicio externo:', response);
        resolve(response);
      }, 3000); // Simula una espera de 3 segundos para la respuesta
    });
  }

  // Método que combina el envío de archivos al servicio externo y la respuesta
  async uploadAndProcessFiles(files: File[]): Promise<string[]> {
    // Simulamos que se envían los archivos a un servicio externo
    const response = await this.sendToExternalService(files);
    return response;
  }
}

export default FileUploadService;
