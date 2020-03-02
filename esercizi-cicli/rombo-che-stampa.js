/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.

  http://www.imparareaprogrammare.it
*/

var input = Math.floor(Math.random()*9+1);
var tab;
var string;

if((input&2)==0){
  tab = input /2;
  input = input + 1;
}
else{tab = (input-1)/2;}
console.log("Numero dispari: "+input);

for(var i=1; i<=input;i++){
  


}
