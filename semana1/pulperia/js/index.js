window.onload = function () {
	var cocaCola = document.getElementById('cocaCola');
	var papiOndas = document.getElementById('papiOndas');
	var hielo = document.getElementById('hielo');
	var impuesto = document.getElementById('impuesto');
	var submitBTN = document.getElementById('submitBTN');
	var totalLBL = document.getElementById('totalLBL');

	var precioCocaCola;
	var precioPapiOndas;
	var precioHielo;
	var precioImpuesto;
	var subtotal;
	var total;

	submitBTN.onclick = function () {
		precioCocaCola = Number(cocaCola.value);
		precioPapiOndas = Number(papiOndas.value);
		precioHielo = Number(hielo.value);
		precioImpuesto = Number(impuesto.value);

		subtotal = precioCocaCola + precioPapiOndas + precioHielo;
		console.log(subtotal);
		total = subtotal + subtotal * (precioImpuesto / 100);
		console.log(subtotal * (precioImpuesto / 100));
		console.log(total);

		totalPrecio.innerHTML = 'Total por pagar: ₡' + total.toLocaleString();
	};
};
