let pantalla = document.getElementById('pantalla');

function agregar(valor) {
	pantalla.value += valor;
}

function calcular() {
	try {
		let expresion = pantalla.value;
		let numeros = expresion.split(/[\+\-\*\/]/).map(Number);
		let operadores = expresion.match(/[\+\-\*\/]/g);
		if (operadores==null) return;
		let resultado = numeros[0];
		for (let i = 0; i < operadores.length; i++) {
			switch (operadores[i]) {
				case '+':
					resultado += numeros[i + 1];
					break;
				case '-':
					resultado -= numeros[i + 1];
					break;
				case '*':
					resultado *= numeros[i + 1];
					break;
				case '/':
					resultado /= numeros[i + 1];
					break;
			}
		}
		pantalla.value = resultado;
	} catch {
		pantalla.value = "Syntax Error";
	}
}

function limpiar() {
	pantalla.value = '';
}

document.addEventListener('keydown', (event) => {
	const tecla = event.key;

	if (/[0-9]/.test(tecla)) {
		agregar(tecla);
	} else if (['+', '-', '*', '/'].includes(tecla)) {
		agregar(tecla);
	} else if (tecla === 'Enter') {
		calcular();
	} else if (tecla === 'Backspace') {
		limpiar();
	}
});
