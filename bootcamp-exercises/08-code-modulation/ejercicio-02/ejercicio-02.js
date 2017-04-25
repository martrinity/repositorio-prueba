function arrayCRUD(arreglo,operation,index,newValue) {
	
	(function create(){
		return arreglo.push(newValue);
	})
  
  return "Error"
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.arrayCRUD = arrayCRUD;
}
