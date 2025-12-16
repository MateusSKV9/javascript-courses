sum(1, 2);
function sum(a, b) {
	console.log(a + " + " + b + " = " + (a + b));
}
sum(5, 4);

showName("Mateus");
function showName(name) {
	console.log("Your name is " + name);
}
showName("Santos");

const multiplicao = (a, b) => console.log(`${a} * ${b} = ${a * b}`);
multiplicao(2, 3);
multiplicao(5, 4);

const sayHello = () => {
	console.log("Hello");
};
sayHello();

const power2 = (a) => Math.pow(2, a);

let resultado = power2(9);
console.log(resultado);
