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
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
var input = Math.floor(Math.random()*18+2);  // nr dispari per stamapre il rombo = nr di righe
var tab;      // serve per fare spazio
var rombo_sup = "";  // sarà il mio output sotto forma di stringa
var t=0;   // mi serve per le X che devono aumentare di 2

// console.log("1° passo: e input generato è: "+ input);

if( (input%2) == 0 ){   // input lo vogliamo dispari
    tab = input / 2;
    input = input + 1;
  //  console.log(" Aggiungo uno perchè lo vogliamo dispari: "+input);
}
else { tab = (input-1)/2; }

console.log("\nNumero dispari: "+input);
//console.log("Quindi tab = 'spazio' è: "+tab);
// tab + 1 serve per righe della parte superiore
//console.log("2° passo: costruisco la parte superiore del rombo ");

      // nr ri righe
for(var i=1; i<=(tab+1) ; i++){

      // nr di spazzi da mettere prima delle x
      for(var j=tab-i; j>=0;j--){     // par dal nr di spazi
        rombo_sup =rombo_sup+ " ";   // aggiungo gli spazi per la riga i
      }

      // Metto le X sulla riga i : prima volta deve fare 1 ciclo, poi aumentare di 2 , grazie a t
      for(let x =1; x<=(t+i) ; x++){
        rombo_sup=rombo_sup+ "X";
      }rombo_sup= rombo_sup+"\n";       // vado a capo dopo la riga i
      t++;
      // fine riga i, adesso andrà riga i+1
}
//console.log("3° passo: fatta la parte sup; costruiamo anche la parte inferiore ");
//console.log(rombo_sup);
        ///    Parte superiore fatta   /

// Inizia la parte inf ://
let meno2X=1;  // mi serve per le X che devono aumentare di 2

for(let i_inf = 1; i_inf<= tab; i_inf++){   // defe fare due cicli, rimaste 2 righe

      // nr di spazzi da mettere prima delle x
      // prima volta 1 ciclo, seconda volta 2 cicli and so on
      for(var j=1 ; j<= i_inf; j++){   // parto da 1;  tab = spazio
        rombo_sup =rombo_sup+ " ";   // aggiungo gli spazi per la riga i
      }
      // Metto le X sulla riga i : prima volta deve input - 2, poi diminuire di 2 , grazie a meno2X
      for(let x =input-2; x>=meno2X ; x--){
        rombo_sup=rombo_sup+ "X";
      }rombo_sup= rombo_sup+"\n";
          // vado a capo dopo la riga i
      meno2X+=2; // aumeno per diminuire il nr di X

      // fine riga i, adesso andrà riga i+1
}
console.log("4° passo: stamp del rombo:  \n\n");
console.log(rombo_sup);
