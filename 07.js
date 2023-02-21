/*Funciones xpresivas y declarativas
se diferencia por que las declarativas pueden llamar a la funcion de cualquier parte y la xpresivas no ya que forman parte de una varibale const 
 */

//function declaration
// function suma(){

// }

// //Function expresiva podemos utilizar arrow functions y facilitan el codigo
// const suma = function() {

// }

//Podemos realizar retornos de valores y formas arrays dentro

const arr = function(num,num2){
    return [num + num2, "Destructurar y llamar por disntito"];

}
//const [resultado] = arr(20,30) //solo llamaremos al resultado 
// const [resultado, mensaje] = arr(20 , 30) // llamamos a los 2 objetos del array
const [ , mensaje] = arr(); // elejimos el segundo elemento del objeto

// console.log(resultado);
console.log(mensaje);