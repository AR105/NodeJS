const empresa = {
    nombre: 'Pepsi',
    direccion: 'Calle x',
    rol: 'Venta de refrescis'
}

const { nombre, rol } = empresa;
console.log(nombre);
console.log(rol);


const imprimirEmpresa = ({ nombre, rol }) => {
    console.log({ nombre, rol });
}

imprimirEmpresa(empresa);

const carros = ['a', 'b', 'c'];
const [, , l3] = carros;
console.log(l3);


