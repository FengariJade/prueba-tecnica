# 🛠️ Prueba Técnica - Angular + NestJS

Este proyecto es una **prueba técnica fullstack** que combina Angular (frontend) con NestJS (backend). Permite agregar, ver y gestionar productos a través de una interfaz moderna y un backend sólido.

![Tech Stack](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Características

- 🧾 Formulario para agregar productos con validación
- 📦 Modal para ver los productos añadidos con paginación
- ❌ Posibilidad de eliminar productos
- 🍃 Diseño moderno estilo *glassmorphism*
- 🔧 Backend construido con NestJS y Prisma

---

## 📁 Estructura del Proyecto

prueba-tecnica/
├── PruebaTecnicaFront/ # Frontend (Angular)
└── prueba-tecnica/ # Backend (NestJS)

---

## 🚀 Instalación y uso

### 📦 Backend (NestJS)

```bash
cd prueba-tecnica
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev

Frontend (Angular)
bash
Copiar
Editar
cd PruebaTecnicaFront
npm install
ng serve

Abre en el navegador: http://localhost:4200

⚙️ Tecnologías
Frontend: Angular 17, HTML, CSS

Backend: NestJS, Prisma, SQLite

Lenguaje: TypeScript

🧠 Autor
👩‍💻 Jade Enid
GitHub
