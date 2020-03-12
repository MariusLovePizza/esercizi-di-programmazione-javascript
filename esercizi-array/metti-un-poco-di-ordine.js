/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)   // Edit: okay

  http://www.imparareaprogrammare.it
*/
//
// array di 10 nr.
var arr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
console.log(arr+"\n\n");
//
// ordine descrescente
//
var tmp;
for(let x=0; x < arr.length-1; x++){
    //    prende l'elem x
    //
    for(let i= x+1; i<arr.length; i++){
        //
        if( arr[x]< arr[i] ){
          // console.log(arr[x]);
           tmp = arr[x];               // prendo il nr piu piccolo e metto in tmp
           arr[x] = arr[i];             // il nr piu' grande metto nella posizione x
           arr[i] = tmp;               // quello + piccolo rimetto al posto di quell'altro
           // console.log(arr[x]);
        } //
      // esco dal for con il numero piu' grande nella posizione di x, e vado a vanti 
      }
//
//
}
console.log(arr);
