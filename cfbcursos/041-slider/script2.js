document.addEventListener("DOMContentLoaded", () => {
	const sliderManager = {
		imageList: [],
		slider: document.querySelector("#slider"),
		bar: document.querySelector("#bar"),
		btnPrev: document.querySelector("#btnPrev"),
		btnNext: document.querySelector("#btnNext"),
		animationId: null,
		totalImages: 4,
		currentImage: 0,
		imageInterval: 3000,
		timeSlider: 0,
		lastTimestamp: 0,

		preLoad() {
			for (let i = 0; i < this.totalImages; i++) {
				this.imageList[i] = new Image();
				this.imageList[i].src = `images/image${i + 1}.jpg`;
			}
		},

		loadImage() {
			this.slider.style.backgroundImage = `url(${this.imageList[this.currentImage].src})`;
		},

		changeImage(direction) {
			this.currentImage += direction;
			if (this.currentImage > this.totalImages - 1) this.currentImage = 0;
			if (this.currentImage < 0) this.currentImage = this.totalImages - 1;

			this.loadImage();
			this.resetTimer();
		},

		updateBar(timestamp) {
			const elapsed = timestamp - this.lastTimestamp;
			this.timeSlider += elapsed;

			if (this.timeSlider >= this.imageInterval) {
				this.bar.style.width = `100%`;

				setTimeout(() => {
					this.timeSlider = 0;
					this.changeImage(1);
				}, 10);
			} else {
				const barWidth = (this.timeSlider / this.imageInterval) * 100;
				this.bar.style.width = `${barWidth}%`;
			}

			this.lastTimestamp = timestamp;
			this.animationId = requestAnimationFrame(this.updateBar.bind(this));
		},

		resetTimer() {
			this.timeSlider = 0;
			this.lastTimestamp = performance.now();
		},

		init() {
			this.preLoad();
			this.loadImage();
			this.resetTimer();
			this.animationId = requestAnimationFrame(this.updateBar.bind(this));

			this.btnPrev.addEventListener("click", () => this.changeImage(-1));
			this.btnNext.addEventListener("click", () => this.changeImage(1));
		},
	};

	sliderManager.init();
});
