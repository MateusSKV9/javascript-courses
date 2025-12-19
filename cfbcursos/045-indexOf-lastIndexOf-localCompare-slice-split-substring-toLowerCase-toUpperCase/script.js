const txt = document.querySelector("p").textContent;

const resultIndexOf = txt.indexOf("M");

if (resultIndexOf >= 0) document.write("Encontrou: ");
else document.write("Não encontrou");

document.write(resultIndexOf + " - " + txt.indexOf("O") + "<br>");

const resultLastIndexOf = txt.lastIndexOf("M");

if (resultLastIndexOf >= 0) document.write("Encontrou: ");
else document.write("Não encontrou");

document.write(resultLastIndexOf + "<br>");

const txt2 = "Olá, Mundo! Meu nome é Mateus Santos.";
const resultLocalCompare = txt.localeCompare(txt2);

if (resultLocalCompare == 0) document.write("São iguais. ");
else document.write("São diferentes. ");

document.write(resultLocalCompare + "<br>");

const resultSlice = txt.slice(resultLastIndexOf, 29);

document.write(resultSlice + "<br>");

if (txt.includes("Mateus")) document.write("A paalvra 'Mateus' está na string <br>");

const resultSplit = txt.split(" ");
document.write(resultSplit + "<br>");

document.write(resultSplit[1] + "<br>");

resultSplit.forEach((word, index) => {
	document.write(index + ". " + word + "<br>");
});

// início, fim
const resultSubStr = txt.substring(resultLastIndexOf, 29);
document.write(resultSubStr + "<br>");

const resultLowerCase = txt.toLowerCase();
document.write(resultLowerCase + "<br>");

const resultToUppercase = txt.toUpperCase().substring(23, 29);
document.write(resultToUppercase + "<br>");
