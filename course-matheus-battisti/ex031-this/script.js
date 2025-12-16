const person = {
	name: "Maria",
	age: 24,

	showName: function () {
		console.log("My name is " + this.name);
	},
	aniversario: function () {
		this.age++;
	},
};

person.showName();

console.log(person.age);

person.aniversario();

console.log(person.age);
