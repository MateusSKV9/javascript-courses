{
	const cars = ["BMW", "Volvo", "Saab", "Ford"];
	let len = cars.length;

	let text = "";
	for (let i = 0; i < len; i++) {
		text += cars[i] + " ";
	}
	console.log(text);
}

{
	const cars = ["BMW", "Volvo", "Saab", "Ford"];
	let len = cars.length;

	let i = 2;

	let text = "";
	for (; i < len; i++) {
		text += cars[i] + " ";
	}
	console.log(text);
}

{
	const cars = ["BMW", "Volvo", "Saab", "Ford"];
	let len = cars.length;

	let i = 0;

	let text = "";
	for (; i < len; ) {
		text += cars[i] + "  ";
		i++;
	}
	console.log(text);
}

{
	for (let i = 0; i < 10; i++) {
		// some code
	}

	// console.log(i); ERROR
}
