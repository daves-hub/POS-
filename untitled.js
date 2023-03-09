const trans = document.getElementsByClassName('opt f');
const bal = document.getElementsByClassName('opt s');
const hist = document.getElementsByClassName('opt t');
const amt= document.getElementById('amt');
const acctNum= document.getElementById('acctNum');
const bankName= document.getElementById('bankName');
const acctOwner= document.getElementById('acctOwner');
const reason= document.getElementById('reason');
const enterBtn= document.getElementById('enterBtn');

const acctNums = [
   '1234567890',
   '1111111111',
   '2222222222',
   '3333333333',
   '4444444444',
   '5555555555',
   '6666666666',
   '7777777777',
   '8888888888'
  ];
const acctNames = [
   'Jason Dessen',
   'Amanda Smith',
   'Dave Wacowski',
   'Daniela Vargas',
   'Rieles Brown',
   'John Black',
   'Antwan Kentucky',
   'Charlie Brownwood',
   'Michael Jackson'
  ];
  
  var vv = [];
  n=0;
function click2(){
  let val1= acctNum.value;
  localStorage.setItem('amt', amt.value);
  localStorage.setItem('money' + val1, parseInt(vv[val1].money2) + parseInt(localStorage.getItem('amt')));
  vv[val1].money2 = localStorage.getItem('money' + val1);
  alert(val1)
}
  class Name{
    constructor(name, number){
      this.acctName = name;
      this.acctnum = number;
      this.money2 = localStorage.getItem('money0');
    }
  }
function click(){
  localStorage.setItem('amt', amt.value);
  this.money2 = parseInt(this.money2) - parseInt(localStorage.getItem('amt'));
}
  for(;n<acctNums.length; n++){
    vv.push(new Name(acctNames[n], acctNums[n]));
  }

  console.log(vv)
function draw(){
  ctx.beginPath();
  //ctx.arc(50%,15,7,0,2*Math.PI);
  ctx.strokeStyle = 'red';
  ctx.stroke();
}

function check(){
   for(n1=0; n1<acctNums.length; n1++){
    if(acctNum.value == acctNums[n1] && acctNum != ''){
      acctOwner.innerHTML = vv[n1].acctName;
      return;
    }
  }
}
function b4check(){
  if(acctNum.value.length == '10' && acctNum != ''){
   check();
   }
  }
  
function transFunc(){
  window.location.href = 'trans.html';
}
function balFunc(){
  window.location.href = 'bal.html';
}
function histFunc(){
  window.location.href = 'hist.html';
}

trans.onclick =  trans;
bal.onclick = bal;
hist.onclick = hist;
