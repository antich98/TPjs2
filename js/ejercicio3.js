let union = ''

do {
    let palabras = prompt('Ingrese una palabra')
    if (union === ''){
        union = union+palabras
    } else {
        union = union+'-'+palabras
    }
}
    while (confirm('¿Quiere agregar otra palabra?'))
document.write(union)


