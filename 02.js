//Objetos - destructuring con 2 o mas objetos 

const clientes = {
    name : "Mariano",
    apellido : "Sanchez",
    edad : 28,
};

const productos = {
    name : "Iphone",
    modelo : "Xs"
};

const {name, apellido, edad} = clientes;
const {name : nameIphone, modelo} = productos;

console.log(clientes);
console.log(productos);