function fatorial(n) {
	if (n == 1) return 1;
	return n * fatorial(n - 1);
}
document.write(fatorial(5) + "<br>");

function contador(min, max) {
	document.write(min + "-");

	if (min < max) {
		contador(++min, max);
	}
}
contador(7, 10);

const numberList = [];

document.write("<br>");

let i = 1;
while (i < 10) {
	numberList.push(i);
	i++;
}

document.write(numberList + "<br>");

let total = numberList.reduce((total, number) => total + number, 0);

document.write(total + "<br>");

const box = document.querySelector("#box");
let ang = 0,
	anima;

function rotation() {
	box.style.transform = `rotate(${ang}deg)`;
	ang+=5;

	anima = requestAnimationFrame(rotation);
}
rotation();
