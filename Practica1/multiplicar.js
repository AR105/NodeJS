const fs = require('node:fs');
const { tablaMultiplicarPromesa } = require('./app3');
const baseMult = require('./config/yargs');

let base = baseMult;
tablaMultiplicarPromesa(base)
    .then(base => {
        console.log(`Correcto
        `, base);
    })
    .catch(err => {
        console.log('Error');
    })