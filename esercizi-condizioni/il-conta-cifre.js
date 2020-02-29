/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var int_numero = 100;

if(int_numero <= 9999 && 0 < int_numero){
  var tmp;
  if(int_numero<10){
    console.log('1 cifre');}
  else if(int_numero<100){
      console.log('2 cifre');}
  else if(int_numero<1000){
    console.log('3 cifre');}
    else{console.log('4 cifre');}
}
else{
  console.log('Il numero deve essere Naturale e di max 4 cifre');
}
