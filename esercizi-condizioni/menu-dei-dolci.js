/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
console.log('Menu:');
console.log('1. Tiramisu\n2. Torta della nonna \n3. Cheesecake alla nutella \n4. Macedonia\n\n');

var int =3;
if(int==1){
  console.log('Hai scelto il dolce: Tiramisù');
}else if(int==2){
  console.log('Hai scelto il dolce: Torta della nonna');
}
else if(int==3){
  console.log('Hai scelto il dolce: Cheesecake alla nutella');
}else if(int==4){
  console.log('Hai scelto il dolce: Macedonia');
}else{console.log('Dolce non disponibile')}
