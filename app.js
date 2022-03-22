const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log(process.argv);
console.log(argv);

// console.log('base yarg: ', argv.base);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=')
// console.log(base);

// const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log( err ));

