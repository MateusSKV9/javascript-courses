var mochila = [];

mochila.push("Faca");
mochila.push("Corda");
mochila.push("Pederneira");
mochila.push("Chave");

document.write(mochila.indexOf("Faca") + "<br>");
document.write(mochila.indexOf("Cor") + "<br>");
document.write('| Pesquisar index no array - <strong>array.indexOf("")</strong> <br>');

pos = mochila.indexOf("Pederneira");

if (pos < 0) {
	document.write("Ítem não está na mochila");
} else {
	document.write(`Ítem na posição ${pos}`);
}

mochila.splice(pos, 1);
document.write("<br>" + mochila);

var numbers = [3, 5, 2, 1, 7, 9, 6, 0, 4, 5, 8];

document.write("<br><br>");
document.write(numbers.sort());
document.write("<br>" + numbers);
document.write("<br>" + numbers.reverse());

var numbers2 = [10, 20, 30, 40, 50];

var numbersGeral = numbers.concat(numbers2);

document.write("<br><br>");
document.write(numbersGeral);
