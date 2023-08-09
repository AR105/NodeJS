const getUserId = (id_param, callback) => {
    console.log(`El id recibido es ${id_param}`);
    const user = {
        id: 1,
        nombre: 'Adrián'
    }

    setTimeout(() => {
        callback(user);
    }, 3000);
}

/*
setTimeout(() => {
    callback(user);
}, 3000);

const getUser = () => {
    console.log('Get User');
}
*/
/**
 * Función Anónimas
 */
getUserId(12, (user) => {
    console.log(`El usuario ${user.nombre}`);
});

/**
 * Función NO Anónima
 */
//getUserId(1, getUser());