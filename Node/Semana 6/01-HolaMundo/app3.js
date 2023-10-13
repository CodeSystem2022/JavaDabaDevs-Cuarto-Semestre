
//Carolina
console.log('Inicio del programa'); // 1

setTimeout(()=>{
    console.log('Primer Timeout'); // 5
}, 3000); //agregamos el tiempo en milisegundos

setTimeout(()=>{ //En este caso cae en un stack de procedimientos que ejecutará después
    console.log('Segundo Timeout'); // 3
}, 0); 

setTimeout(()=>{
    console.log('Tercer Timeout'); // 4
}, 0); 

console.log('Fin del programa'); // 2

//Instrucciones NO bloqueantes - Síncronas 