/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var time = 0;
var input = 12560;
var ore ;
var min ;
var sec ;
var tmp;

ore = parseInt(input/3600);  // tronco e trovo le orange
tmp = input-(ore*3600);

min = parseInt(tmp/60); // tronco i minuti
sec = tmp-(min*60);

console.log("Output: "+ore+ " ore, "+min+" minuti e "+sec+" secondi.");
