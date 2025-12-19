{
	let x = 6;
	let y = 3;
	let z = x < 10 && y > 1;
	console.log(z);
}

{
	let x = 6;
	let y = -3;
	let z = x > 0 || y > 0;
	console.log(z);
}

{
	let x = 5 == 8;
	let y = !(5 == 8);
	console.log(x);
	console.log(y);
}

{
	let name = null;
	let text = "missing";
	let result = name ?? text;
	console.log(result);
}

{
	let name = "";
	let text = "missing";
	let result = name ?? text;
	console.log(result);
}
