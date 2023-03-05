let num = 1;
let numRepeticiones = 1;

while (num <= 30) {
  if (numRepeticiones <= num) {
    document.write(num);
    numRepeticiones++;
  } else {
    document.write("<br>");
    num++;
    numRepeticiones = 1;
  }
}




