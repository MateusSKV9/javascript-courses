var nameUser = "Mateus";
var age = 21;
var profession = "Web Developer";

var n1 = 1,
	n2 = 2,
	n3 = 3;

var text = nameUser + " - " + (2004 + 21);

document.write(
	'Para criar uma variável, basta usar a palavra chave <strong>var</strong>. Ex.: <strong>var nome = "Mateus"</strong>. <br>'
);

document.write(`Meu nome é ${nameUser}, tenho ${age} anos e sou um ${profession}. <br>`);

document.write(n1 + "+" + n2 + "+" + n3 + "=" + (n1 + n2 + n3) + "<br>");

document.write(text);
