var inputName = prompt("Digite seu nome");
var nameUser = inputName ? inputName : "Desconhecido";

document.write("Para usar uma caixa de entrada, basta usar <strong>prompt()</strong><br>");

if (inputName) alert(nameUser);

document.write(`Seu nome é ${nameUser.toUpperCase()}`);
