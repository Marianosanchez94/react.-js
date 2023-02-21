// arrays
const tecnologias = ["Javascript","Python","React","Sql","C++"]

//Agregar un obejto al array 
   // const nuevoTech = [...tecnologias,"Java"] // se agrega al final
   // const nuevoTech = ["Solidity",...tecnologias] //se agrega al principio

//Eliminar un objeto del array 
// const nuevoTech = tecnologias.filter(function(tech){
//     //return tech === "React";// me trae solo react
//     return tech !== "React"; //me trae todo menos react  
// })

//Modificar un objeto del array 
const nuevoTech = tecnologias.map(function(tech){
    if(tech === "Sql"){
        return "Java";
    }else {
        return tech;
    }
})






console.table(tecnologias);
console.table(nuevoTech);