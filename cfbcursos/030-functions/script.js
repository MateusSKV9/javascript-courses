function sayHello() {
	document.write("Hello, World! <br>");
}
sayHello();

function sumTwoNumbers(n1, n2) {
	return n1 + n2;
}
let result = sumTwoNumbers(3, 5);
document.write(result + "<br>");

function sum(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}
document.write(sum(1, 3, 5) + "<br>");

function sumArray(numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}
document.write(sumArray([2, 2, 2, 1]) + "<br>");

let numberList = [4, 4, 4, 4, 4];

function media(numbers) {
	let length = numbers.length;

	let total = numbers.reduce((total, num) => {
		return total + num;
	}, 0);

	return Math.round(total / length);
}

document.write(media(numberList));
