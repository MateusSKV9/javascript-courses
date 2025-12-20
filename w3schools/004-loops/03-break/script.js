{
	let text = "";
	for (let i = 0; i < 10; i++) {
		if (i === 3) {
			break;
		}
		text += "The number is " + i + "\n";
	}
	console.log(text);
}

{
	let text = "";

	loop1: for (let j = 1; j < 5; j++) {
		loop2: for (let i = 1; i < 5; i++) {
			if (i === 3) {
				break loop1;
			}
			text += i;
		}
	}
	console.log(text);
}

{
	let text = "";

	loop1: for (let j = 1; j < 5; j++) {
		loop2: for (let i = 1; i < 5; i++) {
			if (i === 3) {
				break loop2;
			}
			text += i;
		}
	}
	console.log(text);
}
