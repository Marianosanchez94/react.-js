//iteradores de array 
//uno de los iteredadores mas comunes es el for For each, en react se utilizan each o MAp o filter. cada uno realiza algo disitno 

const tecnologias = ["Javascript","Python","React","Sql","C++"];

//For Each va recorrer en cada obj del array 
const withForEach = tecnologias.forEach(function(tech){
    return tech;
})

//En react se usa mas el map por que no te puede crear un nuevo array
const withMap = tecnologias.map(function(tech){
    return tech;
})

console.log(withMap);
console.log(withForEach);