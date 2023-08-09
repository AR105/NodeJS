let rol;

const getPerfil = (id, callback) => {

    setTimeout(() => {
        rol = 'ADMIN';
        callback(rol);
    }, 1000);
}

getPerfil(23, () => {
    console.log(`El perfil es ${rol}`);
});