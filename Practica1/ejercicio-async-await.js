const roles = [

    {
        id: 1,
        rol: 'Desarrollador',

    }, {
        id: 2,
        rol: 'Administrador',

    }, {
        id: 3,
        rol: 'Empleado',

    }
];

const getRol = (id) => {
    return new Promise((resolve, reject) => {
        const rol = roles.find(s => s.id === id)?.rol;

        (rol)
            ? resolve(rol)
            : reject(`No existe el rol con id ${id}`);
    });
}

const getInfoRol = async (id) => {
    try {
        //const rol = await getRol(id);
        return new Promise((resolve, reject) => {
            const rol = roles.find(s => s.id === id)?.rol;

            (rol)
                ? resolve(`El rol con id ${id} es ${rol}`)
                : reject(`No existe el rol con id ${id}`);
        });

        //return `El rol con id ${id} es ${rol}`;
    } catch (err) {
        throw err;
    }
}

const id = 1;

getInfoRol(id)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });