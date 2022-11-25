
// Chiedere all'utente di inserire il numero di chilometri che vuole percorrere;
let distance = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));


// Chiedere all'utente di inserire la sua età;
let age = parseInt(prompt('Inserisci la tua età'));

// Calcolare il prezzo del biglietto in base al prezzo per chilometro (0.21 € al km) e tenendo conto dell'eventuale scontistica nel caso l'età dell'utente soddisfi uno dei seguenti requisiti:
const price_km = 0.21;
let part_price = (distance * price_km);

let final_price
// SE L'utente è minorenne
//         ALLORA ha diritto ad uno sconto del 20%;
//     SE L'utente ha più di 65 anni 
if (age < 18){
    final_price = (part_price - (part_price * 0.2));
}

// SE L'utente ha più di 65 anni 
//         ALLORA ha diritto ad uno sconto del 40%; 
else if (age >= 65){
    final_price = (part_price - (part_price * 0.4));
}
// SE L'utente è maggiorenne ma ha meno di 65 anni 
//         ALLORA non ha diritto allo sconto;

else{
    final_price = part_price;
}

// Restituire a schermo la password.
document.getElementById('client_price').innerHTML = 'Il prezzo del biglietto è:'+ " " + final_price.toFixed(2) +" "+ "&euro;";
