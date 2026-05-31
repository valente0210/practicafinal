Proyecto: Pruebas automatizadas API PetStore con Cypress
Autor: Alberto Soto
Fecha: Mayo 2026

Descripción:
Este proyecto contiene un conjunto de pruebas automatizadas sobre la API pública de PetStore (https://petstore.swagger.io/v2), utilizando Cypress como framework de automatización. 
El objetivo es validar operaciones CRUD básicas sobre el recurso "Pet".

Requisitos previos:
- Node.js instalado (versión LTS recomendada).
- Visual Studio Code como IDE.
- Cypress instalado como dependencia de desarrollo.

Instalación:
1. Clonar o descargar este repositorio en su máquina local.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar dependencias con:
   npm install

Ejecución de pruebas:
1. Modo interactivo (GUI):
   npx cypress open
   - Seleccionar el archivo cypress/e2e/petstore.cy.js
   - Visualizar la ejecución en tiempo real.

2. Modo headless (CI/CD):
   npx cypress run
   - Los resultados se almacenan en carpetas de screenshots y videos.

Estructura del proyecto:
- cypress/e2e/petstore.cy.js → Archivo principal de pruebas.
- package.json → Configuración de dependencias y scripts.
- conclusiones.txt → Documento con hallazgos y recomendaciones.
- readme.txt → Instrucciones de instalación y ejecución.

Notas:
- Los IDs de mascotas están parametrizados para evitar colisiones.
- Los reportes pueden integrarse con mochawesome o Allure para mayor trazabilidad.