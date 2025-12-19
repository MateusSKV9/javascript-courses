const PI = 3.14;

document.write(
	"Para usar uma constante, basta usar <strong>const</strong>. Ex.: <strong>const PI = 3.14.</strong> <br>"
);

document.write(`A constante PI vale ${3.14}. <br>`);

document.write("Não é permitido alterar o valor de uma constante. <br>");

try {
	PI = 3;
} catch (error) {
	document.write(error);
}

document.write(`<br> Este valor de PI já é da biblioteca Math: ${Math.PI}`);
