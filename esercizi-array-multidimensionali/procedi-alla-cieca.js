/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

// module.exports = matriX;

const matriX = (righe = 3, colonne = 3)=>{
    let matrix =[];
    console.log(`Ciao, sono matrix ${righe}x${colonne}\n\n`);
    for(let i = 0; i < righe; i+=1 ){
          // console.log(`ciao, sono indice i:  ${i}`);
          matrix[i] = new Array(); // la svoltaaa

          for(let j = 0; j < colonne; j+=1 ){
              matrix[i][j] = [Math.floor(Math.random()*100)];
              // console.log(` matrix interno:  ${matrix[i][j]}`);
          }
          // stampo la matrice
          // console.log(` riga ${i}: ${matrix[i]}`);
          console.log(`${matrix[i]}`);
    }
}
