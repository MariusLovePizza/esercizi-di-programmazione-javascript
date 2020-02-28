/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
// first commit


var totale=44;
var per_fila=6 ;
var file ;
var rest;
var str_file= "Nr file: ";
var str_manca;

file = Math.ceil(totale/per_fila);
rest = file*per_fila-totale;
        /* test
        console.log(file);
        console.log(rest);
        console.log(44/6);
      */
if (rest != 0){
  str_manca ="Gatti mancanti: " + rest;
} else{
  str_manca = "";
}
console.log(str_file + file + " " + str_manca);
console.log("Al right!");
