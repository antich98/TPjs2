let nota = parseInt(prompt('Ingrese su nota del 0 al 10.'));
if (!isNaN(nota) === true){
    if(nota === 0 || nota === 1 || nota === 2 || nota === 3 || nota === 4 || nota === 5 || nota === 6 || nota === 7 || nota === 8 || nota === 9 || nota === 10){
    
        if(nota === 0 || nota === 1 || nota === 2){
            alert('Muy deficiente.')
        } else if(nota === 3 || nota === 4){
            alert('Insuficiente.')
        } else if(nota === 5 || nota === 6){
            alert('Suficiente.')
        } else if(nota === 7){
            alert('Bien.')
        } else if(nota === 8 || nota === 9){
            alert('Notable.')
        } else{
            alert('Sobresaliente.')
        }

    } else {
        document.write('Número erróneo.')
    }

} else {
    document.write('Introduce un número valido.')
}
