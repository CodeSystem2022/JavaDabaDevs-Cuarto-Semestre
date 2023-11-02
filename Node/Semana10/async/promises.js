/*
Las promesas son una sintaxis mas elegible a realizar que los callbacks creando un codigo mas escalable
Una promesa no deja de ser un callback, con la novedad de tener estados. Cuenta con tres estados: Resuelta, en progresoy en fallo.
Las promesas dan un estado, son una clase global que podemos llamar de donde sea. Hacemos que nuestras funsciones devuelvan promesas. 
La diferencia entre promise y callbacks es la capacidad de anidar promesas formando una cadena, muy util para visualizar codigo asincrono.
Para utilizarla solo debemos instanciar una nueva, una promesa en si es una funcion que recibe dos parametros, el de Resolve y Reject que son los dos estados de una promesa.
Utilizamos Resolve para retornar el valor deseado cuando una funcion se ejecute.
Utilizamos Reject cuando una funcion retorna un valor no deseado, podriamos hablar de hasta un error.
Para poder obtener los valores que retorna una funcion debemos utilizar su propiedad ".dem".
Esta propiedad es una fincion que recibe un callback que tendra como parametro el valor retornado con Resolve, retorna la respuesta de lo que ah resuelto, 
O lo que es Reject, rechazar, estos dos parametros son funciones dentro de lo que es la promesa.
Siempre de que usemos la promesa ademas de realizar la propiedad o metodo que en este caso seria el ".dem" debemos invocar otra propiedad que es el ".catch" la cual es un callback que recibe comom parametro el error ocurrido en caso de que aya susedido uno.
*/

function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => { // usamos la sintaxis ES6
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

//Función asincrona - adios
function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); //forma correcta de concatenar
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
}

//llamamos a la función
console.log('Iniciando el proceso...');
hola('Ariel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios) //.then retorna un valor
    .then((nombre) => {
        console.log('Terminando el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error: ');
        console.log(error);
    })
