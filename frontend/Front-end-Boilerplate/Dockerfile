# Etapa 1: Compilar y construir la aplicación
FROM node:16-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json o yarn.lock
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación utilizando un servidor nginx
FROM nginx:stable-alpine

# Copiar los archivos de la build desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
