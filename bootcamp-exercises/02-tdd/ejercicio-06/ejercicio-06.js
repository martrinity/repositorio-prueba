function addTwoOdd(n, m){

var n;
var m;

if ((n == undefined || n < 1) || (m == undefined || m < 1)){
	return 'Error'
}

else {
	return parseInt(Math.pow(n,2)) + parseInt(Math.pow(m,2))
}

}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.addTwoOdd = addTwoOdd;
}
