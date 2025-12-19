const txt = document.querySelector("p").textContent;

const resultSearch = txt.search(/mateus/i);
document.write(resultSearch + "<br>");

const resultReplace = txt.replace(/mateus/gi, "Programador");
document.write(resultReplace + "<br>");

const resultCharAt = txt.charAt(23);
document.write(resultCharAt + "<br>");

const resultCharCodeAt = txt.charCodeAt(23);
document.write(resultCharCodeAt + "<br>");

const resultFromCharCode = String.fromCharCode(resultCharCodeAt);
document.write(resultFromCharCode + "<br>");

const contentConcat = " mateus é um desenvolvedor web.";
const resultConcat = txt.concat(contentConcat);
document.write(resultConcat + " Estou aprendendo JavaScript.");
