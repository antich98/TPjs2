do{
    let DNI = parseInt(prompt('Ingrese su DNI sin puntos'))
if(!isNaN(DNI)){
    if(DNI>0 && DNI<99999999){
        if(DNI%23===0){
            document.write('T')
        } else if(DNI%23===1){
            document.write('R')
        }else if(DNI%23===2){
            document.write('W')
        }else if(DNI%23===3){
            document.write('A')
        }else if(DNI%23===4){
            document.write('G')
        }else if(DNI%23===5){
            document.write('M')
        }else if(DNI%23===6){
            document.write('Y')
        }else if(DNI%23===7){
            document.write('F')
        }else if(DNI%23===8){
            document.write('P')
        }else if(DNI%23===9){
            document.write('D')
        }else if(DNI%23===10){
            document.write('X')
        }else if(DNI%23===11){
            document.write('B')
        }else if(DNI%23===12){
            document.write('N')
        }else if(DNI%23===13){
            document.write('J')
        }else if(DNI%23===14){
            document.write('Z')
        }else if(DNI%23===15){
            document.write('S')
        }else if(DNI%23===16){
            document.write('Q')
        }else if(DNI%23===17){
            document.write('V')
        }else if(DNI%23===18){
            document.write('H')
        }else if(DNI%23===19){
            document.write('L')
        }else if(DNI%23===20){
            document.write('C')
        }else if(DNI%23===21){
            document.write('K')
        }else if(DNI%23===22){
            document.write('E')
        }

    }else{ 
        document.write('El número ingresado está fuera del rango')

    }

}else{
    alert('Ingresó un número invalido')
}
} while(confirm('¿Quieres intentarlo de nuevo?'))
