/*
 * Archivo principal de funcionalidad de JS
 */
 /*
 * Archivo principal de funcionalidad de JS
 */
 /*no corre codigo

 function menu(){
 	var proyectos = Array.from(document.getElementsByClassName('box-work'));
 	var modal = document.getElementById("box-work-modal");
 	var modalBody, cerrar, img;
 	proyectos.forEach(function(box, i){
 		box.addEventListener("click", function(){
 			modal.innerHTML = "";
 			modalBody = document.createElement("div");
 			modalBody.classList.add("modal-body");
 			modalBody.innerHTML = box.innerHTML;
      
      modalBody.removeChild(modalBody.childNodes[3]);
 			modal.appendChild(modalBody);
 			modal.classList.remove("hide");
 			cerrar = document.createElement("div");
 			cerrar.classList.add("close");
      x = document.createElement("i");
      x.setAttribute("class", "fa fa-times fa-2x");
      x.setAttribute("aria-hidden", "true");
      cerrar.appendChild(x);
 			modal.appendChild(cerrar);
 			cerrar.addEventListener("click",function(){
 				modal.classList.add("hide");
 			});
 		});
 	});
}();
*/