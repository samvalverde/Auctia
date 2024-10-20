class InventoryFile {
    
    name: string;
    size: number;
    status: 'pending' | 'uploading' | 'completed' | 'failed';
  
    constructor(name: string, size: number) {
      this.name = name;
      this.size = size;
      this.status = 'pending';
    }
  
    setStatus(newStatus: 'pending' | 'uploading' | 'completed' | 'failed') {
      this.status = newStatus;
    }
  }
  
  export default InventoryFile;
  