//Condicionales con || y && 

const saldo = 700;
const gasto = 800;
const tarjeta = true;

// || aunque una tiene que ser true para que se de la condicion 
// && los 2 tienen que ser true para que se de la condicion

if (saldo > gasto && tarjeta){
    console.log('Puedes pagar') 
} else {
    console.log('No puedes pagar')
}