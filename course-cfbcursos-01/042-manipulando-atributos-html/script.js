document.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector("#image");

	function changeBackground(image) {
		let definedImage;

		if (image == 1) {
			definedImage = "image1";
		} else if (image == 2) {
			definedImage = "image2";
		} else if (image == 3) {
			definedImage = "image3";
		}

		box.setAttribute("class", definedImage);
	}

	function removeImage() {
		if (box.hasAttribute("class")) box.removeAttribute("class");
	}

	function checkHasImage() {
		if (box.hasAttribute("class")) alert("Tem imagem na caixa");
		else alert("Sem imagem");
	}

	document.querySelector("#image1").addEventListener("click", () => changeBackground(1));
	document.querySelector("#image2").addEventListener("click", () => changeBackground(2));
	document.querySelector("#image3").addEventListener("click", () => changeBackground(3));
	document.querySelector("#removeImage").addEventListener("click", removeImage);
	document.querySelector("#checkImage").addEventListener("click", checkHasImage);
});
