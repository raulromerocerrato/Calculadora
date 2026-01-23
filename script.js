let pantalla=document.getElementById('pantalla');

function agregar(valor){
	pantalla.value+=valor;
}

function calcular(){
	try{
		pantalla.value=eval(pantalla.value);
		if(pantalla.value=='undefined'){
			pantalla.value='Expresió mal escrita';
		}
	}catch{
		pantalla.value="Syntax Error";
	}
}

function limpiar(){
	pantalla.value=' ';
}

document.addEventListener('keydown',(event)=>{
	const tecla=event.key;
	if(/[0-9]/.test(tecla)){
		agregar(tecla);
	}else if(['+','-','*','/'].includes(tecla)){
		agregar(tecla);
	}else if(tecla==='Enter'){
		calcular();
	}else if(tecla==='Backspace'){
		limpiar()
	}else{
		alert("Tecla no disponible");
	}
});
