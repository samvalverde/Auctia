import InventoryFile from './InventoryFile';
import FileUploadService from './FileUploadService';

class InventoryLoader {
  private service: FileUploadService;

  constructor() {
    this.service = FileUploadService.getInstance(); // Singleton service
  }

  iniciarCarga(file: InventoryFile) {
    file.setStatus('uploading');
    this.service.uploadFile(file).then(() => {
      file.setStatus('completed');
    }).catch(() => {
      file.setStatus('failed');
    });
  }
}

export default InventoryLoader;
