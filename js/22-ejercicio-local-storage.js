'use strict'
window.addEventListener('load', function(){
    var error = document.querySelector("#error");

    document.querySelector('#form_peliculas').addEventListener('submit', function(){
        let nombre_pelicula = document.querySelector("#pelicula").value;
        if(nombre_pelicula.length <= 0){
            error.style.display="block";
        }else{
            error.style.display="none";
            localStorage.setItem(nombre_pelicula, nombre_pelicula);
        }      
    });

    document.querySelector('#form_borrar').addEventListener('submit', function(){
        let borrar_pelicula = document.querySelector("#borrar_pelicula").value;
        if(borrar_pelicula.length > 0 && localStorage.getItem(borrar_pelicula) != null){
            localStorage.removeItem(borrar_pelicula);
        }
    });

    for(let i in localStorage){
        if(typeof localStorage[i] == 'string'){
            let li = document.createElement("li");
            li.innerHTML = localStorage[i];
            document.querySelector("ul").append(li);
        }      
    }
});