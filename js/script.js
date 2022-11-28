
// Chiedere all'utente di inserire il numero di chilometri che vuole percorrere;
let distance = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));
console.log("La distanza che l'utente ha inserito inserito è" + " " + distance + 'km')


// Chiedere all'utente di inserire la sua età;
let age = parseInt(prompt('Inserisci la tua età'));
console.log("L'età dell'utente è"+ " " + age +" "+ "anni")
// Calcolare il prezzo del biglietto in base al prezzo per chilometro (0.21 € al km) e tenendo conto dell'eventuale scontistica nel caso l'età dell'utente soddisfi uno dei seguenti requisiti:
const price_km = 0.21;
let part_price = (distance * price_km);
console.log('Il prezzo parziale è' + " " + part_price + '€')
let final_price
// SE L'utente è minorenne
//         ALLORA ha diritto ad uno sconto del 20% ed il prezzo è arrotondato 2 decimali;
if (age < 18){
    final_price = (part_price - (part_price * 0.2).toFixed(2));
    console.log("L'utente è minorenne, ha diritto allo sconto del 20%, il prezzo finale è" + " " + final_price + '€')
}
// SE L'utente ha più di 65 anni 
//         ALLORA ha diritto ad uno sconto del 40% ed il prezzo è arrotondato 2 decimali; 
else if (age >= 65){
    final_price = (part_price - (part_price * 0.4)).toFixed(2);
    console.log("L'utente ha un'età maggiore o uguale a 65 anni, ha diritto allo sconto del 40%, il prezzo finale è" + " " + final_price + '€')
}
// SE L'utente è maggiorenne ma ha meno di 65 anni 
//         ALLORA non ha diritto allo sconto ed il prezzo è arrotondato 2 decimali;
else{
    final_price = part_price.toFixed(2);
    console.log("L'utente ha tra i 18 ed i 65 anni , non ha diritto allo sconto, il prezzo finale è" + " " + final_price + '€')
}
