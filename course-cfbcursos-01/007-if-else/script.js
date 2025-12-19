var user = {
	name: "Mateus",
	age: 21,
	profession: "Web Developer",
	address: {
		country: "Brasil",
		cep: "12345-123",
	},
};

var nameEstudent = "Marta";
var ageEstudent = 20;

var student = {
	nameEstudent,
	ageEstudent,
};

var age = 21;

if (user.age > 18) {
	document.write("Maior de idade");
} else {
	document.write("Menor de idade");
}

document.write("<br>");

if (user.name.toLowerCase == "mateus") {
	document.write("Usuário  autorizado");
} else {
	document.write("Usuário não autorizado");
}

document.write(
	`<br>Usuário: ${user.name}, ${user.age} anos - ${user.profession}. Endereço ${user.address.country} - ${user.address.cep}`
);

document.write(`<br>Estudante: ${student.nameEstudent} - ${student.ageEstudent}`);

document.write("<br>");

var idade = 59;

if (idade < 13) {
	document.write("Criança");
} else if (idade < 18) {
	document.write("Adolescente");
} else if (idade < 60) {
	document.write("Adulto");
} else {
	document.write("Idoso");
}
