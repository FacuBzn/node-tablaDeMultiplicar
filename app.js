const { crearArchivo } = require("./helpers/multiplicar");
const argv = require ("./config-yargs/yargs");
const colors = require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.bold, 'Fue creado exitosamente'.rainbow))
    .catch(err => console.log(err));


//const base = 15;  
/* const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base=8] = arg3.split('='); */ 

/* for (let i = 1 ; i <= 10; i++) {

    let tabla = base * i;
    let frase = `${base} x ${i} = `
    x = (frase + tabla);
    console.log(x);
} forma de poder hacer tambien una tabla de multiplicar,
console.log(x); */
