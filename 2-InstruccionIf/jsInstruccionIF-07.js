function mostrar()
{
	let edad; 
	let estado; 

	edad = document.getElementById("txtEdad").value; 
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;

	if(edad < 18 && estado != "Soltero"){ 
	alert("Es muy peque para NO ser soltero")}



}//FIN DE LA FUNCIÓN