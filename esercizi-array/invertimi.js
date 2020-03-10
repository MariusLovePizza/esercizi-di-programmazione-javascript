/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

//  N numero casuale.
const N_casuale = Math.floor(Math.random()*14);
console.log("Stampo N: "+N_casuale);

var arr_NrCas = [];   // array di N nr casuali
var arr_invers= []; // l'inverso di un array


var invertito = [];
// iteriamo per ottenere l'array di N numeri
for(let i=0; i < N_casuale ; i++){

    arr_NrCas.push(Math.floor(Math.random()*10));
}
console.log("\nArray nr casuali: "+arr_NrCas+"\n\n");
var experimento = arr_NrCas;
console.log("\nArray experimento: "+experimento+"\n\n");

// iniziamo ad invertire
//arr_invers = arr_NrCas.reverse();

// stampiamo
//console.log("\nArray inverso: "+arr_invers+"\n\n");
//console.log("\nArray inverso con reverse su se stesso: "+arr_NrCas+"\n\n");

// metodo tradizionale:

for(let x=0; x<arr_NrCas.length; x++){
//  let index = arr_NrCas.length-x;
    invertito[x] = experimento[arr_NrCas.length-1-x];

}
console.log("\nArray invertito: "+ invertito +"\n\n");
