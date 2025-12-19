var numbers = ["Mateus", "Marcos", "João", "Lucas"];
numbers.sort((a, b) => b.localeCompare(a));

for (var i = 0; i < numbers.length; i++) {
	document.write(`${i + 1} - ${numbers[i]} <br>`);
}

document.write("<br>");

for (var i = 0; i < 20; i++) {
	document.write(i + " - ");
}

var numbersPares = [0, 2, 4, 6, 8];
var numbersImpares = [1, 3, 5, 7, 9];
var geral = [];

for (var i = 0; i < numbersPares.length; i++) {
	geral.push(numbersPares[i]);
}
document.write("<br>" + geral);

for (var i = 0; i < numbersImpares.length; i++) {
	geral.push(numbersImpares[i]);
}
document.write("<br>" + geral);

document.write("<br><br> Usando for: " + geral.sort());

geral = [];
document.write("<br>" + geral);

geral = [...numbersPares, ...numbersImpares];
document.write("<br> Usando rest operator: " + geral.sort());

document.write("<br>" + typeof geral[1]);

geral = [];

geral = numbersPares.concat(numbersImpares);
document.write("<br><br> Usando concat: " + geral.sort());

document.write("<br>" + typeof geral[1] + "<br>");

var newNumbers = [];

for (var i = 0; i < 5; i++) {
	newNumbers.push(prompt(`Digite o ${i + 1} número: `));
}

document.write(newNumbers.join(" - "));
