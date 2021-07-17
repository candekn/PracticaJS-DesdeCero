'use strict'
/*-------Fetch y peticiones a servicios/APIs REST------*/
window.addEventListener('load', function(){

    //Funcion que nos listará el nombre de los usuarios:
    function listarUsuarios(usuarios){
        usuarios.map((usuario, i) =>{
            let nombre = document.createElement('h4');
            nombre.innerHTML = i+1 + ". " + usuario.name;
            document.querySelector(".loading").style.display = 'none';
            document.querySelector("#usuarios").appendChild(nombre);
        });
    }
    
    //Fetch a todos los usuarios:
    function getUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    }

    //Fetch a un usuario
    function getUsuario(id){
        return fetch('https://jsonplaceholder.typicode.com/users/'+id);
    }

    function listarUsuario(usuario){
        let nombre = document.createElement('h4');
        nombre.innerHTML = JSON.stringify(usuario);
        document.querySelector(".loading").style.display = 'none';
        document.querySelector("#usuario").appendChild(nombre);
    }

    getUsuarios().then(data => data.json()) //Capturamos los datos y los convertimos a tipo json
        .then(data => { //Mediante la función a anónima, trabajamos con los datos ya convertidos
            listarUsuarios(data);  
            return getUsuario(1);
        })
        .then(data => data.json())
        .then(usuario => {
            listarUsuario(usuario);
        })
})