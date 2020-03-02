/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var tiri = Math.floor(Math.random()*9+1) ;
console.log("Tiri N= "+tiri+"\n");

var g1=0 ;
var g2 = 0;
var i = 0;

while(i<tiri){
  g1 = g1+ Math.floor(Math.random()*5+1);
  g2 = g2+ Math.floor(Math.random()*5+1);

  i++;
}

if(g1<g2){
  console.log("Il giocatore 2 ha totalizzato più punti: "+g2 + ", mentre g1 solo: "+g1)
}
else if(g1>g2){
  console.log("Il giocatore 1 ha totalizzato più punti: "+g1+ ", mentre g2 solo: "+g2);
}
else {console.log("Parii, è una cosa incredibile: g1 == g2 == "+ g1);}
