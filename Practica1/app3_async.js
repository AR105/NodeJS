const fs = require('node:fs');

const tablaMultiplicarAsync = async (base) => {
    try {
        console.log(`Tabla de multiplicar del ${base}`);

        let tabla = '        ';

        for (let i = 1; i <= 10; i++) {
            tabla += `${base} x ${i} = ${base * i}
            `;
        }

        console.log(tabla);
        fs.writeFileSync(`Tabla-del-${base}.txt`, tabla);

        return tabla;
    } catch (err) {
        console.log('Error');
        throw (err);
    }

};

tablaMultiplicarAsync(6);