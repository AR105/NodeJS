const perfil = {
    nombre: 'Adrian',
    apeelido: 'Rios',
    correo: 'gadrian@gmail.com',
    salario: '$1k'
}

const imprimirDatos = ({ nombre, salario }) => {
    console.log({ nombre, salario });
}

imprimirDatos(perfil);