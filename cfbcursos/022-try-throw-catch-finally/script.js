var num;

try {
	num = prompt("Digite um número menor que 5: ");

	if (num === null || num.trim() === "" || Number.isNaN(Number(num)) || num === undefined) {
		throw new Error("Entrada não informada.");
	}

	if (Number(num) >= 5) {
		throw new Error("Valor inválido. Número deve ser menor que 5.");
	}
} catch (error) {
	document.write(`Erro: ${error.message} <br>`);
	document.write(`Erro: ${error} <br>`);

	num = 4;
	document.write("Número definido como 4: <br>");
} finally {
	document.write(`Número digitado: ${num} <br>`);
	document.write("<br> Fim do processo ");
}
