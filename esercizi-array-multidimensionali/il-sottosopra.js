/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input:
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/
let matrix =[];

const matriX = (righe = 3, colonne = 3)=>{
    //
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
matriX();

// insert your codice

console.log(matrix);
