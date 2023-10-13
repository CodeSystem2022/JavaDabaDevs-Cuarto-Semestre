
function hola(nombre, miCallback){
    setTimeout( function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
}

//Función asíncrona - adiós
function adios(nombre, otrocallback) {
    setTimeout(function(){
        console.log('Adiós '+ nombre);
        otrocallback();
    }, 1500);   
}

console.log('Iniciando el proceso...');

hola('Marita', function(nombre) {
    adios(nombre, function(){
        console.log('Terminando el proceso...');    
    });
});

//hola('Marita', function(){});
//adios('Marita', function(){});

