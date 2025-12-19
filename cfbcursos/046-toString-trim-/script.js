let txt = document.querySelector("p").textContent;

let number = 15;

document.write(number.toString() + " - " + typeof number.toString() + "<br>");

document.write(number.toString(2) + "<br>");
document.write(number.toString(4) + "<br>");
document.write(number.toString(8) + "<br>");
document.write(number.toString(16) + "<br>");

txt = '                      Olá, Mundo!  "Só sei que nada sei "    ';
alert(txt.trim() + "\n" + "Sim");
