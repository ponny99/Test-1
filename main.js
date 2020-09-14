function checkCashRegister(price, cash, cid) {
  var change = [];
  var changeDue = cash - price;
  var drawerTotal = 0;
  var mult = 0;
  var penny = 0;
  
  function countChange() {
    if (changeDue >= 100) {
      while (changeDue >= 100 && cid[8][1] >= 100){
        changeDue -= 100;
        cid[8][1] -=100;
        mult += 1;  
      }
      change.push(["ONE HUNDRED", (100 * mult)]);
      mult = 0;
    }
    if (changeDue >= 20) {
      while (changeDue >= 20 && cid[7][1] >= 20){
        changeDue -= 20;
        cid[7][1] -= 20;
        mult += 1;  
      }
      change.push(["TWENTY", (20 * mult)]);
      mult = 0;
    }
    if (changeDue >= 10) {
      while (changeDue >= 10 && cid[6][1] >= 10){
        changeDue -= 10;
        cid[6][1] -= 10;
        mult += 1;  
      }
      change.push(["TEN", (10 * mult)]);
      mult = 0;
    }
    if (changeDue >= 5) {
      while (changeDue >= 5 && cid[5][1] >= 5){
        changeDue -= 5;
        cid[5][1] -= 5;
        mult += 1;  
      }
      change.push(["FIVE", (5 * mult)]);
      mult = 0;
    }
    if (changeDue >= 1) {
      while (changeDue >= 1 && cid[4][1] >= 1){
        changeDue -= 1;
        cid[4][1] -= 1;
        mult += 1;  
      }
      change.push(["ONE", (1 * mult)]);
      mult = 0;
    }
    if (changeDue >= 0.25) {
      while (changeDue >= 0.25 && cid[3][1] >= 0.25){
        changeDue -= 0.25;
        cid[3][1] -= 0.25;
        mult += 1;  
      }
      mult *= 0.25;
      change.push(["QUARTER", mult]);
      mult = 0;
    }
    if (changeDue >= 0.1) {
      while (changeDue >= 0.1 && cid[2][1] >= 0.1){
        changeDue -= 0.1;
        cid[2][1] -= 0.1;
        mult += 1;  
      }
      change.push(["DIME", (0.1 * mult)]);
      mult = 0;
    }
    if (changeDue >= 0.5) {
      while (changeDue >= 0.5 && cid[1][1] >= 0.5){
        changeDue -= 0.5;
        cid[1][1] -= 0.5;
        mult += 1;  
      }
      change.push(["NICKEL", (0.5 * mult)]);
      mult = 0;
    }
    if (changeDue >= 0.01) {
      while (changeDue >= 0.01 && cid[0][1] >= 0.01){
        changeDue -= 0.01;
        cid[0][1] -= 0.01;
        mult += 1;  
      }
      if (0 < changeDue && changeDue <= 0.01  && cid[0][1] >= 0.01){
        penny = 0.01;
        console.log(penny);
      } 
      change.push(["PENNY", ((0.01 * mult) + penny)]);
      mult = 0;
    }
      if (changeDue >= 0.01){
        change =  "Insufficient Funds";
      }
   }
  for (var i in cid) {
    drawerTotal += cid[i][1];
  }
  if (changeDue > drawerTotal) {
    return "Insufficient Funds";
  } else if (changeDue === drawerTotal) {
    return "Closed";
  } else{
    countChange();
  }
  console.log (change);
}
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
    ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);