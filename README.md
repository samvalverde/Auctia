# Auctia
E-commerce of automotive spare parts.

El proyecto va a ser una especie de sistema de subastas que funcionará de la siguiente forma: El usuario final buscará el producto que necesita comprar, y el sistema le ayudará a conectar con una serie de distribuidores asociados, los cuales le darán un precio y disponibilidad de su producto solicitado. De esta forma el usuario que desea comprar el producto, tendrá una serie de opciones variadas para comprar del proveedor que desee, y una vez escoja con cual quiere comprar, se le notificará a esta distribuidora para continuar con la compra. Con este proyecto se busca resolver el largo proceso de búsqueda de proveedores que puede tener un usuario al intentar comprar en línea, y a la vez se mejora la experiencia del usuario ya que se le hace posible tener diferentes opciones y escoger a conveniencia. Este proyecto inicialmente será aplicado en un nicho más reducido, y se enfocará únicamente en la subasta de repuestos mecánicos, por lo que inicialmente las personas a las que se dirige el proyecto serán a talleres y ventas de repuesto más pequeñas.
El problema que se busca resolver, inicialmente para el nicho de la venta de repuestos, es que cuando un taller necesita comprar repuestos, debe realizar un proceso de búsqueda muy manual, ya que debe preguntar a cada una de sus distribuidoras (únicamente las que tengan contacto) por disponibilidad del repuesto y precio. El objetivo es optimizar este proceso y eliminar la búsqueda manual, ya que en vez de preguntar individualmente a cada proveedor, podrá buscar en el sistema lo que necesite, y el mismo sistema hará la búsqueda en los proveedores y le retornará las opciones de compra, en las cuales puede que incluso el usuario final tenga una variedad de opciones de distribuidores más amplia de la que tenía inicialmente.


## Índice
- [Problem Statement](#problem-statement)
- [Requerimientos](#requerimientos)
- [Diagrama Arquitectura](#diagrama-arquitectura)
- [Storyboard](#storyboard)

## Problem Statement
Cargar los inventarios de los distribuidores sin intervención humana.

![Problem Statement del proyecto.](images/problem-statement.jpg)

## Requerimientos
1- Carga de Inventario.
1- Búsqueda de Productos.
1- Revisión de ofertas de Taller.
1- Administración de Usuario.
2- Administración de Membresía.
1- Monitoreo de Transacciones.
1- Decidir si registrarse como comprador (taller) o distribuidor.
1- Validación de requisitos legales.
1- Gestión de compras (historial).
1- Información del cliente y método de pago.
1- Acceso a catálogos.

2- Carga Automatizada Personalizada.
2- Envíos.
2- Notificaciones.
2- AI estadísticas y sugerencias para competir en el mercado. (Revisión de Ofertas de Distribuidora)
2- Filtro por productos, precios, ubicación, categorías.
2- Sistema de puntuaciones y referencias.
2- Configuración de Fees.
2- Manejo de Membresía.

3- Configuración Tipos de Pago.
3- AI de validación de requisitos legales.

## Diagrama Arquitectura
![Diagrama de la Arquitectura.](images/Auctia-Arquitectura.jpg)

## Storyboard
### Crazy 8's
La técnica de Crazy 8's es un ejercicio de ideación rápido y eficaz utilizado en el diseño y desarrollo de productos para generar una diversidad de ideas en un corto período de tiempo.
Las ideas más prometedoras fueron seleccionadas mediante un consenso. Se priorizaron aquellas que directamente abordaban las necesidades identificadas en el problem statement y que eran técnicamente viables dentro de los límites del proyecto.

![Storyboard de Problem Statement.](images/storyboard.jpg)
