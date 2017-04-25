function returnReverseLetters(query){

var arreglo = query.split(" ");
var str = arreglo[0];
var indicador = arreglo[1].split("")
var validateSelect = function(str){
	return str.toLowerCase() === "select";
}

function validateIndexReverse(indicador){
  if (indicador.toLowerCase === all){
  	return arreglo[3].reverse.join("")
  }
} else if(typeof. indicador = "number"){
	return arreglo[3].reverse.slice(0, indicador[])
   
}

if(validateSelect = false && validateIndexReverse = false){
	return "Error"
}else{
	return validateIndexReverse;
}


}

//NO TOCAR
if(typeof exports !== 'undefined') {
    exports.returnReverseLetters = returnReverseLetters;
}
