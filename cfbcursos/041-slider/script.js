document.addEventListener("DOMContentLoaded", () => {
	const imageList = [];
	const slider = document.querySelector("#slider");
	const bar = document.querySelector("#bar");
	let animationId, currentImage, quantityImages, timeSlider;

	function preLoad() {
		quantityImages = 4;

		for (let i = 0; i < quantityImages; i++) {
			imageList[i] = new Image();
			imageList[i].src = `images/image${i + 1}.jpg`;
		}
	}

	function loadImage(imgId) {
		slider.style.backgroundImage = `url(${imageList[imgId].src})`;
	}

	function changeImage(direction) {
		timeSlider = 0;
		currentImage += direction;
		if (currentImage > quantityImages - 1) currentImage = 0;
		if (currentImage < 0) currentImage = quantityImages - 1;

		loadImage(currentImage);
	}

	function start() {
		currentImage = 0;
		timeSlider = 0;
		preLoad();
		loadImage(currentImage);
		anima();
	}

	function anima() {
		timeSlider++;

		if (timeSlider >= 500) {
			timeSlider = 0;
			changeImage(1);
		}

		bar.style.width = `${timeSlider / 5}%`;

		animationId = requestAnimationFrame(anima);
	}

	start();

	const btnPrev = document.querySelector("#btnPrev");
	btnPrev.addEventListener("click", () => {
		changeImage(-1);
	});

	const btnNext = document.querySelector("#btnNext");
	btnNext.addEventListener("click", () => {
		changeImage(1);
	});
});
