for(filas = 1; filas <= 500; filas++){
    if(filas % 4 === 0){
        if(filas % 5 === 0){
            document.write(filas+' (Múltiplo de 4)<br>---------------------------<br>')
        } else{
            document.write(filas+' (Múltiplo de 4)<br>')
        }  
    } else if(filas % 9 === 0){
        if(filas % 5 === 0){
            document.write(filas+' (Múltiplo de 9)<br>---------------------------<br>')
        } else{
            document.write(filas+' (Múltiplo de 9)<br>')
        }  
    } else if(filas % 5 === 0){
        document.write(filas+'<br>---------------------------<br>')
    } 
    else{
        document.write(filas+'<br>')
}
}