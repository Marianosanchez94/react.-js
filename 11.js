//ternarios

const saldo = 700;
const gasto = 800;
const tarjeta = true;

saldo > gasto ? console.log("Si puedes pagar") : 
        tarjeta ? console.log("Puedes pagar con tarjeta") :
        console.log("No Puedes pagar")