window.addEventListener('load', init, false);
function init() {
	var girarBTN = document.getElementById('girarBTN');
	var estudiantesLbl = document.getElementById('estudiantesLbl');

	var estudiantes = [
		'ARRIETA ROJAS JOHAN DE JESUS',
		'BORBON CARVAJAL ADRIANA',
		'CAMACHO LEVANO AARON',
		'CARDOSO PEREZ ARMANDO',
		'CHANG HUANG BENJAMIN',
		'CORTES CERDAS BYRON JOSUE',
		'GUEVARA JIMENEZ KEYLOR JESUS',
		'MASIS MARTINEZ LEONARDO',
		'MATAMOROS GODINEZ NATALIA PAOLA',
		'MESEN ARGUEDAS DIEGO',
		'RODRIGUEZ HERNANDEZ BRAYAN',
		'SANCHEZ VALLE JOSE ANDRES',
		'SOLANO  ALVAREZ JOSE FABIAN',
	];

	console.log(estudiantes);

	girarBTN.onclick = onGirarBTN;
	function onGirarBTN() {
		var indice = randomIntFromInterval(0, estudiantes.length - 1);
		console.log(estudiantes[indice], indice);
		estudiantesLbl.innerHTML = estudiantes[indice];
	}

	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
