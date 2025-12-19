// Se o PRIMEIRO undefined/null => atribue o SEGUNDO
// Se o PRIMEIRO for diferente de undefined/null => atribue o PRIMEIRO

{
	let x;
	x ??= 10;
	console.log(x);
}

{
	let x = 0;
	x ??= 10;
	console.log(x);
}

{
	let x = null;
	x ??= 10;
	console.log(x);
}

{
	let x = undefined;
	x ??= 10;
	console.log(x);
}

{
	let x = 10;
	let y = 5;
	x ??= y;
	console.log(x);
}
