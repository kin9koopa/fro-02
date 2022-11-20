window.onload = function () {
	var nPersona = document.getElementById('nPersona');
	var metroPersona = document.getElementById('metroPersona');
	var precioTela = document.getElementById('precioTela');
	var btnSubmit = document.getElementById('btnSubmit');
	var totalPrecio = document.getElementById('totalPrecio');

	var numeroPersonas = 0;
	var metrosPersonas = 0;
	var precioTelaMetro = 0;
	var total = 0;

	btnSubmit.onclick = function () {
		numeroPersonas = nPersona.value;
		metrosPersonas = metroPersona.value;
		precioTelaMetro = precioTela.value;

		total = numeroPersonas * metrosPersonas * precioTelaMetro;

		totalPrecio.innerHTML = 'Total por pagar: ₡' + total.toLocaleString();
	};
};
