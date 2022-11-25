
// Chiedere all'utente di inserire il numero di chilometri che vuole percorrere;
let distance = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));
const price_km = 0.21;
let part_price = (distance * price_km);
console.log(part_price);

// Chiedere all'utente di inserire la sua età;
let age = parseInt(prompt('Inserisci la tua età'));
console.log(age);

let final_price

if (age < 18){
    final_price = (part_price - (part_price * 0.2));
    console.log(final_price);
}
else if (age >= 65){
    final_price = (part_price - (part_price * 0.4));
    console.log(final_price);
}
else{
    final_price = part_price;
    console.log(final_price);
}



// Restituire a schermo la password.
document.getElementById('pippo').innerHTML = 'Il prezzo del biglietto è:' + final_price;
