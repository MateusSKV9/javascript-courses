// Se o PRIMEIRO false => atribue o SEGUNDO
// Se o PRIMEIRO true => atribue o PRIMEIRO

{
	let x = false;
	let y = (x ||= 10);
	console.log(y);
}

{
	let x = true;
	let y = (x ||= 10);
	console.log(y);
}

{
	let x = null;
	let y = (x ||= 10);
	console.log(y);
}

{
	let x = undefined;
	let y = (x ||= 10);
	console.log(y);
}
