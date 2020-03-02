/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var num1= Math.floor(Math.random()*99 +1);
var num2= Math.floor(Math.random()*99 +1);
var int_opp = Math.floor(Math.random()*6 +1);
var str_opp;

console.log("n1: "+ num1+", n2: "+ num2+", int_opp1: "+ int_opp);

switch (int_opp) {
  case 1:
    str_opp = "somma";
    break;

  case 2:
    str_opp = "sottrazione";
    break;

  case 3:
    str_opp = "moltiplicazione";
    break;

  case 4:
    str_opp = "divisione";
    break;

  case 5:
    str_opp = "modulo";
    break;
  case 6:
    str_opp = "potenza";
     break;
     case 7:
       str_opp = "media";
       break;
     default:

        break
}

console.log("Operazione:" + str_opp+"\n\n");

switch (str_opp) {
  case "somma":
    var s=num1+num2;
    console.log("Somma: " + s);
    break;
  case "sottrazione":
    var s=num1-num2;
    console.log("sottrazione: " + s);
    break;
  case "moltiplicazione":
    var s=num1*num2;
    console.log("moltiplicazione: " + s);
    break;
  case "divisione":
     var s=num1/num2;
     console.log("Somma: " + s);
     break;
  case "somma":
    var s=num1+num2;
    console.log("Somma: " + s);
    break;

  default:
    console.log("La faticaa...")
    break
}
