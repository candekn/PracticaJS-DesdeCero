'use strict'

/*------ JSON: JavaScript Object Notation -------*/
window.addEventListener('load', function(){
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    };
    
    console.log('Objeto:');
    console.log(pelicula);
    
    console.log('Titulo: ' +pelicula.titulo);
    pelicula.titulo = "Batman Caballero de la Noche";
    console.log('Titulo modificado: ' +pelicula.titulo);
    
    /*--- Array de objetos: ---*/
    var peliculas = [
        {titulo: 'Pitch Perfect', year: '2012', pais: 'Estados unidos'},
        {titulo: 'Pitch Perfect 2', year: '2015', pais: 'Estados unidos'},
        {titulo: 'El secreto de sus ojos', year: '2011', pais: 'Argentina'}
    ]
    console.log('Array de objetos: ');
    console.log(peliculas);
    
    var divPeliculas = document.querySelector("#peliculas");
    for(let i in peliculas){
        let h5 = document.createElement("h5");
        h5.append(peliculas[i].titulo);
        divPeliculas.append(h5);
    }
});
