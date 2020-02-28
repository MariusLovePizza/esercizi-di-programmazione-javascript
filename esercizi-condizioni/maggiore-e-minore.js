/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a=0,
    b=10,
    c=2,
    d=-1;
var min;
var max;

if(a<=b){
  min = a;
  max=b;
  if(b<=c){
      max = c; // a = min, e b medio
      if(c<=d){
        max = d;    // a = min

      }else if(d<a){
        min = d;  // c = max
      }
      console.log("Output_1: maggiore = "+max+", minore = "+min);

  }// min = a, max = b
  else if(c<=a){
      min = c;  // max =b , a medio
      if(b<=d){
          max = d; // c = min, e b medio
        }else if(d<=c){
            min = d;  // b = max
        }
      console.log("Output_2: maggiore = "+max+", minore = "+min);
      }
  else if(c<b){ // a = min , b = max
    if(b<=d){
      max = d;    // a = min

    }else if(d<a){
      min = d;  // c = max
    }
    console.log("Output_3: maggiore = "+max+", minore = "+min);
    }
  }
  else if(b<a){
  min =b;
  max =a;
  if(a<=c){
      max = c; // b = min, e b medio
      if(c<=d){
        max = d;    // b = min

      }else if(d<=b){
        min = d;  // c = max
      }
      console.log("Output_4: maggiore = "+max+", minore = "+min);
  }// min = a, max = b
  else if(c<a){
      min = c;  // max =b , a medio
      if(b<=d){
          max = d; // c = min, e b medio
        }else if(d<=c){
            min = d;  // b = max
        }
      console.log("Output_4: maggiore = "+max+", minore = "+min);
      }
}
