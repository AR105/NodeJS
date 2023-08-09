const obtenerTitulo = (titulo, callback) => {
    let text = `Bienvenido a ${titulo}`;

    setTimeout(() => {
        callback(text);
    }, 5000);
}

const crearTItulo = (t) => {
    console.log(t);
}

obtenerTitulo('EL DESMAIE', crearTItulo);