/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

// generiamo questi 2 array random: di 10 num, con ripetizione o senza. facciamo in ambedue i modi per cimentificare
var arr1 = []
var arr2= [];

// var boolean per il controllo if

//
// iteriamo 10 volte, nr casuali e senza ripetizioni
// let n=0;

//
for(let x=0; x < 10 ;  ){
      //
      let nr_estratto = Math.floor((Math.random()*10+1));  // genero nr casuale
      // let y = lotteria.length;
      let t = arr1.includes(nr_estratto);
      if( t==false){
        arr1.push(nr_estratto);
        x++;  // qui incremento il valore per il for. incremento solo quando metto un valore effettivo
      }
}
// iteriamo 10 volte a caso
for(let i=0; i<10;i++){
    arr2.push(Math.floor(Math.random()*10+1));
}
//
// stampiamo
console.log("arr1: "+arr1+"\n\n");
console.log("arr2: "+arr2+"\n\n");
//
// addizione
let somma=[];
for(let b=0; b<10; b++){
  somma[b]=arr1[b]+arr2[b];
}
console.log("\n\nSomma tra array:\n");
console.log(somma);
//
// sottrazione
let sottrazione=[];
for(let b=0; b<10; b++){
  sottrazione[b]=arr1[b]-arr2[b];
}
console.log("\n\nSottrazione tra array:\n");
console.log(sottrazione);
//
// sottrazione
let moltiplicazione=[];
for(let b=0; b<10; b++){
  moltiplicazione[b]=arr1[b]*arr2[b];
}
console.log("\n\nmoltiplicazione tra array:\n");
console.log(moltiplicazione);
