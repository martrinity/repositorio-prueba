function suma(numero1, numero2) {
    // Escribe tu código aquí
   

    if(numero2 == undefined || numero1 == undefined){
    	return 'Error'
    }
     return parseInt(numero1) + parseInt(numero2);
    
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.suma = suma;
}
