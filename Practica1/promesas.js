const empleados = [

    {
        id: 1,
        nombre: 'Adrian',

    }, {
        id: 2,
        nombre: 'Alonso',

    }, {
        id: 3,
        nombre: 'Alejandra',

    }
];

const salarios = [

    {
        id: 1,
        salario: '10K'

    }, {
        id: 2,
        salario: '20K'

    }, {
        id: 3,
        salario: '30K'

    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(s => s.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe el salario con id ${id}`);
    });
}

const id = 3;


/*getEmpleado(id)
    .then(empleado => { console.log(empleado) })
    .catch(err => console.log(err));


getSalario(id)
    .then(salario => { console.log(salario) })
    .catch(err => console.log(err));*/


getEmpleado(id)
    .then(empleado => {
        console.log(empleado);
        getSalario(id)
            .then(salario => console.log(salario))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
