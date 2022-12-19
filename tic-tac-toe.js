
let s1=document.querySelector("#s1")
let s2=document.querySelector("#s2")
let s3=document.querySelector("#s3")
let s4=document.querySelector("#s4")
let s5=document.querySelector("#s5")
let s6=document.querySelector("#s6")
let s7=document.querySelector("#s7")
let s8=document.querySelector("#s8")
let s9=document.querySelector("#s9")



var PlayerTurn="X"


document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"

function ChangePlayerTurn(){
  if(PlayerTurn==="X"){
    PlayerTurn="O";
  }
  else if(PlayerTurn==="O"){
    PlayerTurn="X";
  }

  else{}
}





s1.addEventListener('click',()=>{


  s1.value = PlayerTurn
  console.log(s1.value)
  CheckWin()
  ChangePlayerTurn()

  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"



});

s2.addEventListener('click',()=>{
s2.value=PlayerTurn
console.log(s2.value)
CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});

s3.addEventListener('click',()=>{
  s3.value=PlayerTurn
  console.log(s3.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});

s4.addEventListener('click',()=>{
  s4.value=PlayerTurn
  console.log(s4.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


s5.addEventListener('click',()=>{
  s5.value=PlayerTurn
  console.log(s5.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


s6.addEventListener('click',()=>{
  s6.value=PlayerTurn
  console.log(s6.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


s7.addEventListener('click',()=>{
  s7.value=PlayerTurn
  console.log(s7.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


s8.addEventListener('click',()=>{
  s8.value=PlayerTurn
  console.log(s8.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


s9.addEventListener('click',()=>{
  s9.value=PlayerTurn
  console.log(s9.value)
  CheckWin()
  ChangePlayerTurn()
  document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
});


// document.querySelector(".box").addEventListener('click',()=>{
//   document.querySelector(".box").value=PlayerTurn
//   ChangePlayerTurn()
//   document.getElementById("playersTurn").innerHTML= "It is " + PlayerTurn+ "'s Turn"
// });


function CheckWin(){
  if(s4.value==s5.value && s5.value==s6.value && s4.value!='' ){
    document.getElementById("winner").innerHTML="Player "+ s4.value+ " wins!"
  }
  else if(s1.value==s2.value && s2.value==s3.value && s1.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s1.value+ " wins!"
  }
  else if(s7.value==s8.value && s8.value==s9.value && s7.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s7.value+ " wins!"
  }
  else if(s1.value==s4.value && s4.value==s7.value && s1.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s1.value+ " wins!"
  }
  else if(s2.value==s5.value && s5.value==s8.value && s2.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s2.value+ " wins!"
  }
  else if(s3.value==s6.value && s6.value==s9.value && s3.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s3.value+ " wins!"
  }
  else if(s1.value==s5.value && s5.value==s9.value && s1.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s1.value+ " wins!"
  }
  else if(s3.value==s5.value && s5.value==s7.value && s3.value!=''){
    document.getElementById("winner").innerHTML="Player "+ s3.value+ " wins!"
  }

  document.getElementById('newgame').addEventListener('click', ()=>{
    document.getElementById('s1').value='';
    document.getElementById('s2').value='';
    document.getElementById('s3').value='';
    document.getElementById('s4').value='';
    document.getElementById('s5').value='';
    document.getElementById('s6').value='';
    document.getElementById('s7').value='';
    document.getElementById('s8').value='';
    document.getElementById('s9').value='';
    document.getElementById('winner').innerHTML=''
    

  })

}
