# Frontend

## Índice
- [Descripción General](#descripción-general)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Matriz de requerimientos funcionales vs. componentes visuales](#matriz-de-requerimientos-funcionales-vs-componentes-visuales)
- [Comandos](#comandos)

## Descripción General

Este proyecto contiene el frontend para ciertas pantallas de Auctia, en donde los distribuidores pueden cargar archivos a sus inventarios y buscar productos en la plataforma.

## Estructura del Proyecto

```plaintext
/src
  ├── /assets
  │   ├── /icons        # Imágenes y logos de la aplicación
  │   │   ├── dummy1.jpg
  │   │   ├── dummy2.jpg
  │   │   ├── dummy3.jpg
  │   │   ├── dummy4.jpg
  │   │   ├── dummy5.jpg
  │   │   ├── logo.jpg
  │   │   ├── logo1.jpg
  │   │   └── logo2.jpg
  │   └── /screenshots  # Capturas de pantalla para la documentación
  │       └── MatrixReqsComponents.png
  │       └── HomePage.png
  │       └── LoadInventory.png
  │       └── SearchProduct.png
  │
  ├── /components
  │   ├── /general
  │   │   ├── InventoryFile.ts
  │   │   ├── InventoryLoader.ts
  │   │   └── LoadInventoryManager.ts
  │   ├── /layouts
  │   │   ├── FileUpload.tsx
  │   │   ├── Header.tsx
  │   │   ├── InventoryTable.tsx
  │   │   ├── SearchSideBar.tsx
  │   │   └── UploadButton.tsx
  │
  ├── /contexts
  │   ├── InventoryContext.ts
  │   └── UserContext.ts
  │
  ├── /hooks
  │   ├── useFileUpload.ts
  │   ├── useInventory.ts
  │   └── useProductSearch.ts
  │
  ├── /pages
  │   ├── HomePage.tsx
  │   ├── LoadInventory.tsx
  │   └── SearchProduct.tsx
  │
  ├── /router
  │   ├── Router.tsx
  │   └── ConfigService.ts
  │   └── paths.ts
  │
  ├── /services
  │   ├── APIService.ts
  │   ├── APIGatewayService.ts
  │   ├── DistributorService.ts
  │   ├── FileUploadService.ts
  │   ├── InventoryService.ts
  │   ├── PaymentAdapter.ts
  │   ├── PaymentService.ts
  │   ├── PayPalAdapter.ts
  │   ├── ProductSearchService.ts
  │   ├── StripeAdapter.ts
  │   └── StripeService.ts
  │
  ├── /types
  │   ├── File.ts
  │   ├── InventoryTypes.ts
  │   ├── Product.ts
  │   └── UserTypes.ts
  │
  ├── App.tsx
  ├── main.tsx


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

![MatrixReqsComponents](./Front-end-Boilerplate/src/assets/screenshots/MatrixReqsComponents.png)

## Comandos

### Instalar dependencias

npm install

### Ejecutar el servidor de desarrollo

npm run dev

### Detener el servidor de desarrollo

1. ctrl+C
2. y
