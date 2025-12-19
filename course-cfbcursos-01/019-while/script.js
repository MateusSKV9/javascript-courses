var numbers = [11, 22, 33, 44, 55];

document.write("Usando loop for: <br>");

for (var i = 0; i < numbers.length; i++) {
	document.write(`${i + 1} - ${numbers[i]} <br>`);
}

document.write("<br><br> Usando loop while: <br>");

var j = 0;
while (j < numbers.length) {
	document.write(`${j + 1} - ${numbers[j]} <br>`);
	j++;
}

var newNumbers = [...numbers, ...numbers];

document.write("<br> newNumbers:");
for (var i = 0; i < newNumbers.length; i++) {
	document.write(`<br>${i + 1} - ${newNumbers[i]}`);
}

document.write("<br><br> Outra forma de usar o while: <br>");

var k = 10;
while(k--) {
  document.write(`${k} - ${numbers[k]} <br>`);
}