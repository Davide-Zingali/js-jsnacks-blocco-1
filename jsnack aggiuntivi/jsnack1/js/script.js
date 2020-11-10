// //jsnack 1
// //Partendo da un array semplice tipo:

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

var arrayNumConfronto = [];

// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
var inputUno = parseInt(prompt('Inserisci un numero da 0 a 5'));

while (arrayNumConfronto.length < 2) {
    var inputDue = parseInt(prompt('Inserisci un numero da 0 a 5'));
    if (inputUno === inputDue) {
        alert('Non puoi inserire numeri uguali')
    } else {
        arrayNumConfronto.push(inputUno);
        arrayNumConfronto.push(inputDue);
    }
}

console.log('Ottengo indici: ' + arrayNumConfronto);

var arrayPN = [];

console.log(myArray[inputUno] + myArray[inputDue]);

var arrayNuovo = [];

for (var i = arrayNumConfronto[0]; i <= arrayNumConfronto[1]; i++) {
    arrayNuovo.push(myArray[i])
}
console.log('ultimo', arrayNuovo);


// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// var arrayNuovo = [];

// for (var i = 0; i < arrayNumConfronto.length; i++) {
//     arrayNuovo.push()
    
// }










// //jsnack 2
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale
// come sempre andate di prompt log etc. semplici e se fate qualcosa in più fate sottocatella bonus