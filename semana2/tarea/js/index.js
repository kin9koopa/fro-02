window.addEventListener('load', init, false);

function init() {
	var nombreIn = document.getElementById('nombreIn');
	var apellidoIn = document.getElementById('apellidoIn');
	var notaIn = document.getElementById('notaIn');
	var emailIn = document.getElementById('emailIn');
	var guardarBtn = document.getElementById('guardarBtn');
	var estudiantesSlt = document.getElementById('estudiantesSlt');
	var mostrarBtn = document.getElementById('mostrarBtn');

	var infoEstudiante = document.getElementById('infoEstudiante');

	guardarBtn.onclick = onAgregarBtn;
	mostrarBtn.onclick = onMostrarBtn;

	var nombresArray = ['Amanda', 'Christopher'];
	var apellidosArray = ['Sanchez', 'Valle'];
	var notasArray = ['100', '87'];
	var emailsArray = ['asan@gmail.com', 'chrisval@hotmail.com'];

	nombresArray.forEach(llenarInfoSlct);

	function onAgregarBtn() {
		var nombre = nombreIn.value;
		var apellido = apellidoIn.value;
		var nota = notaIn.value;
		var email = emailIn.value;

		nombresArray.push(nombre);
		apellidosArray.push(apellido);
		notasArray.push(nota);
		emailsArray.push(email);

		nombreIn.value = '';
		apellidoIn.value = '';
		notaIn.value = '';
		emailIn.value = '';

		estudiantesSlt.innerHTML = '';
		nombresArray.forEach(llenarInfoSlct);
	}

	function llenarInfoSlct(element, indice) {
		var option = document.createElement('option');
		estudiantesSlt.appendChild(option);
		option.innerHTML = `${nombresArray[indice]} ${apellidosArray[indice]}`;
		option.value = indice;
	}

	function onMostrarBtn() {
		var selectValue = document.getElementById('estudiantesSlt'); //grabs the value of the dropdown option
		var value = selectValue.value;

		var titulo = document.createElement('h1');
		var emailInfo = document.createElement('h2');
		var notaInfo = document.createElement('h2');

		infoEstudiante.appendChild(titulo);
		titulo.innerHTML = `Informacion de ${nombresArray[value]} ${apellidosArray[value]}`;

		infoEstudiante.appendChild(emailInfo);
		emailInfo.innerHTML = `Correo: ${emailsArray[value]}`;
		infoEstudiante.appendChild(notaInfo);
		notaInfo.innerHTML = `Nota: ${notasArray[value]}`;
	}

	// function crearInfoEstudiante(element, indice) {
	// 	var titulo = document.createElement('h1');
	// 	var emailInfo = document.createElement('h2');
	// 	var notaInfo = document.createElement('h2');

	// 	infoEstudiante.appendChild(titulo);
	// 	titulo.innerHTML = `Informacion de ${nombresArray[indice]} ${apellidosArray[indice]}`;

	// 	infoEstudiante.appendChild(emailInfo);
	// 	emailInfo.innerHTML = `Correo: ${emailsArray[indice]}`;
	// 	infoEstudiante.appendChild(notaInfo);
	// 	notaInfo.innerHTML = `Nota: ${notasArray[indice]}`;
	// }

	// function onMostrarBtn() {
	// 	// crear funcion que agarre la info selecionada del selector. will need to grab the indice value and show the info based off that maybe use the map method?

	// 	var selectValue = document.getElementById('estudiantesSlt');
	// 	var value = selectValue.value;

	// 	nombresArray.forEach(crearInfoEstudiante);

	// 	// nombresArray.push(crearInfoEstudiante);
	// 	console.log(apellidosArray[value]); //im printing out the value from the select
	// }
}
