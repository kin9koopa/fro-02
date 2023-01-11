/**
 * @name main.js
 * @file Add a small description for this file.
 * @author Esteban Padilla, ep@estebanpadilla.com
 * @version 1.0.0
 */

'use strict';

window.addEventListener('load', init, false);
import { Background } from '../js/background/bg.js';
import { Car } from '../js/car/car.js';

function init() {
	var carsSlt = document.getElementById('carsSlt');
	var speedSlt = document.getElementById('speedSlt');
	var bgSelection = document.getElementById('bgSelection');
	var addBtn = document.getElementById('addBtn');
	var changeBG = document.getElementById('changeBgBtn');

	addBtn.onclick = onAddCar;
	changeBG.onclick = onAddBg;

	function onAddCar() {
		var type = carsSlt.value;
		var speed = Number(speedSlt.value);
		var car = new Car(type, speed);

		var bgType = bgSelection.value;
	}
	function onAddBg() {
		var bgType = bgSelection.value;
		var background = new Background(bgType);
		console.log(bgType);
	}

	//Agregar las siguientes clases
	//1. Street: Esta es una imagen que se mueve lentamente y es donde estan los caros
	//1. City : Esta es una imagen de fondo que se mueve lentamente.

	//Hacer el efecto que el escenario nunca termina.
}
