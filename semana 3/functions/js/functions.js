window.addEventListener('load', init, false);

function init() {
	var num1 = 299;
	var nums = [2, 3, 4];

	function restar(pnum2, pnum1, pnum3) {
		let resultado = pnum2 - 2 + pnum1;
		console.log(resultado);
	}

	function sumar() {
		var pnum2 = 290;
		// console.log(pnum2 + 1);
		restar(200, pnum2, 0);
		dividir();
		return 'Sumar completado';
	}

	function dividir() {
		var pnum2 = 20;
		var numero6 = 20;
		var numero8 = 20;
		restar(pnum2, numero6, numero8);

		function dividirB() {
			console.log(num1);
		}

		dividirB();
	}

	console.log(nums);

	function sumarEnArreglo(pnums) {
		var total = 0;
		pnums.forEach((num, indice) => {
			// nums[indice] = nums[indice] * 2;
			total = total + num;
		});
		return total;
	}

	console.log('Resultado:', sumarEnArreglo(nums));
	sumar();
	console.log(sumar());
}
