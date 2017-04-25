function codeHard(x) {
  
var x = parseInt(x);

if ((x % 5 == 0 )&& (x % 3 == 0)){
	return "CodeHard";
}
else if (x != x){
	return "ERROR";
}
else if(x % 3 == 0){
	return "Code";
}
else if(x % 5 == 0){
	return "Hard";
}
else if ((x % 5 != 0 ) && (x % 3 != 0)){
	return x;

}

}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.codeHard = codeHard;
}
