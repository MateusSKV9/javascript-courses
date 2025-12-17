function exibir(num) {
	console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
	let op = a + b;
	callback(a, b, op);
}

function showReult(a, b, result) {
	console.log(`A soma ${a} + ${b} = ${result}`);
}

function multi(a, b, cb) {
	let op = a * b;
	cb(op);
}

soma(1, 2, exibir);
multi(3, 4, exibir);
soma(2, 3, showReult);
