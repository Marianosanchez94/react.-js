//unir 2 objetos o mas 

const clientes = {
    name : "Mariano",
    apellido : "Sanchez",
    edad : 28,
};

const productos = {
    name : "Iphone",
    modelo : "Xs"
};

const nuevoObj = {
    productos : {...productos},
    clientes: {...clientes}
}
console.log(nuevoObj);

//... con tres puntitos copio todo el valor del objeto. 