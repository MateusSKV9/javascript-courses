{
	let hour = 17;
	if (hour < 18) {
		greeting = "Good day";
	}
	console.log(greeting);
}

{
	let age = 18;
	let text = "You can Not drive";

	if (age >= 18) {
		text = "You can drive";
	}
	console.log(text);
}

{
	let age = 16;
	let text = "You can Not drive";

	if (age >= 18) {
		text = "You can drive";
	}
	console.log(text);
}

{
	let age = 16;
	let country = "USA";
	let text = "You can Not drive!";

	if (country == "USA") {
		if (age >= 16) {
			text = "You can drive!";
		}
	}
	console.log(text);
}

{
	let age = 16;
	let country = "USA";
	let text = "You can Not drive!";

	if (country == "USA" && age >= 16) {
		text = "You can drive!";
	}
	console.log(text);
}
