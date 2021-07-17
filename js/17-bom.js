'use strict'
/*----------- El BOM es el Browser Object Model: Es decir, trabajar con el Navegador ---------------*/

function getBom(){
    console.log("Alto window: " +window.innerHeight); //<---Saber el alto de la ventana del navegador
    console.log("Ancho window: " +window.innerWidth); //<---Saber el ancho de la ventana del navegador
    console.log("Alto screen: "+screen.height) //<--- Saber el alto de la pantalla del navegador
    console.log("Ancho screen: "+screen.width) //<--- Saber el ancho de la pantalla del navegador
    console.log("URL: " +window.location.href)
}

function redirect(url){
    window.location.href = url; //<---Redirige
}

function abrirVentana(url){
//---Abre una nueva ventana, con el tercer parametro le indicamos en qué tamaño debe abrirse (sería una ventana emergente): ---
    window.open(url,"","width: 350, height: 400") 
}

getBom();
