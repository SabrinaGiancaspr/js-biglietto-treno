// # calcolo del prezzo del biglietto del treno

// -chiedere all'utente l'età
//   -assegnare variabile
//   -dichiarare variabile con indicata l'età
  let age;
  age = prompt('quanti anni hai?');
  console.log(age);

// -chiedere il numero di chilometri che vuole percorrere
//   -assegnare variabile
//   -dichiarare variabile con indicati i km da percorrere
  let km;
  km = prompt('quanti km devi percorrere?');
  console.log(km);

// -prezzo per km (0.21 euro)
//   -assegnare variabile
//   -dichiarare variabile prezzo fisso per km
  const priceForKm = 0.21;

// -sconto 20% per minorenni
//   -assegnare variabile
//   -dichiarare variabile con la percentuale di sconto dei minorenni
  let percentDiscountUnderage = 20;

// -sconto 40% per over 65
//   -assegnare variabile
//   -dichiarare variabile con la percentuale di sconto dei over 65
  let percentDiscountOver65= 40;

// -calcolo prezzo pieno in base ai km da percorrere
//   -assegnare variabile
//   -dichiarare variabile del prezzo pieno generale
  let fullprice;
  fullprice = km * priceForKm;
  console.log(fullprice);

// -calcolo sconto per ragazzi minorenni
//   -assegnare variabile
//   -dichiarare variabile del prezzo con sconto minorenni
  let discountUnderage = (fullprice * percentDiscountUnderage) / 100; 

// -calcolo sconto per over 65
//   -assegnare variabile
//   -dichiarare variabile del prezzo con sconto over 65
let discountOver65 = (fullprice * percentDiscountOver65) / 100; 

// -prezzo finale biglietto
let finalPrice;

//  condizionali
 if (age < 18) { //se è minorenne applica sconto 20%
  finalPrice = fullprice - discountUnderage;
} else if (age > 65) { //se è over 65 applica sconto 40%
  finalPrice = fullprice - discountOver65;
} else { // se non è nessuno dei due calcolo biglietto prezzo intero senza nessuno sconto
  finalPrice = fullprice;
}

// cifra con massimo due decimali
finalPrice = Number(finalPrice.toFixed(2)); 

console.log(finalPrice);

// stampa html
let prezzo = finalPrice;
const prezzoDomElement = document.getElementById('prezzo');
prezzoDomElement.innerHTML = prezzo;
