let nombre1 = prompt('Ingrese el nombre de la primera persona')
let edad1 = Number(prompt('Ingrese la edad de la primera persona'))
let nombre2 = prompt('Ingrese el nombre de la segunda persona')
let edad2 = Number(prompt('Ingrese la edad de la segunda persona'))
let nombre3 = prompt('Ingrese el nombre de la tercera persona')
let edad3 = Number(prompt('Ingrese la edad de la tercera persona'))
let edadMayor = Math.max(edad1, edad2, edad3);
if (edadMayor === edad1){
    document.write('El mayor es '+nombre1)
}
if (edadMayor === edad2){
    document.write('El mayor es '+nombre2)
}
if (edadMayor === edad3){
    document.write('El mayor es '+nombre3)
}