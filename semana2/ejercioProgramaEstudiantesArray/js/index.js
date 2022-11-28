// window.addEventListener('load', init, false);
window.onload = init;
function init() {
	var nombreIn = document.getElementById('nombreIn');
	var apellidoIn = document.getElementById('apellidoIn');
	var notaIn = document.getElementById('notaIn');
	var emailIn = document.getElementById('emailIn');
	var guardarBtn = document.getElementById('guardarBtn');
	var estudiantesSlct = document.getElementById('estudiantesSlct');

	guardarBtn.onclick = onAgregarBtn;

	var nombres = ['Jose', 'Amanda'];
	var apellidos = ['Sanchez', 'Sanchez'];
	var notas = ['90', '100'];
	var emails = ['kin9koopa1@gmail.com', 'amanda@gmail.com'];

	nombres.forEach(llenarStudiantesSlct); //goes through the each array 'field'

	function onAgregarBtn() {
		var nombre = nombreIn.value;
		var appellido = apellidoIn.value;
		var nota = notaIn.value;
		var email = emailIn.value;

		nombres.push(nombre);
		apellidos.push(appellido);
		notas.push(nota);
		emails.push(email);

		nombreIn.value = '';
		apellidoIn.value = '';
		notaIn.value = '';
		emailIn.value = '';

		estudiantesSlct.innerHTML = ''; // clears out the select dropdown

		console.log(nombres);
		console.log(apellidos);
		console.log(notas);
		console.log(emails);
	}

	function llenarStudiantesSlct(elemento, indice) {
		var option = document.createElement('option');
		estudiantesSlct.appendChild(option);
		// option.innerHTML = nombres[indice] + ' ' + apellidos[indice]; the same as below but below uses backticks ``
		option.innerHTML = `${nombres[indice]} ${apellidos[indice]}`;
		option.value = indice;
	}
}
