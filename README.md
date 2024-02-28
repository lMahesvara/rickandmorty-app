# Rick and Morty App

## Descripción

Este proyecto consiste en una página web que muestra un listado de personajes de la serie Rick and Morty. Los usuarios pueden filtrar los personajes por nombre y ver detalles específicos de cada uno.

## Instalación

1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo desarrollo.
5. Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Tecnologías Utilizadas

* React
* TailwindCSS

## Listado de personajes

Para obtener el listado de personajes, se consume el servicio web [Rick and Morty API](https://rickandmortyapi.com/api/character). La lista muestra las siguientes columnas:

* Foto del Personaje
* Nombre (en negritas) y Género (en cursiva)
* Estatus (vivo, muerto, desconocido)
* Fecha de Creación (DD/MM/YYYY)

El listado permite filtrar los personajes por nombre a nivel del servicio.

## Detalle del personaje

* Foto del Personaje
* Nombre
* Género
* Especie
* Origen
* Estatus (vivo, muerto, desconocido)
* Fecha de Creación (DD/MM/YYYY)
