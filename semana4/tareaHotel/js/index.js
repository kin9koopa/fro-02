window.addEventListener('load', init, false);

function init() {
	const NOT_DISCOUNT = 0;
	const FIVE_DISCOUNT = 6;
	const TEN_DISCOUNT = 10;
	const TWENTY_FIVE_DISCOUNT = 25;
	const NORMAL_DISCOUNT = 0;
	const VIP_DISCOUNT = 0.05;
	const PREMIUM_DISCOUNT = 0.1;

	var fNameIn = document.getElementById('fNameIn');
	var lNameIn = document.getElementById('lNameIn');
	var pHabitacionIn = document.getElementById('pHabitacionIn');
	var descuentoNormalIn = document.getElementById('descuentoNormalIn');
	var nochesIn = document.getElementById('nochesIn');
	var tipoClienteIn = document.getElementById('tipoClienteIn');
	var calcularBtn = document.getElementById('calcularBtn');
	var infoSct = document.getElementById('infoSct');
	var historialBtn = document.getElementById('historialBtn');

	calcularBtn.onclick = onCalcularBtn;
	historialBtn.onclick = onHistorialBtn;

	var historialArray = [];

	function onCalcularBtn() {
		var fName = fNameIn.value;
		var lName = lNameIn.value;
		var pHabitacion = pHabitacionIn.value;
		var descuentoNormal = descuentoNormalIn.value;
		var noches = nochesIn.value;
		var tipoCliente = tipoClienteIn.value;
		var total = 0;

		switch (tipoCliente) {
			case 'normal':
				total = calcularTotal(
					descuentoNormal,
					pHabitacion,
					noches,
					NORMAL_DISCOUNT
				);
				break;
			case 'vip':
				total = calcularTotal(
					descuentoNormal,
					pHabitacion,
					noches,
					VIP_DISCOUNT
				);
				break;
			case 'premium':
				total = calcularTotal(
					descuentoNormal,
					pHabitacion,
					noches,
					PREMIUM_DISCOUNT
				);
				break;
			default:
				break;
		}

		var pagarLbl = document.createElement('h2');
		infoSct.innerHTML = '';
		infoSct.appendChild(pagarLbl);
		pagarLbl.innerHTML = `Total por pagar: <span>$${total}</span> `;

		// var historialGenerico = {
		// 	nombre: fName,
		// 	apellido: lName,
		// 	precioHabitacion: pHabitacion,
		// 	descuentoNormal: descuentoNormal,
		// 	noches: noches,
		// 	tipoCliente: tipoCliente,
		// 	total: total,
		// };

		var historial = new Historial(
			fName,
			lName,
			noches,
			pHabitacion,
			descuentoNormal,
			tipoCliente,
			total
		);
		historialArray.push(historial);

		limpiarUI();
	}

	function limpiarUI() {
		fNameIn.value = '';
		lNameIn.value = '';
		nochesIn.value = '';
		pHabitacionIn.value = '';
		descuentoNormalIn.value = 0;
		tipoClienteIn.value = 'normal';
	}

	function calcularTotal(
		descuentoNormal,
		pHabitacion,
		noches,
		porcentajePorTipoClient
	) {
		var total = 0;
		var subTotal = 0;
		var descuento = 0;

		if (descuentoNormal == NOT_DISCOUNT) {
			total = pHabitacion * noches;
		} else if (descuentoNormal == FIVE_DISCOUNT) {
			subTotal = pHabitacion * noches;
			descuento = subTotal * (FIVE_DISCOUNT / 100 + porcentajePorTipoClient);
			total = subTotal - descuento;
		} else if (descuentoNormal == TEN_DISCOUNT) {
			subTotal = pHabitacion * noches;
			descuento = subTotal * (TEN_DISCOUNT / 100 + porcentajePorTipoClient);
			total = subTotal - descuento;
		} else if (descuentoNormal == TWENTY_FIVE_DISCOUNT) {
			subTotal = pHabitacion * noches;
			descuento =
				subTotal * (TWENTY_FIVE_DISCOUNT / 100 + porcentajePorTipoClient);
			total = subTotal - descuento;
		} else {
			console.log('Error');
		}
		return total;
	}

	function onHistorialBtn() {
		var historialInfo = document.createElement('div');
		historialInfo.className = 'info-sct';
		infoSct.innerHTML = '';
		infoSct.appendChild(historialInfo);

		for (let index = 0; index < historialArray.length; index++) {
			const historial = historialArray[index];
			historialInfo.innerHTML += historial.generarReporte();
		}
	}
}
