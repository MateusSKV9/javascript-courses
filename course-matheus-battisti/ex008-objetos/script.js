var obj = {
	nome: "Ana",
	sobrenome: "Maria",
	idade: 22,
	profissao: "Programadora",
	estaTrabalhando: true,
};
console.log(obj);
console.log(typeof obj);
console.log(obj.nome + " " + obj.sobrenome);

console.log("---------------------------");

if (!obj.id) {
	obj.id = Math.floor(Math.random() * 10);
}
console.log(obj);

console.log("---------------------------");

var obj2 = { ...obj, dataNasc: "10-10-2000" };
console.log(obj2);

console.log("---------------------------");

var { profissao, ...obj3 } = obj2;
console.log(obj3);
