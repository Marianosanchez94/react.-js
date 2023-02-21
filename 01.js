//Manipulacion de objeto 
const clientes = {
    name : "Mariano",
    apellido : "Sanchez",
    edad : 28,
};

//Puedo hacer que nadie pueda modificar es objeto
//Object.freeze(clientes);

//Puede evitar que modifiquen el agregar o eliminar un elemnto pero si puedo cambiarle el valor
Object.seal(clientes);



clientes.name = "Milagros";
clientes.edad = 25;
// Tambien podes agregar un objeto.
clientes.carrera = "Medicina";
//Delete
delete clientes.edad

//Puedo hacer que nadie pueda modificar es objeto


console.table(clientes)

