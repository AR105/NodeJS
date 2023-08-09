const empleados = [
    {
        id: 1,
        nombre: 'Adrian'
    },
    {
        id: 2,
        nombre: 'Roberto'
    },
    {
        id: 3,
        nombre: 'Fernando'
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`No existe el empleado con id ${id}`);
    }
}

getEmpleado(5, (error, empleado) => {
    if (error) {
        return console.log(error);
    } else {
        console.log(empleado);
    }
});