/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var g1 = Math.floor(Math.random()*100);
var g2 = Math.floor(Math.random()*100);

var caso= Math.floor(Math.random()*100);
console.log("Output: Numero casuale generato = "+caso+", g1: "+g1+", g2: "+g2+"\n\n");

if(g1==caso){
  console.log("Il giocatore 1 ha azzeccato, valore: "+g1);
}
else if(g2 == caso){
  console.log("Il giocatore 1 ha azzeccato, valore: "+g2);
}
else if(Math.abs(g1-caso)<Math.abs(g2-caso)){
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più, g1: "+g1);
}
else if(Math.abs(g1-caso)>Math.abs(g2-caso)){
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più, g2: "+g2);
}
else if(Math.abs(g1-caso)==Math.abs(g2-caso)){
  console.log("Nessuno dei due ha azzeccato il numero casuale, stessa distanza: "+Math.abs(g1-caso));
}
