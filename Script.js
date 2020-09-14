      function telephoneCheck(str) {
  let regex1 = /[1]\s[(]\d{3}[)]\s\d{3}[-]\d{4}/ 
  let regex2 = /[1][(]\d{3}[)]\d{3}[-]\d{4}/
  let regex3 = /[1]\s\d{3}[-]\d{3}[-]\d{4}/ 
  let regex4 = /[1]\s\d{3}\s\d{3}\s\d{4}/ 
  let regex5 = /[(]\d{3}[)]\s\d{3}[-]\d{4}/ 
  let regex6 = /[(]\d{3}[)]\d{3}[-]\d{4}/ 
  let regex7 = /\d{3}\s\d{3}\s\d{4}/ 
  let regex8 = /\d{3}[-]\d{3}[-]\d{4}/ 
  let regex9 = /\d{10}/ 

  if(str.length > 16) { 
    console.log(false);
  }
  else if(str.length == 11 || str.length == 15 || str.length < 10) { 
    console.log(false);
  }
  else if(str.length == 16 && str.match(regex1)) { 
    console.log(true);
  }
  else if (str.length == 14 && (str.match(regex2) || str.match(regex3) || str.match(regex4) || str.match(regex5))) { 
    console.log(true);
  }
  else if (str.length == 13 && str.match(regex6)) { 
    console.log(true);
  }
  else if (str.length == 12 && (str.match(regex7) || str.match(regex8))) {
    console.log(true);
  }
  else if (str.length == 10 && str.match(regex9)) { 
    console.log(true);
  }
  else { 
    console.log(false);
  }
}
telephoneCheck("(011) 282-1111");