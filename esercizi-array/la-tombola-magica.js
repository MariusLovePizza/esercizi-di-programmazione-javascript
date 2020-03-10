/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numer casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
// costrutiamo la lotteria
var lotteria = [];
// array per la lotteria

// itero finche avro' l'array pieno, ma devo trovare il modo di farlo 10 volte senza nr uguali

let x=0;
var t =true;
for(let x=0; x < 10 ;  ){

      let nr_estratto = Math.floor(Math.random()*89+1);  // genero nr casuale
      // let y = lotteria.length;
      var t = lotteria.includes(nr_estratto);
      if( t==false){
        lotteria.push(nr_estratto);
        x++;  // qui incremento il valore per il for. incremento solo quando metto un valore effettivo
      }
}
// riprova:
console.log("Sono uscito dal while, iterazione:" + x);
console.log(lotteria);

// costruiamo l'array con i 10 numeri "scelti da noi"
var nr_noi = [];
var bool = true; // booleano per il controllo if se esiste il numero o no;

for(let n=0; n<10; ){  // anche in questo caso vogliamo un array di 10 numeri senza ripetizioni
      let num = Math.floor(Math.random()*89+1);
      bool = nr_noi.includes(num);
      if(bool== false){
            nr_noi.push(num);
            n++;
      }
}
console.log(nr_noi);

// adesso costruiamo il codice per veder quanti numeri abbiamo azzeccati
var count=0;
nr_noi.forEach((item, i) => {
        if(lotteria.includes(i)){
              count++;
        }
});

// stampiamo le perdite, sappiamo come e' la probabilita' :0000000
if(count===2){
  console.log("2 numeri uguali => ambo : prababilita' = "+(((1/90)*(1/89))*100));
}
else if(count===3){
  console.log("3 numeri uguali => terna : prababilita' = "+(((1/90)*(1/89)*(1/87))*100));
}
else if(count===4){
  console.log("4 numeri uguali => quaterna");
}
else if(count===5){
  console.log("5 numeri uguali => cinquina");
}
else if(count===10){
  console.log("tutti i numeri uguali => tombola");
}
// if(count===0){
//
// }
else if(5<count && count<10){
  console.log("Piu di 5 numeri: ma meno di 10: hai indovinato: " + count);
}
else{console.log("Mi dispiace, hai perso!");}
