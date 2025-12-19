var nota = 99;
var res = "";

if (nota >= 60) {
	res = "Aprovado ";

	if (nota >= 95) {
		if (nota == 100) {
			res = "com excelência";
		} else {
			res += "com louvor";
		}
	} else {
		res += "com nota normal";
	}
} else if (nota >= 40) {
	res = "Recuperação";
} else {
	res = "Reprovado ";

	if (nota >= 20) {
		res += "por nota baixa";
	} else {
		res += "com louvor";
	}
}

document.write(`O aluno está <strong>${res}`);
