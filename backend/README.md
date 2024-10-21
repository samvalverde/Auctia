# Backend

## Índice
- [Descripción General](#descripción-general)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Diagrama de Bloques](#diagrama-de-bloques)
- [Diagrama de Clases](#diagrama-de-clases)


## Descripción General

Este proyecto contiene el backend para los dos endpoints principales del problem statement definido para Auctia, en donde los distribuidores pueden cargar archivos a sus inventarios y buscar productos en la plataforma.

## Estructura del Proyecto

```plaintext

backend/
│
├── Auctia-Boilerplate/
│   │
│   ├── app/
│   │   ├── controllers/
│   │   │   ├── inventory_controller.py      # Controlador para cargar y actualizar inventario
│   │   │   ├── search_controller.py         # Controlador para buscar productos
│   │   │
│   │   ├── services/
│   │   │   ├── sage_maker_service.py        # Servicio de Amazon SageMaker para procesar inventarios
│   │   │   ├── inventory_service.py         # Servicio para validar y manejar inventarios
│   │   │   ├── product_search_service.py    # Servicio para buscar productos
│   │   │   ├── stripe_service.py            # Servicio de Stripe (vacío por ahora)
│   │   │   ├── yotpo_service.py             # Servicio de Yotpo (vacío por ahora)
│   │   │   ├── sns_service.py               # Servicio de Amazon SNS (vacío por ahora)
│   │   │   ├── api_gateway_service.py       # Servicio de Amazon API Gateway (vacío por ahora)
│   │   │   ├── shipping_service.py          # Servicio de envíos (vacío por ahora)
│   │   │
│   │   ├── repositories/
│   │   │   ├── add_product_repository.py    # Repositorio para añadir productos
│   │   │   ├── update_product_repository.py # Repositorio para actualizar productos
│   │   │   ├── search_product_repository.py # Repositorio para buscar productos
│   │   │
│   │   ├── models/                          # Modelos de MongoDB para mapear colecciones
│   │   │   ├── user_model.py
│   │   │   ├── product_model.py
│   │   │   ├── distributor_model.py
│   │   │   ├── review_model.py
│   │   │   ├── inventory_model.py
│   │   │   ├── membership_model.py
│   │   │   ├── bitacora_search_model.py
│   │   │
│   │   ├── initializers/
│   │   │   ├── db_initializer.py            # Script para inicializar la base de datos desde los JSON
│   │   │
│   │   ├── security/
│   │   │   ├── auth.py                      # Módulo de autenticación y autorización usando JWT
│   │   │
│   │   ├── config.py                        # Configuración de Flask y MongoDB Atlas
│   │   ├── __init__.py                      # Inicialización de la app Flask
│   │
│   ├── data/                                # Carpeta con archivos JSON para inicializar la base de datos
│   │   ├── user.json
│   │   ├── producto.json
│   │   ├── distribuidores.json
│   │   ├── reseñas.json
│   │   ├── inventario.json
│   │   ├── membresias.json
│   │   ├── bitacoraSearches.json
│   │
│   ├── tests/                               # Carpeta de pruebas unitarias con pytest
│   │   ├── test_inventory.py                # Pruebas unitarias para Inventory Service
│   │   ├── test_search.py                   # Pruebas unitarias para Search Service
│   │
│   ├── Dockerfile                           # Dockerfile para construir el contenedor
│   ├── docker-compose.yml                   # Configuración de Docker Compose
│   └── requirements.txt                     # Dependencias de Python (Flask, PyMongo, PyJWT, pytest, etc.)
└── README.md                            # Documentación del proyecto
```

## Diagrama de Bloques

![Diagrama de Bloques.](Auctia/images/Diagrama-Bloques.png)
Aquí podrá revisar el código del diseño de bloques (boilerplate): [Boilerplate](./backend/Auctia-Boilerplate/app). (En el bloque de Models se muestran solo los nombres de las clases, que luego se desglosarán en el diagrama de clases).



En este diagrama se observa que en el bloque de controllers hay dos controllers que corresponden a los dos endpoints principales para nuestro scope y problem statement. 

Estos dos controllers son "inventory_controller" y "search_controller". search_controller será para la búsqueda de productos, y llamará al servicio "product_search_service"; este servicio es por si se necesita hacer más lógica de código antes de realizar la búsqueda, luego se procede a llamar a "search_product_repository" en el cual se ejecuta precisamente la consulta del producto a la colección de mongoDB. Este endpoint actualmente es funcional.

inventory_controller será el endpoint para la carga de archivos de inventario. Este endpoint llamará al "sage_maker_service" en el cual se hace una conexión al servicio de terceros, Amazon SageMaker, al que se le pedirá que procese el archivo recibido y saque del mismo todos los productos del inventario y los almacene de alguna forma en un array. Luego se llamará al "inventory_service", en el cual se hará primero una validación de todos los productos en el array, para determinar si ya existe el producto en la base de datos para actualizarlo o es uno nuevo para agregarlo. Dependiendo de esto se llamará a "update_product_repository" o "add_product_repository", respectivamente, y estos se encargarán de hacer la operación en la base de datos de MongoDB. Este endpoint de momento no es funcional, ya que no se tiene una conexión con el servicio de terceros Amazon SageMaker.


En el diagrama también se observa un security layer, en el cual está "auth", que se usará para hacer la conexión con Auth0 y Cognito y permitir authentication y authorization en el sistema.

También se observa el bloque de "initializer" donde está "db_initializer" que se encarga de conectarse a MongoDB Atlas, crear la base de datos Auctia y crear e inicializar las colecciones de la misma a partir de los modelos en archivos JSON que se encuentran en la carpeta [Datos](./backend/Auctia-Boilerplate/data).

Por último podrá observar un bloque de Models, donde se muestran los nombres de todas las clases de modelos de datos que se necesitarán en el sistema y que están desglosados en el [Diagrama de Clases](#diagrama-de-clases). 


## Diagrama de Clases

![Diagrama de Clases.](Auctia/images/Diagrama-Clases.jpg)
Aquí podrá revisar el código del diseño de clases en la carpeta Models: [Models](./backend/Auctia-Boilerplate/app/models).


En el diagrama se pueden ver 7 clases principales y 4 secundarias. Las principales son "bitacora_search_model", "distributor_model", "inventory_model", "membership_model", "product_model", "review_model" y "user_model". Estas clases están basadas en el diseño de [Datos](./backend/Auctia-Boilerplate/data). Los atributos de estas clases son los que se encuentran en los respectivos archivos JSON en la carpeta [Datos](./backend/Auctia-Boilerplate/data). Las clases están definidas en código el el folder [Models](./backend/Auctia-Boilerplate/app/models), y tienen sus respectivos metodos de agregar, actualizar y eliminar, aunque de momento no son utilizados y dependiendo de las siguientes etapas del sistema estos metodos podrían modificarse. Las otras clases secundarias que son "MembresiaHist", "Direccion", ContactoInfo" y "Vehiculo" están diseñadas únicamente de manera gráfica, para mayor claridad y comprensión, ya que en realidad representan documentod embebidos.
