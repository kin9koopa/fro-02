// Se quiere saber si un estudiante es aceptado en
// Cenfotec o no. El estudiante es aceptado si su
// examen de admisión es mayor a 600 o (si su puntaje
// está entre 500 y 600, y además su promedio

// en el colegio es mayor a 80).

var adminsionIn = document.getElementById('adminsionIn');
var colegioIn = document.getElementById('colegioIn');
var resultadoBtn = document.getElementById('resultadoBtn');
var resultadoLbl = document.getElementById('resultadoLbl');

resultadoBtn.onclick = onResultado;

function onResultado() {
	var notaAdmision = adminsionIn.value;
	var notaColegio = colegioIn.value;
	var label = document.createElement('div');
	resultadoLbl.appendChild(label);

	if (notaAdmision < 500 || notaColegio < 80) {
		console.log(notaAdmision);
		console.log(notaColegio);

		resultadoLbl.innerHTML = 'Denegado';
	} else {
		console.log('bye');
		console.log(notaColegio);
		console.log(notaAdmision);

		resultadoLbl.innerHTML = 'Aprobado';
	}
}
