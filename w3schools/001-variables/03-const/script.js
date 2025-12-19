const PI1 = 3.141592653589793;
// PI1 = 3.14;      // error
// PI1 = PI + 10; // error

const PI = 3.14159265359;

// const in arrays
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

cars[0] = "Toyota";

cars.push("Audi");
console.log(cars);

// const in objects
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);

car.color = "red";

car.owner = "Johnson";
console.log(car);

// scope
const x = 10;
// Here x is 10

{
	const x = 2;
	// Here x is 2
}
