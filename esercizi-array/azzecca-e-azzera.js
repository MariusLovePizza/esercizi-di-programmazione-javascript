/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
//
//
//  costruaimo un array di 100 elementi
var cento_arr = [];
//
// costruiamo un while che gira finche avremo un elem diverso da 0 nell' array
//
for(let i=0; i<100;i++){
    cento_arr.push(Math.floor(Math.random()*50+1));
}
console.log("Stamp lunghezza arr: "+ cento_arr.length);
//
//
var bool = false;
//
while(!bool){
//
      console.log("Inserisci un nr per eliminare i multipli");
      let input = prompt("Metti un numero intero");             // esce un pop up. con il messaggio, [ figo cmq]
      console.log(input);
      //
      //
      for(let i =0; i < cento_arr.length; i++){
          //
          if( i%input ==0 ){
              // console.log(" sono dentro if e cancello questo multiplo (metto 0): " +i);   // sembra funziona
              cento_arr.splice(i,1,0);  // per l-elem con index metto 0
              //  devo trovare un modo piu veloce , va beh magari c'e' ma non ora
          }
      }
      //
      bool = true; // se boolean e' true allora si esce dal while
      //
      // entro nel foreach con bool che esce dal while. se c'e' un elem diverso da 0 allora bool sara' rimesso a false
      //
      for(let n =0; n < cento_arr.length ; n++){
          if(cento_arr[n]!== 0){
            bool = false;
            break;
          }
        //
      }
//       cento_arr.forEach((item,i) => {  // io voglio che se un elem e' diverso da 0 allora bool = false
//           if(cento_arr[i]!==0){
//             bool = false;
//             // console.log("elimina questo numero: "+ item + " messagio per il prog: c'e' il break :D");
//             break; // esco da questo ciclo for  e continuo con il while
//           }
//           //
//       });
// //
      // bool = !array1.includes(0);
      //
      //
}
//
console.log(cento_arr);
