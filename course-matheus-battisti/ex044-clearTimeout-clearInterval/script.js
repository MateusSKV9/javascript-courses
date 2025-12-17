let x = 0;

const myTimer = setTimeout(() => {
	console.log("X é 0");
}, 1500);

x = 5;

if (x > 0) {
	clearTimeout(myTimer);
	console.log("O x passou de 0");
}

const myInterval = setInterval(() => {
	console.log("Imprimindo interval");
}, 500);

setTimeout(() => {
	console.log("Não precisamos mais repetir");
	clearInterval(myInterval);
}, 1500);
