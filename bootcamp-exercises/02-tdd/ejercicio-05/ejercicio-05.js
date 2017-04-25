function addOdd(n){
   
var n;
if (n == undefined || n < 1){
	return 'Error'
}
else {
	return parseInt(Math.pow(n,2))
}
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.addOdd = addOdd;
}