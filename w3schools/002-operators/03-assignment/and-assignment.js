// Se o PRIMEIRO true => atribue o SEGUNDO
// Se o PRIMEIRO false => atribue o PRIMEIRO

{
	let x = true;
	let y = (x &&= 10);
	console.log(y);
}

{
	let x = false;
	let y = (x &&= 10);
	console.log(y);
}

{
	let x = 1;
	let y = (x &&= 10);
	console.log(y);
}

{
	let x = 0;
	let y = (x &&= 10);
	console.log(y);
}

{
	let x = undefined;
	let y = (x &&= 10);
	console.log(y);
}

{
	let x = null;
	let y = (x &&= 10);
	console.log(y);
}
