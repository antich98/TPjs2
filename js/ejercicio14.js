let frase = prompt("Introduce una frase de texto:");
let largoFrase = frase.length;    
let caracter;
let i;
for (i = 0; i < largoFrase; i++) {
caracter = frase.charAt(i);   
if (i == largoFrase - 1) {
    document.write(caracter);
}
else {
    document.write(caracter + "-");
}
}