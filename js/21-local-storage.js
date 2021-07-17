'use strict'
/*
----------------LocalStorage------------------
Almacenamiento local para que nuestra información persista entre las páginas de nuestra web.
Se utiliza en aplicaciones desarrolladas con JavaScript
*/
window.addEventListener('load',function(){
    //Comprobamos disponibilidad del localStorage
    if(typeof(Storage) !== 'undefined'){
        console.log("LocalStorage disponible");
    }else{
        console.log("Incompatible con LocalStorage");
    }

    //Guardar datos
    localStorage.setItem("titulo","Curso de Master JavaScript");

    //Recuperar elemento
    var peliculas = document.querySelector("#peliculas");
    peliculas.innerHTML=localStorage.getItem("titulo");

    //Guardar objetos
    var usuario = {
        nombre: "Cande",
        apellido: "Delgado",
        email: "cande.kn@gmail.com",
        web: "candekn.com.ar"
    };
    //El problema de guardarlo así, es que se guarda como Object object:
    localStorage.setItem("usuario puro",usuario);

    //Debemos coonvertirlo a string, tanto para almacenar como para enviar datos:
    //JSON.stringify: Metodo que convierte un JSON en String
    localStorage.setItem("usuario convertido", JSON.stringify(usuario));

    //Recuperar objetos:
    var usuario_conv = localStorage.getItem("usuario convertido");
    //Si lo obtenemos así, en vez de obtener el objeto json obtendremos un string. Y no nos servira para manipularlo
    console.log(usuario_conv);
    //Debemos convertirlo otra vez, a json:
    var usuario_json = JSON.parse(usuario_conv);
    console.log(usuario_json);
    var datos = document.querySelector("#datos_json");
    datos.append("Usuario json web: " +usuario_json.web + " nombre: " +usuario_json.nombre);

    //Eliminar datos del localStorage:
    localStorage.removeItem("usuario convertido");

    //Limpiar todo el LocalStorage:

    localStorage.clear();

})