export class Background {
	constructor(bgType) {
		this.bgType = Number(bgType);
		this.url = '';
		this.xpos = 0;
		this.speed = 1;
		this.gameBody = document.getElementById('gameBody');

		switch (this.bgType) {
			case 1:
				this.url = '../images/backgrounds/nature.jpg';
				break;
			case 2:
				this.url = '../images/backgrounds/dirt.png';
				break;
			case 3:
				this.url = '../images/backgrounds/dirt2.png';
				break;
			case 4:
				this.url = '../images/backgrounds/farm.png';
				break;
		}
		console.log(this.bgType);

		this.createBG();
	}

	createBG() {
		this.gameBody.style.background = `url('${this.url}') repeat-x`;
		this.gameBody.style.right = this.xpos + 'px';
	}
	updateBG() {
		console.log('hello');
		this.xpos += this.speed;
		this.gameBody.style.right = this.xpos + 'px';

		if (this.xpos >= window.innerWidth) {
			this.xpos = -100;
		}
	}
}
