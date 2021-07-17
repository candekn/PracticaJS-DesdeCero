'use strict'
/*------------DOM: Document Object Model---------------*/
function cambiarColor(elemento,color="red"){
    elemento.style.backgroundColor = color;
}
/*-------------Conseguir elementos por ID: -------------------*/
//var micaja = document.getElementById("micaja"); <---Forma convencional de obtener elementos del DOM
var micaja = document.querySelector("#micaja"); //<---Se seleccionan como en css: "tags", "#ids", ".clases"

micaja.innerHTML="¡Hola, fui modificada desde Js!";
micaja.className="claseHola";
micaja.style.padding="2rem";
micaja.style.color="F9F9F9";
cambiarColor(micaja,"#FCE7FF");

console.log(micaja);

/*-------------------------Conseguir elementos por Etiqueta (TAGS): ---------------*/
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
var contenidoEnTexto = todosLosDivs[2].textContent; //<---Funciona igual que el innerHTML, pero no sirve para asignar nuevos valores
console.log(contenidoEnTexto);
todosLosDivs[2].innerHTML = "Hola, fui modificada desde un array de divs";

/*-------------------------Recorrer todos los elementos: ----------------*/
for (var tlD in todosLosDivs){
    console.log(tlD); //<----Devuelve más elementos que no son parte del DOM (no-DOM)
    //Con el siguiente if comprobamos que ese div tenga un texto dentro (asi excluimos a los elementos no-DOM): 
    //if(todosLosDivs[tlD].textContent.length >= 1){ //<---Nos va a marcar error en los elementos no-DOM
    
    //if(todosLosDivs[tlD].textContent != undefined){ //<---De esta forma nos ahorramos el error del anterior
    if(typeof todosLosDivs[tlD].textContent == 'string'){ //<---Otra forma de verificar lo mismo de arriba
        var parrafo = document.createElement("p"); //<--- Creamos un elemento, tag p -> <p></p>
        var texto = document.createTextNode(todosLosDivs[tlD].textContent);
        parrafo.appendChild(texto); //<---append: añade DESPUES de los hijos
        //document.querySelector("#miseccion").prepend(parrafo); //<---prepend: añade ANTES
        document.querySelector("#miseccion").append(parrafo); //<---append: añade DESPUES
    }
}
/*------------Vamos a añadir un hr al final de miseccion: ---------------*/
var miseccion = document.querySelector("#miseccion");
miseccion.appendChild(document.createElement("hr")); //<---Le añadimos al final de la seccion, un hr