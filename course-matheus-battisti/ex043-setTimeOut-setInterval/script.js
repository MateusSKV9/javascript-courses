console.log("Antes do console");

setTimeout(() => {
	console.log("Ativou depois de 2s");
}, 2000);

setInterval(() => {
	console.log("Ativado a cada 1s");
}, 1000);

console.log("Depois do console");
