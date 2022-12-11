window.addEventListener('load', init, false);

function init() {
	var fNameIn = document.getElementById('fNameIn');
	var lNameIn = document.getElementById('lNameIn');
	var pHabitacionIn = document.getElementById('pHabitacionIn');
	var descuentoNormalIn = document.getElementById('descuentoNormalIn');
	var nochesIn = document.getElementById('nochesIn');
	var tipoClienteIn = document.getElementById('tipoClienteIn');
	var calcularBtn = document.getElementById('calcularBtn');
	// var historialBtn = document.getElementById('historialBtn');

	calcularBtn.onclick = onCalcularBtn;

	var historialArray = [];
	var clienteArray = [];

	//I need to figure out how to add the array within an array and not show duplicate content

	function onCalcularBtn() {
		var fName = fNameIn.value;
		var lName = lNameIn.value;
		var pHabitacion = pHabitacionIn.value;
		var descuentoNormal = descuentoNormalIn.value;
		var noches = nochesIn.value;
		var tipoCliente = tipoClienteIn.value;

		clienteArray.push(
			fName,
			lName,
			pHabitacion,
			descuentoNormal,
			noches,
			tipoCliente
		);

		fNameIn.value = '';
		lNameIn.value = '';
		pHabitacionIn.value = '';
		descuentoNormalIn.value = '';
		nochesIn.value = '';
		tipoClienteIn.value = '';

		historialArray.push(clienteArray);

		console.log(historialArray);
	}
}
