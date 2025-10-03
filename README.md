# 🌐 **Proyecto Final - Informatorio 2025**  

Este repositorio contiene la **Entrega Final** del curso de la especialidad de **React** del Informatorio 2025.  

## 📝 **Descripción**  
Para el proyecto se utilizó **Vite + React + React-Router + React-Query + CSS Module + TypeScript**, simulando parte del sitio de **Mercado Libre Argentina**.  

### 📌 **Características  🛒 Ecommerce (Mercado Libre) **  
✔ Implementación de un **Navbar** en el **Header**.  
✔ Renderizado de **artículos** en el **Main**, cumpliendo con los requerimientos solicitados.  
✔ Uso de **children** para la composición de componentes.  
✔ Estilos con **CSS Module**, asegurando una estructura visual ordenada.  
✔ Buscador de productos. **Filtrado los productos** por nombre a medida que el usuario escribe.
✔ Selector de filtros. Filtrado por categoría, precio, etc.
✔ Opcion de agregar al carrito desde cada producto. Cada card tiene un botón "Agregar". Al hacer click, suma al contador del carrito en el header.
✔ Opcion de quitar del carrito desde cada producto. Cada productor agregado tiene un botón de "Quitar", un **contador de producto individual** . Al hacer click, resta al contador del carrito en el header.
✔ Carrito en el header. Ícono con **contador visible** del total de productos.
✔ Simulacion de compras.
✔ Visualizacion de detalles de productos.
✔ Calculo de costo final de productos agregados al carrito de compras.
✔ Navegacion entre rutas, utilizando **React Router**.
✔ Peticiones HTTP, utilizando **React Query**
✔ Creacion de nuevas publicaciones, guardando la informacion den el **Local Storage** del navegador. 
Entre otras caracterisitcas ....  ✅

---
## 🛠️ Requerimientos Técnicos

Este proyecto fue desarrollado utilizando tecnologías modernas del ecosistema React, priorizando la escalabilidad, modularidad y experiencia de usuario. A continuación se detallan los requerimientos técnicos necesarios para ejecutar y mantener el proyecto:

### ⚙️ Tecnologías Base
- **React 18+** con enfoque en componentes reutilizables y composición mediante `children`.
- **React Router DOM** para navegación entre rutas y vistas.
- **React Query** para manejo eficiente de peticiones HTTP y caché de datos.
- **CSS Modules** para estilos encapsulados y estructura visual ordenada.

### 📦 Dependencias
- `react-router-dom`
- `@tanstack/react-query`
- `uuid` (para generar identificadores únicos en publicaciones)
- Otras dependencias estándar del entorno React (ver `package.json`).

### 💾 Persistencia
- **Local Storage**: utilizado para guardar nuevas publicaciones creadas por el usuario.

### 🧪 Requisitos de entorno
- **Node.js 16+**
- **npm 8+** o **yarn** como gestor de paquetes

### 🖥️ Recomendaciones de desarrollo
- Uso de **componentes funcionales** y **hooks** para mantener una lógica clara y desacoplada.
- Separación de responsabilidades entre vistas, componentes y lógica de negocio.
- Estructura de carpetas modular para facilitar el mantenimiento y escalabilidad del proyecto.

---

## 🌟 **Vista Final del Proyecto**  
Aquí puedes ver la interfaz final inspirada en Mercado Libre Argentina:  

![Vista del Proyecto](public/FinalView.jpeg)  

---

## 🏗️ **Estructura del Proyecto**  
```bash

```

##  📦 **Instalación y Uso
1️⃣ Clonar el repositorio:

  ```bash
      git clone <URL_DEL_REPOSITORIO>
      cd <NOMBRE_DEL_REPOSITORIO>
  ```
2️⃣ Instalar dependencias:

  ```bash
    npm install
  ```
3️⃣ Ejecutar el proyecto:

  ```bash
