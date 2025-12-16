const person = {
	name: "Maria",
	age: 24,
	toSay: () => console.log("Hello"),
	sum: (a, b) => a + b,
};

console.log(person);
person.toSay();
console.log(person.sum(2, 3));
