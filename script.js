// const reverseMe=(N)=>{
// let num=N;
// var rev=0;
// while(num!=0)
// {
// rev=rev*10+(num%10);
// num=Math.floor(num/10);
// }
// return N === rev
// }

// function checkPalindrome(){
// let value=document.getElementById("N").value

// if(value === "")
// {
//   document.getElementById("result").innerText="Enter a value please!"
//   return;
// }

// value=Number(value);
// if(value<0){
//   document.getElementById("result")
//   .innerText="Enter positive value only!!"
//   return;
// }
// if(isNaN(value)){
// document.getElementById("result")
//   .innerText="Enter numbers only!"
//   return;
// }
// let result=reverseMe(value);
// if(result)
// {
//   document.getElementById("result")
//   .innerText="Its a Palindrome number!!"
// }
// else{
//   document.getElementById("result")
//   .innerText=" Its not a Palindrome number!!"
// }
// }



// for both String and number

const isPalindrome=(str)=>{
  let reverse="";
  for(let i=str.length-1;i>=0;i--)
  {
  reverse=reverse+str[i];
}
return str==reverse?true:false;
}

function checkPalindrome(){
let value=document.getElementById("N").value
if(value === "")
{
  document.getElementById("result").innerText="Enter a value please!"
  return;
}

let result=isPalindrome(value);
if(result)
{
  document.getElementById("result")
  .innerText="Its Palindrome!!"
}
else{
  document.getElementById("result")
  .innerText=" Its not Palindrome !!"
}
}