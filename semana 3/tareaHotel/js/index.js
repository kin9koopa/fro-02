window.addEventListener('load', init, false);

function init() {
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
		var descuento = 0;
		var subTotal = 0;
		var total = 0;

		var pagarLbl = document.createElement('h2');

		switch (tipoCliente) {
			case 'normal':
				infoSct.innerHTML = '';

				if (descuentoNormal == 0) {
					total = pHabitacion * noches;
				} else if (descuentoNormal == 5) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.05;
					total = subTotal - descuento;
				} else if (descuentoNormal == 10) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.1;
					total = subTotal - descuento;
				} else if (descuentoNormal == 25) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.25;
					total = subTotal - descuento;
				} else {
					console.log('Error');
				}
				infoSct.appendChild(pagarLbl);
				pagarLbl.innerHTML = `Total por pagar: <span>$${total}</span> `;
				break;

			case 'vip':
				infoSct.innerHTML = '';

				if (descuentoNormal == 0) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.05;
					total = subTotal - descuento;
				} else if (descuentoNormal == 5) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.1;
					total = subTotal - descuento;
				} else if (descuentoNormal == 10) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.15;
					total = subTotal - descuento;
				} else if (descuentoNormal == 25) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.3;
					total = subTotal - descuento;
				} else {
					console.log('Error');
				}
				infoSct.appendChild(pagarLbl);
				pagarLbl.innerHTML = `Total por pagar: <span>$${total}</span> `;
				break;

			case 'premium':
				infoSct.innerHTML = '';

				if (descuentoNormal == 0) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.1;
					total = subTotal - descuento;
				} else if (descuentoNormal == 5) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.15;
					total = subTotal - descuento;
				} else if (descuentoNormal == 10) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.2;
					total = subTotal - descuento;
				} else if (descuentoNormal == 25) {
					subTotal = pHabitacion * noches;
					descuento = subTotal * 0.35;
					total = subTotal - descuento;
				} else {
					console.log('Error');
				}

				infoSct.appendChild(pagarLbl);
				pagarLbl.innerHTML = `Total por pagar: <span>$${total}</span> `;
				break;

			default:
				break;
		}

		var historial = {
			fName: fName,
			lName: lName,
			pHabitacion: pHabitacion,
			descuentoNormal: descuentoNormal,
			noches: noches,
			tipoCliente: tipoCliente,
			total: total,
		};

		historialArray.push(historial);

		fNameIn.value = '';
		lNameIn.value = '';
		nochesIn.value = '';
	}

	function onHistorialBtn() {
		var historialInfo = document.createElement('div');
		historialInfo.className = 'info-sct';
		infoSct.appendChild(historialInfo);
		console.log('clicked');

		historialArray.forEach(function (historial) {
			console.log(historial);

			historialInfo.innerHTML += `<div class="cliente">Tipo de cliente: 
            ${historial.tipoCliente.toUpperCase()}</div>
            <div class="fullNombre">Nombre: ${historial.fName}
			 ${historial.lName} </div>
            <div class="precio">Precido de Habitacion: $${
							historial.pHabitacion
						}</div> 
            <div class="descuento">Descuento: ${historial.descuentoNormal}% 
            Noches: ${historial.noches} 
             </div>
            <div class="pagoTotal">Total: $${historial.total}</div> <hr>`;
		});
	}
}
