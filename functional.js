
   
  flag = 0;
  squares = ["a","a","a","a","a","a","a","a","a"]


 function addMark(id) 
  {
    const square =this.getSquares(id);
    if (square.disabled) {
      return; // Square is already disabled, do nothing
    }
    if (flag == 0) {
      square.innerHTML = "X";
      square.disabled = true;
      flag = 1;
    } else {
      square.innerHTML = "O";
      square.disabled = true;
      flag = 0;
    }
  }
  function winnerCheck()
    {
      s1 = this.squares[0];
      s2 = this.squares[1];
      s3 = this.squares[2];
      s4 = this.squares[3];
      s5 = this.squares[4];
      s6 = this.squares[5];
      s7 = this.squares[6];
      s8 = this.squares[7];
      s9 = this.squares[8];
  
      if((s1.innerHTML=="X"&& s2.innerHTML=="X"&& s3.innerHTML=="X") 
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

  function restart(){
   for(let i = 0; i < 9; i++){
    this.squares[i].innerHTML ="";
    this.squares[i].disabled = false;
   }
  }

  function getSquares(id){
    this.squares[id] = document.getElementById(id);
    return this.squares[id]
  }

let s1 = null
let s2 = null
let s3 = null
let s4 = null
let s5 = null
let s6 = null
let s7 = null
let s8 = null
let s9 = null
