/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/


var a = [3, 5, 10, 2, 8];
var sum =0;
var minore=[];
var maggiore =[];

for(let i =0; i< a.length ;i++){
    //console.log("val:" + a[i]);
    sum = sum + a[i];
}
console.log("sum: "+sum);
// calcolo la media
var media = sum/(a.length);
console.log("media: "+media);

// costruisco una funzione per il filtro: con metodo vecchio
function minSum(param){
  return param < media;
}

minore = a.filter(minSum);

// utilizziamo il nuovo metodo per scrivere le func
maggiore = a.filter(el => el>media);

console.log("media: "+media);
console.log("val minori: "+minore+", val maggiori: "+ maggiore);
