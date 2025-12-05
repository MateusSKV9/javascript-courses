var nome = "Mateus Santos";

if (nome == "Mateus Santos") {
	console.log("Autorizado");
} else if (nome.includes("Mateus") || nome.includes("Santos")) {
	console.log("Parcialmente permitido");
} else {
	console.log("Negado");
}
