
let s1 = null
let s2 = null
let s3 = null
let s4 = null
let s5 = null
let s6 = null
let s7 = null
let s8 = null
let s9 = null


class circle{
    constructor(){}

    static flag = 0;
      addMark(squareId) 
    {
     const square = document.getElementById(squareId);
     if (square.disabled) {
       return; // Square is already disabled, do nothing
     }
     if (circle.flag == 0) {
       square.innerHTML = "X";
       square.disabled = true;
       circle.flag = 1;
     } else {
       square.innerHTML = "O";
       square.disabled = true;
       circle.flag = 0;
     }
   }
   winnerCheck(){
        s1 = document.getElementById("square1");
        s2 = document.getElementById("square2");
        s3 = document.getElementById("square3");
        s4 = document.getElementById("square4");
        s5 = document.getElementById("square5");
        s6 = document.getElementById("square6");
        s7 = document.getElementById("square7");
        s8 = document.getElementById("square8");
        s9 = document.getElementById("square9");
        
        
        if ((s1.innerHTML=="X"&& s2.innerHTML=="X"&& s3.innerHTML=="X") 
        || (s4.innerHTML=="X"&& s5.innerHTML=="X"&& s6.innerHTML=="X")
        || (s7.innerHTML=="X"&& s8.innerHTML=="X"&& s9.innerHTML=="X")
        || (s1.innerHTML=="X"&& s4.innerHTML=="X"&& s7.innerHTML=="X")
        || (s2.innerHTML=="X"&& s5.innerHTML=="X"&& s8.innerHTML=="X")
        || (s3.innerHTML=="X"&& s6.innerHTML=="X"&& s9.innerHTML=="X")
        || (s2.innerHTML=="X"&& s5.innerHTML=="X"&& s8.innerHTML=="X")
        || (s1.innerHTML=="X"&& s5.innerHTML=="X"&& s9.innerHTML=="X")
        || (s3.innerHTML=="X"&& s5.innerHTML=="X"&& s7.innerHTML=="X")
        || (s1.innerHTML=="O"&& s2.innerHTML=="O"&& s3.innerHTML=="O") 
        || (s4.innerHTML=="O"&& s5.innerHTML=="O"&& s6.innerHTML=="O")
        || (s7.innerHTML=="O"&& s8.innerHTML=="O"&& s9.innerHTML=="O")
        || (s1.innerHTML=="O"&& s4.innerHTML=="O"&& s7.innerHTML=="O")
        || (s2.innerHTML=="O"&& s5.innerHTML=="O"&& s8.innerHTML=="O")
        || (s3.innerHTML=="O"&& s6.innerHTML=="O"&& s9.innerHTML=="O")
        || (s2.innerHTML=="O"&& s5.innerHTML=="O"&& s8.innerHTML=="O")
        || (s1.innerHTML=="O"&& s5.innerHTML=="O"&& s9.innerHTML=="O")
        || (s3.innerHTML=="O"&& s5.innerHTML=="O"&& s7.innerHTML=="O")
        )
        {
        alert("you won")
        }
    }
 }
