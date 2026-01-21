let pantalla=document.getElementById('pantalla');

function agregar(valor){
	pantalla.value+=valor;
}

function calcular(){
	try{
		pantalla.value=eval(pantalla.value);
	}catch{
		pantalla.value="Syntax Error";
	}
}

function limpiar(){
	pantalla.value=' ';
}