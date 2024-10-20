# Auctia - Frontend Boilerplate

## Índice
- [Descripción General](#descripción-general)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Matriz de requerimientos funcionales vs. componentes visuales](#Matriz-de-requerimientos-funcionales-vs.-componentes-visuales)
- [Comandos](#Comandos)

## Descripción General

Este proyecto contiene el frontend para ciertas pantallas de Auctia, en donde los distribuidores pueden cargar archivos a sus inventarios y buscar productos en la plataforma.

## Estructura del Proyecto

```plaintext
/src
  ├── /assets
  ├── /components
  ├── /contexts
  ├── /hooks
  ├── /pages
  ├── /router
  ├── /services
  ├── /types
  └── App.tsx
  └── main.tsx
  └── .env

```
### /assets: 

Contiene imágenes y logos usados en la aplicación.

### /components: 

Contiene los componentes generales y de layout (como el FileUpload, Header, etc.).

### /contexts: 

Proveedores de contexto para el manejo de estados globales (e.g. UserContext, InventoryContext).

### /hooks: 

Hooks personalizados para manejar lógicas específicas (e.g. useFileUpload, useProductSearch).

### /pages: 

Las principales páginas del sistema (HomePage, LoadInventory, SearchProduct).

### /services: 

Servicios para manejar la interacción con APIs o simulaciones (ProductSearchService, InventoryService, etc.).

### /types: 

Definiciones de tipos para mejorar el tipado (e.g. File.ts, InventoryTypes.ts).

### /utils: 

Contiene funciones y helpers reutilizables.

## Matriz de requerimientos funcionales vs. componentes visuales

_Screenshot de la matriz:_
![MatrixReqsComponents](./Front-end-Boilerplate/src/assets/screenshots/MatrixReqsComponents.png)

## Comandos

### Instalar dependencias

npm install

### Ejecutar el servidor de desarrollo

npm run dev

### Detener el servidor de desarrollo

1. ctrl+C
2. y
