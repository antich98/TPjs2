let texto = prompt("Escribe un texto:");
let largoTexto = texto.length; 
texto = texto.toUpperCase();
let orden;
let contador = 0;
let i;
for (i = 0; i < largoTexto; i++) {
    orden = texto.charAt(i);    
    if ((orden == "A") || (orden == "E") || (orden == "I") || (orden == "O") || (orden == "U")) {
        contador++;
    }
}
document.write(contador);