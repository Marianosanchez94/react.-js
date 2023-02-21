// Arrow Functions 
// si tiene varias lineas de codigo y mas de un parametro
const suma = (num,num1) => {
    return num + num1;
}
const resultado = suma(1,9);
console.log(resultado);

//si tiene una sola linea de codigo puedes sacar las llave y dar por asumido el return x ej
const suma1 = (num2,num3) => num2 + num3;

const resultado2 = suma1(2,9);
console.log(resultado2)

//Si tiene un solo parametro puedes hasta evitar los parentesis 
const suma2 = numero => numero * 3;

const resultado3 = suma2(4);
console.log(resultado3);


//Eliminar un objeto del array 
// const nuevoTech = tecnologias.filter(function(tech){
//     return tech === "React";// me trae solo react
//   // return tech !== "React"; //me trae todo menos react  
// })

const tecnologias = ["Javascript","Python","React","Sql","C++"]

const espTech = tecnologias.filter(tech => tech !== "React");
console.log(espTech)