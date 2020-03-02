/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
// yourchoice = prompt("Choose a number between 1 and 4", "1, 2, 3 or 4")
var voto = Math.floor(Math.random()*(30-15)+15);

console.log("Voto: "+voto+"\n\n");

switch (true) {
  case (voto<18):
    console.log("insufficiente");
    break;

  case (voto<21):
    console.log("sufficiente");
    break;

  case voto<24:
    console.log("buono");
    break;

  case voto<27:
    console.log("distinto");
     break;

  case voto<30:
   console.log("ottimo");
    break;
  case voto===30:
    console.log("Eccelente");
    break;

  default: console.log("il voto inserito non è valido");

}
