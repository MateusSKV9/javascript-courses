console.log("Antes do if");

if (true) {
	console.log("Dentro do if");
}

console.log("Depois do if");

var idade = 13;

if (idade < 18) {
	console.log("Não altorizado. Precisa esperar " + (18 - idade) + " anos");
} else {
	console.log("Permitido");
}
