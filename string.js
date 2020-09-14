let regex = /[^A-Za-z0-9]/g;
function palindrome(str) {
  let newStr = str.replace(regex, "").toLowerCase();
  let revStr = "";
  for(let i = 0; i < newStr.length; i++) {
  	let cut = newStr.slice(i, i + 1);
    revStr = cut + revStr;
  }
  if(newStr == revStr) {
    console.log("Yay Palindrome!");
  }
  else {
    console.log("Nope, try another");
  }
}
palindrome("racecar");