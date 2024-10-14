export const uploadInventoryFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('http://api.auctia.com/inventory/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al cargar archivo');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  