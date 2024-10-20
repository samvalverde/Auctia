# Usar una imagen base de Python slim
FROM python:3.9-slim

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de dependencias
COPY requirements.txt .

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que correrá la aplicación
EXPOSE 5000

# Comando para ejecutar la aplicación Flask
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
