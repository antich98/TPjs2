let filas = Number(prompt('Introduce el número de filas'));
let columnas = Number(prompt('Introduce el número de columnas'));
let resultado = filas * columnas;
document.write('<table border>');
for(i = 0; i < filas; i++){
    document.write('<tr>');
    for(j = 0; j < columnas; j++){
        document.write('<td>');
        document.write(resultado);
        resultado--;
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
