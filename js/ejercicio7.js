/* let num = 30;
let numRepeticiones = 1;

while (num >= 10) {
  if (numRepeticiones <= num) {
    document.write(num);
    numRepeticiones++;
    numRepeticiones++;
  } else {
    document.write("<br>");
    num--;
    numRepeticiones = 1;
  }
}
let num2 = 9
let numRepeticiones2 = 1
while (num2 <= 9) {
  if (numRepeticiones2 <= num2) {
    document.write(num2);
    numRepeticiones2++;
  } else {
    document.write("<br>");
    num2--;
    numRepeticiones2 = 1;
    
  }
} */
/* for (let i = 30; i >= 1; i--) {
    document.write(String(i).repeat(i) + "<br>");
  } */
  
  
  let num = 50;
  let numRepeticiones = 25;
while (num >= 10) {
  document.write(String(num).repeat(numRepeticiones) + "<br>");
  num--;
  numRepeticiones = num/2;
}
let num2 = 9;
  
while (num2 >= 1) {
  document.write(String(num2).repeat(num2) + "<br>");
  num2--;
  
}

  