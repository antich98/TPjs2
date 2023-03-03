let edad = parseInt(prompt('Ingrese su edad.'));
if (!isNaN(edad) === true){
    if(edad>=18){
        document.write('Ya puedes conducir.')
    }else{
        document.write('No puedes conducir.')
    }
}
else{
    document.write('Ingresaste un dato invalido.')
}

