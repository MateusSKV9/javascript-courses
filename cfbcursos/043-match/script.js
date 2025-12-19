const txt = document.querySelector("#txt").textContent;

document.write(txt.match("Curso") + "<br>");
document.write(txt.match("curso") + "<br>");

document.write(txt.match("curso").length + "<br>");
document.write(txt.match(/u/g) + "<br>");
document.write(txt.match(/u/g).length + "<br>");

document.write(txt.match(/curso/gi) + "<br>");
document.write(txt.match(/curso/gi).length + "<br>");

document.write(txt.match(/o/gi) + "<br>");
document.write(txt.match(/o/gi).length + "<br>");

document.write(txt.match(/a|o/gi) + "<br>");
document.write(txt.match(/a|o/gi).length + "<br>");

document.write(txt.match(/[^urso]/gi) + "<br>");

document.write(txt.match(/[a-b]/gi) + "<br>");
document.write(txt.match(/\bS[a-zA-Z]*/g) + "<br>");
document.write(txt.match(/\bj\w*/gi) + "<br>");

const wordQuantity = txt.split(/\s+/);
document.write(`Quantidade de palavras: ${wordQuantity.length} <br>`);

const sentence = "Olá, Mundo! Eu tenho um guarda-chuva e pré-requisito. B18";
document.write("Sentença: " + sentence + "<br>");

const words = sentence.match(/\b[\w\u00C0-\u00FF-]+/g);
document.write(words + " - " + words.length);
