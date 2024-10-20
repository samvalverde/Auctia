export interface FileType {
    id: string;
    name: string;
    size: number;
    type: string; // 'image/jpeg', 'application/pdf', etc.
    lastModified: Date;
  }
  