{
	let hour = 17;
	let greeting = "";
	if (hour < 18) {
		greeting = "Good day";
	} else {
		greeting = "Good evening";
	}
	console.log(greeting);
}

{
	let time = 22;
	let greeting = "";
	if (time < 10) {
		greeting = "Good morning";
	} else if (time < 20) {
		greeting = "Good day";
	} else {
		greeting = "Good evening";
	}
	console.log(greeting);
}

{
	let text;
	if (Math.random() < 0.5) {
		text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
	} else {
		text = "<a href='https://wwf.org'>Visit WWF</a>";
	}
	document.getElementById("demo").innerHTML = text;
}
