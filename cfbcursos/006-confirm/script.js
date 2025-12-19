var answer = confirm("Deseja continuar?");

document.write((answer ? "Continuou" : "Cancelou") + "<br>");

if (answer) {
	alert("Bem-vindo(a).");
	var nameUser = prompt("Qual seu nome?");

	document.write(nameUser || "Desconhecido");
}
