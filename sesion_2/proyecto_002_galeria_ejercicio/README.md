# Proyecto 002 - Galería de Imágenes (Ejercicio)

## Introducción

El proyecto consiste en crear una galería de imágenes que se vayan agregando dinámicamente desde una caja de texto.

## GaleriaStore

```js
const galeriaStore = {
    pictures: []
}

function galeriaStoreGetPictures() {
    // TODO: Devuelve los los galeriaStore.pictures
}

function galeriaStoreAddPicture(picture) {
    // TODO: Agrega el picture a galeariaStore.pictures
}
```

## GaleriaUI

```js
function galeriaUIUpdatePictures() {
    $("#galeria").html("")
    // TODO: Recupera los pictures del galeriaStore
    //       y para cada uno, agrega un nuevo <img>
    //       con el atributo `src` del picture 
}
```

## GaleriaApp

```js
$("#addPictureButton").click(function () {
    // TODO: Recupera el picture de la caja de texto
    galeriaStoreAddPicture(picture)
    galeriaUIUpdatePictures()
})
```

## index.html

```html
<input>
<button id="addPictureButton">Agregar</button>
<div id="galeria"></div>
```