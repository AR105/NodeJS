const fs = require('node:fs');

const tablaMultiplicar = (base) => {
    //console.log(`Tabla de multiplicar del ${base}`);

    let tabla = '        ';

    for (let i = 1; i <= 10; i++) {
        tabla += `${base} x ${i} = ${base * i}
        `;
    }

    //console.log(tabla);
    fs.writeFileSync(`Tabla-del-${base}.txt`, tabla);
};

tablaMultiplicar(5);


/*-------------------------------------------------*/

const tablaMultiplicarAsync = async (base) => {
    try {
        //console.log(`Tabla de multiplicar del ${base}`);

        let tabla = '        ';

        for (let i = 1; i <= 10; i++) {
            tabla += `${base} x ${i} = ${base * i}
            `;
        }

        //console.log(tabla);
        fs.writeFileSync(`Tabla-del-${base}.txt`, tabla);

        return tabla;
    } catch (err) {
        console.log('Error');
        throw (err);
    }

};

/*-------------------------------------------------*/

const tablaMultiplicarPromesa = (base) => {

    return new Promise((resolve, reject) => {
        //console.log(`Tabla de multiplicar del ${base}`);
        let tabla = '';
        for (let i = 1; i <= 10; i++) {
            tabla += `${base} x ${i} = ${base * i}
        `;
        }
        (tabla)
            ? resolve(tabla)
            : reject(`No fue posible generar la tabla del ${base}`);

        //console.log(tabla);
        fs.writeFileSync(`Tabla-del-${base}.txt`, tabla);
    });
};

//tablaMultiplicarPromesa(8);

/*-------------------------------------------------*/

module.exports = {
    tablaMultiplicar,
    tablaMultiplicarAsync,
    tablaMultiplicarPromesa
}