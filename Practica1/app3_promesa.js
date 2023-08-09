const fs = require('node:fs');

const tablaMultiplicarPromesa = (base) => {

    return new Promise((resolve, reject) => {
        console.log(`Tabla de multiplicar del ${base}`);
        let tabla = '        ';
        for (let i = 1; i <= 10; i++) {
            tabla += `${base} x ${i} = ${base * i}
        `;
        }
        (tabla)
            ? resolve(tabla)
            : reject(`No fue posible generar la tabla del ${base}`);

        console.log(tabla);
        fs.writeFileSync(`Tabla-del-${base}.txt`, tabla);
    });
};

tablaMultiplicarPromesa(8);