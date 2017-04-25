function pedirDatos(nombreDato){
 var dato = "";
 do{
  dato = prompt("Inserte " + nombreDato);
 }while(dato=="")
 return dato;  
 }


var validarNombre = function(nombre){
  var nYa = nombre.split(" ");
  var name1 = nYa[0];
  var name2 = nYa[1];
  var initials = name1.charAt(0).toUpperCase+ name2.charAt(0).toUpperCase
  //Input: nombre y apellido
  //Output: booleano
  //Verifica que el nombre tenga el formato "Nombre Apellido"
}


var calcularEdadPerro = function(edad){
  //Input: edad de perro en años
  //Output: edad de perro en humano
  //1 año de perro equivale a 7 años humanos
}





var mostrarOtroVet = function(){
  //Mostrar un alert con informacion de otro veterinario
  //Texto libre, debe tener nombre, direccion y telefono
}






var calcularEdadConejo = function(edad){
  //Input: edad de conejo en años
  //Output: edad de conejo en humano
  //1 semana de conejo equivale a 1 año humano
}


var calcularEdadGato = function(edad){
  //Input: edad de gato en años
  //Output: edad de gato en humano
  //1 año de gato equivale a 4 años humanos
}


function listaMascotas() {
  //Recorre el arreglo de mascotas y retorna la lista de las mismas en un string
  alert("Debo desarrollar esta función para tener puntos extras :)");    
}

var datos= ["nombre", "nickname", "fono", "nombreMascota", "edadMascota", "tipoMascota"];
var respuestas = [];

for (var i = 0; i < datos.length ; i++) {
  respuestas[i] = pedirDatos(datos[i])
}

var mascotas = [];
//Este arreglo sólo lo usaras si desarrollas la segunda parte

//Al finalizar debo llamar esta función (NO RETORNO NADA)
 agregarMascota (nombre, nickname, fono, nombreMascota, edadMascota, tipoMascota)