//destructuring arrays
const tecnologias = ["Javascript","Python","React","Sql","C++"];

const [ , , , , t5] = tecnologias;

console.log(t5);

//de esta forma se puede extraer un objeto del array. Ya que si llamamos directamente un objeto nos va a traer la primer posicion del index.





// en cambio en el objeto si quiero traer un objeto es especifico, este trae el valor. 
const obj = {
    name : "Juan",
    apellido : "Oro"
};

const {name} = obj;
console.log(name)