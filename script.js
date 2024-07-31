console.log('JS ok')

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// *Nota
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Consigli:
// Fate la scaletta degli step e commentate man mano che scrivete il codice
// Usate i console.log per verificare che tutto sia a posto
// Disattivate live server: può darvi problemi coi prompt.
// Bonus
// Stampare il prezzo finale sulla pagina invece che in console
// Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
// Abbellire col CSS


// 1 - Chiedere al passeggero il numero di km che vuole percorrere
// 2 - Chiedere al passeggero l'età
// 3 - Calcolare prezzo totale del viaggio (sapendo che costa 0.21€ a km, e che va applicata una % di sconto per i minorenni, ed un'altra per gli over 65)
// 4 - Stampare il risultato





//? FASE PREPARATORIA (cosa posso prepararmi da solo all'inizio?)
// Alert di benvenuto
alert('Benvenuto, ti chiederemo dei dati per creare il tuo biglietto')

//? FASE RACCOLTA DATI
// 1 - Chiedere al passeggero il numero di km che vuole percorrere
const kmNeeded = parseInt(prompt("Quanti kilometri dovrai percorrere?"));
console.log('Km-request', kmNeeded);

// 2 - Chiedere al passeggero l'età
const age = parseInt(prompt("Quanti anni hai?"));
console.log('Age', age);

//? FASE DI ELABORAZIONE
//Calcolo del prezzo base del biglietto per km
const baseTicket = kmNeeded * 0.21;
console.log('Base Ticket', baseTicket)

//Calcolo percentuale di sconto se minorenne oppure over 65
let costumerTicket = baseTicket;
//se minorenne
if (age < 18) {
    costumerTicket *= 0.8;
    //se over 65
} else if (age >= 65) {
    costumerTicket *= 0.6;
}

//aggiungo due decimali al prezzo del biglietto, e il valore euro
costumerTicket = costumerTicket.toFixed(2) + '€';
console.log('Ticket Price', costumerTicket)


//? FASE DI OUTPUT
//alert con il prezzo del biglietto
alert(`Grazie per averci scelto! Il prezzo del tuo biglietto è: ${costumerTicket}`)