window.addEventListener('load', init, false);
function init() {
	var numsSlt = document.getElementById('numsSlt');
	var runBtn = document.getElementById('runBtn');

	runBtn.onclick = onRunBtn;

	var nums = [1, 1, 36, 4, 5, 6, 7, 8, 9, 20];
	var numSelected = 0;

	function onRunBtn() {
		var numSelected = Number(numsSlt.value);
		console.log(numSelected);

		// 	if (numSelected === 1) {
		// 		console.log('ejecutando camino 1');
		// 	} else if (numSelected === 2) {
		// 		console.log('ejecutando camino 2');
		// 	} else if (numSelected === 3) {
		// 		console.log('ejecutando camino 3');
		// 	} else if (numSelected === 4) {
		// 		console.log('ejecutando camino 4');
		// 	} else if (numSelected === 5) {
		// 		console.log('ejecutando camino 5');
		// 	} else if (numSelected === 6) {
		// 		console.log('ejecutando camino 6');
		// 	} else if (numSelected === 7) {
		// 		console.log('ejecutando camino 7');
		// 	} else if (numSelected === 8) {
		// 		console.log('ejecutando camino 8');
		// 	} else if (numSelected === 9) {
		// 		console.log('ejecutando camino 9');
		// 	} else {
		// 		console.log('ejecutando camino sin numero');
		// 	}
		// }

		switch (numSelected) {
			case 1:
				console.log('ejecutando camino 1');

				break;
			case 2:
				console.log('ejecutando camino 2');

				break;
			case 3:
				console.log('ejecutando camino 3');

				break;
			case 4:
				console.log('ejecutando camino 4');

				break;
			case 5:
				console.log('ejecutando camino 5');

				break;
			case 6:
				console.log('ejecutando camino 6');

				break;
			case 7:
				console.log('ejecutando camino 7');

				break;
			case 8:
				console.log('ejecutando camino 8');

				break;
			case 9:
				console.log('ejecutando camino 9');

				break;

			default:
				console.log('ejecutando camino sin numero');
				break;
		}
	}
}
