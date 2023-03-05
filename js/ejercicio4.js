let total = 0
do{ 
    let numeros = parseInt(prompt('Ingrese un número'))
    if(!isNaN(numeros) === true){
        total = total + numeros

    } else{
        alert('No introdujo un número')
    }


} while(confirm('¿Quieres agregar otro número?'))
document.write(total)