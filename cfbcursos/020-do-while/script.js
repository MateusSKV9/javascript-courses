var num = 0;

document.write("Usando do while: <br>");
do {
	document.write(`${num + 1} <br>`);
	num++;
} while (num < 10);

document.write("<br>");

var num2 = 15;

document.write("Executa pelo menos uma vez: <br>");
do {
	document.write(`${num2} <br>`);
} while (num2 < 10);

document.write("<br> Usando while: <br>");

while (num2 < 10) {
	document.write(`${num2} <br>`);
}
