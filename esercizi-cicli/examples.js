// alcuni esempi per capire meglio : le var, let e const in js
// prima vediamo lo scope: global scope, function scope ;
// e Hoisting- what is it?

//   1      function scope : - facciamo vedere come si comporta una var all'inter del function scope

function play(){
      var game = "Super Marius Bros";

      function format(){
        return "Y r playin ${game}" ;
      }
      return format();
}
var s = play();

console.log(play()  +":--- questa è la figata di usare javascript,\n ma come è veloce\n\n");
console.log(s);
console.log("Adesso passiamo al secondo esempio: con var nell'if \n\n");

//  2        osserviamo come possiamo utilizzare le var anche all'inter no di IF , quindi è sempre un function scope

function play(numberOfPlayers){
      if(numberOfPlayers === 1) {
            var game = "Super Mario Odyssey";
      }else {
          var game = "Super Smash Brothers";
      }

      function format (){
        return 'you are playing '+ game;
      }

    return format();
}
console.log(play(1));
console.log(play(2));

//   3      adesso utilizziamo block scope, penso sia quando uso Let al posto di Var

console.log("\n ed eccoci qua al 3° esempio: vediamo come let non può essere utilizzata da format")
function play1(numberOfPlayers){
  let game;
      if(numberOfPlayers === 1) {
          let game = "Super Marius Bros";
      }else {
          let game = "Tank :D ";
      }

      function format (){
        return 'you are playing '+ game;
      }

    return format();
}
console.log("\n"+play1(1));
console.log("\n"+play1(2));

//  per utilizzare con let => quindi Block scope allora dobbiamo dichiciare prima let game, vediamo:
console.log("\n\n ed eccoci qua al 4 ° esempio: si dichiara let = game; e poi solo game = blalbla ")
function play2(numberOfPlayers){

    let game;
      if(numberOfPlayers === 1) {
           game = "Super Marius Bros";
      }else {
           game = "Tank :D ";
      }

      function format (){
        return 'you are playing '+ game;
      }

    return format();
}
console.log("\n\n"+play2(1));
console.log("\n"+play2(2));
