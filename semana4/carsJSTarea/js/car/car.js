export class Car {
	constructor(type, speed) {
		this.type = Number(type);
		this.url = '';
		this.xpos = 0;
		this.gameBody = document.getElementById('gameBody');
		this.div = document.createElement('div');
		this.speed = speed;

		switch (this.type) {
			case 1:
				this.url = '../images/cars/car1.png';
				break;
			case 2:
				this.url = '../images/cars/car2.png';
				break;
			case 3:
				this.url = '../images/cars/car3.png';
				break;
			case 4:
				this.url = '../images/cars/car4.png';
				break;
			default:
				break;
		}

		this.createUI();
		window.setInterval(this.update.bind(this), 1000 / 60);
	}

	createUI() {
		this.div.className = 'car';
		this.div.style.left = this.xpos + 'px';
		var img = document.createElement('img');
		img.src = this.url;
		this.div.appendChild(img);
		this.gameBody.appendChild(this.div);
	}

	update() {
		this.xpos += this.speed;
		this.div.style.left = this.xpos + 'px';

		if (this.xpos >= window.innerWidth) {
			this.xpos = -256;
		}
	}
}
