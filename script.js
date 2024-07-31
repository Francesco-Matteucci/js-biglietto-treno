
//? FASE PREPARATORIA
console.log('JS ok')
//* Recupero elemento interessato dal DOM
const resultElement = document.getElementById('result');
console.log('div-Risultato', resultElement);

//* Alert di benvenuto
alert('Benvenuto, ti chiederemo dei dati per creare il tuo biglietto')

//? FASE RACCOLTA DATI
//* 1 - Chiedere al passeggero il numero di km che vuole percorrere
const kmNeeded = parseInt(prompt("Quanti kilometri dovrai percorrere?", 100));
console.log('Km-request', kmNeeded);

//* 2 - Chiedere al passeggero l'età
const age = parseInt(prompt("Quanti anni hai?", 18));
console.log('Age', age);

//? FASE DI ELABORAZIONE
//! validation
if (isNaN(kmNeeded) || isNaN(age)) {
    alert('Non ha inserito dei numeri sui campi richiesti')
} else {
    //* Calcolo del prezzo base del biglietto per km
    const baseTicket = kmNeeded * 0.21;
    console.log('Base Ticket', baseTicket)

    //* Calcolo percentuale di sconto se minorenne oppure over 65
    let costumerTicket = baseTicket;
    let discountMessage = '';
    //* se minorenne
    if (age < 18) {
        costumerTicket *= 0.8;
        discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 20% per essere minorenne.';
        //* se over 65
    } else if (age >= 65) {
        costumerTicket *= 0.6;
        discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 40% per essere over 65.';
    }

    //* aggiungo due decimali al prezzo del biglietto, e il valore euro
    costumerTicket = costumerTicket.toFixed(2) + '€';
    console.log('Ticket Price', costumerTicket)

    //? FASE DI OUTPUT
    //alert con il prezzo del biglietto
    // alert(`Grazie per averci scelto! Il prezzo del tuo biglietto è: ${costumerTicket}`)

    resultElement.innerHTML = `Grazie per averci scelto! Il prezzo del tuo biglietto è: <strong>${costumerTicket}</strong><br><br>
        <i>${discountMessage}</i>`;

}


