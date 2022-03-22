const argv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            description: 'Es la base de la tabla de multiplicar'
                        },
                        'l': {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            description: 'Lista en consola la tabla de multiplicar'
                        },
                        'h': {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            description: 'Es hasta que numero será la multiplicación'
                        }
                    })
                    .check( (argv, options) => {
                        if( isNaN( argv.b) ){
                            throw 'La base tiene que ser un numero';
                        }
                        if( isNaN( argv.h) ){
                            throw 'La limite tiene que ser un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;