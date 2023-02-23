//metodos en arrows 
const tecnologias = ["Javascript","Python","React","Sql","C++"];
const numeros = [10,20,30];

let newArray;

//Mediante filter podemos filtrar 1 objeto y crear un nuevo array 
newArray = tecnologias.filter(tech => tech === "Python")


//Mediante includes podemos preguntar si dentro del array existe tal objeto
// newArray = tecnologias.includes("Java"); // Retorna False

//mediante some podemos preguntar si dentro del array algun obj cumple con la condicion
// const resultado = numeros.some(numero => numero > 10) retorna true porque hay minimo un numero que es mayor a 10 

//mediante find podemos saber cual es el que cumple la condicion y nos retorna el primer numero que cumpla con esta condicion 
// const resultado = numeros.find( numero => numero > 15) // retorna 20 porque es el primer numero mayor a 15

//Mediante Every - podemos saber si todos los objetos cumplen la condicion a diferencia de some que solo te dice si uno cumple con la condicion 
// const resultado = numeros.every(numero => numero > 15) // retorna false 

//Reduce - es un metodo que va acumulando los valores y genera un nuevo valor 
// const resultado = numeros.reduce((valoracumulado, valor) => valoracumulado + valor , 0)// retorna 60

//For each y map volvemos a verlo 
tecnologias.forEach((tech,index) => console.log(index))

const arrayMap = tecnologias.map(tech => tech)





console.log(arrayMap);