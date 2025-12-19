{
	let text1 = "A";
	let text2 = "B";
	let result = text1 < text2;
	console.log(result);
}

{
	let text1 = "20";
	let text2 = "5";
	let result = text1 < text2;
	console.log(result);
}

{
	let age = "12";
	age = Number(age);
	if (isNaN(age)) {
		voteable = "Input is not a number";
	} else {
		voteable = age < 18 ? "Too young" : "Old enough";
	}
	console.log(age, voteable);
}
