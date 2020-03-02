/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
var inp = 5;
var i = 0;
var string = "";

while(i<=50){
  string = string + i+" ";
  i=i+5;
}

console.log("\nOutput: "+string);
