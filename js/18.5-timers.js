'use strict'
window.addEventListener('load', function(){
    /*-------------------------- TIMERS: Funciones de tiempo -----------------------------*/

    /*
    setInterval: Recibe como parametros:
        1.Funcion anónima donde le indicamos lo que debe hacer.
        2.Cada cuánto tiempo debe ejecutarse (en milisegundos: 3000mls = 3 seg | 500mls = 0.5 seg)
    */
    function comenzarIntervalo(){
        var interval = setInterval(function(){
            console.log("Set interval ejecutado");
            var h1 = document.querySelector("h1");
            if (h1.style.fontSize == "50px"){
                h1.style.fontSize = "20px";
            }else{
                h1.style.fontSize = "50px";
            }
        }, 1000);

        return interval;
    };

    var start = document.querySelector("#start");
    var stop = document.querySelector("#stop");
    var interval = comenzarIntervalo();

    /*
    setTimeout: Recibe los mismos parámetros que setInterval.
        SOLO SE EJECUTA UNA VEZ.    
    */
    var timeout = setTimeout(function(){
        console.log("Set timeout ejecutado");
        let h5_timeout = document.querySelector("#timeout");
        h5_timeout.innerHTML = "Timeout ejecutado."
        h5_timeout.style.color = "red";
    }, 3000);

    /*
        clearInterval: Limpia el interval que le pasamos por parámetro.
        Es decir, en este caso, le pasaremos la variable que contiene a setInterval.
        Al limpiarla, el H1 dejará de parpadear.
    */
    
    stop.addEventListener('click', function(){
        clearInterval(interval);
        stop.innerHTML = "Parpadeo Detenido";
        //stop.setAttribute("disabled","true"); //<--- Esto lo puse para probar deshabilitar el boton
    });    

    start.addEventListener('click', function(){
        start.innerHTML = "Parpadeo Iniciado";
        comenzarIntervalo(); //<--Llamamos a la funcion
    });

}); //Fin de load