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
  .innerText="Its a Palindrome!!"
}
else{
  document.getElementById("result")
  .innerText=" Its not a Palindrome !!"
}
}
