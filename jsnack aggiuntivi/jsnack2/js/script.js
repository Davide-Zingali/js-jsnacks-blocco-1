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

// //jsnack 2
// dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
console.log('Array Originale: ', arrayObj);

// funzione per lettera random
function ranDom() {
  var arrayLettera = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'T', 'Z'];
  var randomLettera = arrayLettera[Math.floor(Math.random() * arrayLettera.length)];

  return randomLettera
}

// nuova array vuota
var nuovaArrayObj = [];

for(i = 0 ; i < arrayObj.length; i++){
  var nuovoOggetto = {}

  for(key in arrayObj[i]){
    nuovoOggetto[key] = arrayObj[i][key];
  };

  // aggiungo position ad ogni oggetto
  nuovoOggetto.position = ranDom();

  // pusho ogni oggetto alla nuova array
  nuovaArrayObj.push(nuovoOggetto);
}

// stampo array copiata
console.log('Array non originale', nuovaArrayObj);