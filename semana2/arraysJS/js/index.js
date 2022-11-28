window.onload = init;
function init() {
	var gastoDiario1 = 230;
	var gastoDiario2 = 420;
	var gastoDiario3 = 530;
	var gastoDiario4 = 30;
	var gastoDiario5 = 180;
	var gastoDiario6 = 180;
	var gastoDiario7 = 130;

	var total =
		gastoDiario1 +
		gastoDiario2 +
		gastoDiario3 +
		gastoDiario4 +
		gastoDiario5 +
		gastoDiario6 +
		gastoDiario7;

	console.log(total);

	var gastosDiarios = [];

	//Arrays
	// var gastosDiarios = [240, 420, 530, 30, 410, 180, 130];

	// console.log(gastosDiarios.length); how long an array is .lenght

	// console.log(gastosDiarios[5]); array[5] is to grab the position within the arry. ararys always start at 0!!

	// array.push will add content/elements to the end of the array

	// array.splice (you select where to go in the index, how many you wish to replace, the number/element you wish to add to the array)

	gastosDiarios.push(230);
	gastosDiarios.push(420, 69);
	gastosDiarios.push(530);
	gastosDiarios.push(30);
	gastosDiarios.push(410);
	gastosDiarios.push(180);
	gastosDiarios.push(130);

	gastosDiarios.splice(3, 1, 1000);

	console.log(gastosDiarios);
}
