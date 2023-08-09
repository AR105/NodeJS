const argv = require('yargs').
    option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base inicial de la tabla de multiplicación'
    }).argv;
//const argv = require('yargs').argv;


//console.log(argv);
//console.log(argv.base);

/*
const arg = process.argv;
console.log(arg[2]);

let base = arg[2].split('=');
console.log(base);
*/

const baseMult = argv.base;
module.exports = baseMult;