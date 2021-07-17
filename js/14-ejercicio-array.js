'use strict'
/*
1.Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones) 
*/

function mostrarArray(numeros, textoCustom = ""){
    /*---Mostrar en el cuerpo de la página*/
    document.write("<br><h3>Contenido del Array "+textoCustom+"</h3>");
    document.write("<ul>");
    numeros.forEach((numeros, index) =>{
        document.write("<li>"+numeros+"</li>");
    });
    document.write("</ul>");
    /* ---Mostrar array en consola---*/
    console.log(textoCustom+" : "+numeros);
}

function buscarNumero(busqueda){
    /*---Buscarlo utilizando la funcion de callback findIndex---*/
    var posicion = numeros.findIndex(numero => numero == busqueda);
    /*---Si lo encuentra: ---*/
    if(posicion && posicion != -1){
        document.write("<h3>Se encontró en la posición: "+posicion+"</h3>");
    }
    /*---Si no lo encuentra: ---*/
    else{
        document.write("<h3>No se ha encontrado el número: " +busqueda+"</h3>");
    }

}

/*************************************************************************************************** */
/*---Pedir 6 números---*/

var numeros = []; 
//var numeros = new Array(6); <--Otra forma de hacerlo

for(var i=0; i<=5;i++){
    numeros.push(parseInt(prompt("Introduce un numero: ", 0))); 
    //numeros[i] = parseInt(prompt("Introduce un numero: ", 0)); <--Otra forma de hacerlo
}

mostrarArray(numeros);

/*************************************************************************************************** */
/*---Ordernarlo y mostrarlo---*/

//numeros.sort(); <--Ordenamiento alfabetico
numeros.sort(function(a,b){
    return a-b; //Ordenamiento ascendente númerico
    //return b-a; <--Ordenamiento descendente númerico
});
mostrarArray(numeros, "Ordenado: ");

/*************************************************************************************************** */
/*---Invertir y mostrarlo: */
numeros.reverse();
mostrarArray(numeros, "Invertido: ");

/*************************************************************************************************** */
/*---Cantidad de elementos: ---*/
document.write('<h3>El array tiene: '+numeros.length+' elementos.</h3>');

/*************************************************************************************************** */
/*---Busqueda: ---*/

var busqueda = parseInt(prompt("Busca un número: ",0));
buscarNumero(busqueda);