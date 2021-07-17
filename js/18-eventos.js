'use strict'
/*********************************************************************************************************************   
-------------------     Eventos: functiones que se ejecutan cuando ocurre algo.      ---------------------
Hay diferentes tipos, clasificados dependiendo el elemento que se utilice para realizar la acción que desencadene al evento.

**************************************************************************** */

function cambiarColor(){
    let bgc = boton.style.backgroundColor;
    if(bgc == "rgb(235, 154, 249)"){ //<--Este rgb es igual al hexa del else
        boton.style.backgroundColor = "#99f398";
    }else{
        boton.style.backgroundColor = "#eb9af9";
    }
    return true;
}

/*------------- EVENTO Load: Le decimos a JS que ejecute la función cuando todo el documento esté cargado:   -------------------*/
window.addEventListener('load', () => {
    
    console.log("Se ha terminado de cargar el sitio");

    var boton = document.querySelector("#boton");
   
    /*--------- addEventListener solo acepta como argumentos functiones anonimas: ------------*/
    //boton.addEventListener('click', cambiarColor()); //<--Esto nos dará error
    
    /*------------------EVENTO CLICK: ---------------*/
    boton.addEventListener('click',function(){
        cambiarColor(); //<--Dentro de la función anónima (callback), llamamos a la function definida anteriormente
        //El operador 'this', hace referencia al elemento con el cual se ha lanzado el evento
        console.log(this);
        this.style.border = "10px solid black";
    });
    
    /*------------EVENTO MOUSEOVER/MOUSEOUT: -------------*/
    boton.addEventListener('mouseover',function(){
        boton.style.backgroundColor = "#000";
        boton.style.color = '#fff';
    });
    boton.addEventListener('mouseout',function(){
        boton.style.backgroundColor = "#fff";
        boton.style.color = '#000';
    });
    
    /*------------------ Eventos de Foco y Teclado --------------------*/
    
    var campoNombre = document.querySelector("#campo_nombre");
    var textoEvent = document.querySelector("#textoEvent");
    var text = textoEvent.innerHTML;
    //focus: Cuando el foco está puesto en ese input
    campoNombre.addEventListener('focus', function(){
        console.log("Estas dentro del campo nombre");
        textoEvent.innerHTML = text + "Focus";
    });
    
    //blur: Cuando salimos del input
    campoNombre.addEventListener('blur', function(){
        console.log("Estas fuera de campo nombre");
        textoEvent.innerHTML = text + "Blur";
    });
    
    //keydown: Mientras pulsamos una tecla:
    campoNombre.addEventListener('keydown', function(event){
        console.log("Estas pulsando la tecla: "+String.fromCharCode(event.keyCode));
        textoEvent.innerHTML = text + "Keydown";
    });
    
    //keypress: Cuando ya presionamos una tecla:
    campoNombre.addEventListener('keypress', function(event){
        console.log("Has presionado la tecla: " +String.fromCharCode(event.keyCode));
        textoEvent.innerHTML = text + "Keypress";
    });
    
    
    //keyup: Cuando dejamos de presionar una tecla:
    campoNombre.addEventListener('keyup', function(event){
        console.log("Has soltado la tecla: " +String.fromCharCode(event.keyCode));   
        textoEvent.innerHTML = text + "KeyUp";
    });

}) //Fin de load



