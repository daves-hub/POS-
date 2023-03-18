/*
collecting all the elements my javascript 
code will be working with and storing them in variables
*/
const trans = document.getElementsByClassName('opt f');
const bal = document.getElementsByClassName('opt s');
const hist = document.getElementsByClassName('opt t');
const amt= document.getElementById('amt');
const acctNum= document.getElementById('acctNum');
const bankName= document.getElementById('bankName');
const acctOwner= document.getElementById('acctOwner');
const reason= document.getElementById('reason');
const enterBtn= document.getElementById('enterBtn');

// Creating an array to store all account numbers
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
// Creating an array to store all account names
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
// Creating an array to store each account details (name, account number, account balance)  
  var accounts = [];
// n is a variables that I'll use later to loop through the above array
  n=0;
//this is a function used to remove money from the sender's account during transfer
function check(){
   for(n1=0; n1<acctNums.length; n1++){
    if(_acctNum.value == acctNums[n1] && _acctNum != ''){
      acctOwner.innerHTML = accounts[n1].acctName;
    }
  }
}
function click2(){
  let val1= acctNum.value;
  localStorage.setItem('sender', accounts[val1].acctName);
  localStorage.setItem('amt', amt.value);
  localStorage.setItem('receiver', acctOwner.innerHTML);
  localStorage.setItem('reason', reason.value);
  localStorage.setItem('money' + val1, parseInt(accounts[val1].money2) - parseInt(localStorage.getItem('amt')));
  accounts[val1].money2 = localStorage.getItem('money' + val1);
  alert(val1);
}
  console.log(accounts);
// account Object constructor
class account{
    constructor(name, number){
      this.acctName = name;
      this.acctnum = number;
      this.money2 =  "";
  }
 }
 //this is a function used to add money to the receiver's account during transfer
function click(){
 let val2 = _acctNum.value;
  n3=0;
  for(; n3<accounts.length; n3++){
    if(val2 == accounts[n3].acctnum){
      break;
    }
  }
  localStorage.setItem('amt', amt.value);
  localStorage.setItem('money' + n3, parseInt(accounts[n3].money2) + parseInt(localStorage.getItem('amt')));
  accounts[n3].money2 = localStorage.getItem('money' + n3);
}
//Creating new account in the 'accounts' array
  for(;n<acctNums.length; n++){
    accounts.push(new account(acctNames[n], acctNums[n]));
    accounts[n].money2 = localStorage.getItem(`money${n}`);
  }
  
/*
•to check if sender's account number is in database
•to display the owner of the account number if validation returns true
*/
// to validate sender's account number
function b4check(){
  if(_acctNum.value.length == '10' && _acctNum != ''){
   check();
   }
  }
//console.log(history)