function busquedaLinear (arreglo, itemBuscado) {
    // Escribe tu código aquí
     
    
    if(arreglo == undefined || itemBuscado == undefined){
    	return 'Error'
    }

    if(arreglo == "" || itemBuscado == ""){
  	return "Error de dato"
    }

    var indice = arreglo.indexOf(itemBuscado);


    if(indice == -1){
   	return false;
    }
    if(indice != undefined){
	return indice;
    }

    if (indice => arreglo.length){
   	return indice;
    }
   }

   
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
