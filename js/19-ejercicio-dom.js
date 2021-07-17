'use strict'
function validarString(s){
    if(s.trim() == null || s.trim().length == 0){
        console.log("Dato texto no válido");
        return false;
    }
    else{
        return true;
    }
}

function validarNumero(n){
    if(isNaN(n) || n<1){
        console.log("Dato numérico no válido");
        return false;
    }
    else{
        return true;
    }
}

function limpiarError(error, elemento){
    error.style.display="none";
    elemento.style.borderColor ="green";
}
window.addEventListener('load', function(){
    console.log("DOM Cargado");

    var dashed = document.querySelector(".dashed");
    dashed.style.display = "none";

    var formulario = document.querySelector("#formulario");
    
    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre");
        var apellido = document.querySelector("#apellido");
        var edad = document.querySelector("#edad");
        var error = document.createElement("p");
        error.style.color= "red";
        error.innerHTML = "Dato no válido";

        if(!validarString(nombre.value)){
            nombre.style.borderColor = "red";
            /*insertAdjacentElement: Insertamos nuevo elemento
             ------El primer parámetro es la posición:
                <!-- beforebegin -->
                <p>
                    <!-- afterbegin -->
                    foo
                    <!-- beforeend -->
                </p>
                <!-- afterend -->
             ------El segundo parámetro es el elemento a insertar
            */
            nombre.insertAdjacentElement('afterend',error); 
            return false;
        } 

        if(!validarString(apellido.value)){
            apellido.style.borderColor = "red";
            apellido.insertAdjacentElement('afterend',error);
            return false;
        }

        if(!validarNumero(parseInt(edad.value))){
            edad.style.borderColor = "red";
            edad.insertAdjacentElement('afterend',error);
            return false;
        }

        var datosUsuario = [nombre, apellido, edad];
        for (let i in datosUsuario){
            let parrafo = document.createElement("p");
            parrafo.append(datosUsuario[i].value);
            dashed.append(parrafo);
        }
        console.log("Nombre: "+nombre.value+" Apellido: "+apellido.value+" Edad: "+edad.value);
        dashed.style.display = "block";
    });


}) //load