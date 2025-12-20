//indexOf
{
	let text = "Please locate where 'locate' occurs!";
	let index = text.indexOf("locate");
	console.log(index);
}

console.log("-----------");

// lastIndexOf
{
	let text = "Please locate where 'locate' occurs!";
	let index = text.lastIndexOf("locate");
	console.log(index);
}

{
	let text = "Please locate where 'locate' occurs!";
	let index = text.lastIndexOf("John");
	console.log(index);
}

{
	let text = "Please locate where 'locate' occurs!";
	let index = text.indexOf("locate", 15);
	console.log(index);
}

{
	let text = "Please locate where 'locate' occurs!";
	console.log(text.lastIndexOf("locate", 15));
}
console.log("-----------");

// search
{
	let text = "Please locate where 'locate' occurs!";
	console.log(text.search("locate"));
}

{
	let text = "Please locate where 'locate' occurs!";
	console.log(text.search(/locate/));
}
console.log("-----------");

// match
{
	let text = "The rain in SPAIN stays mainly in the plain";
	console.log("match:" + text.match("ain"));
}

{
	let text = "The rain in SPAIN stays mainly in the plain";
	console.log("match:" + text.match(/ain/));
}

{
	let text = "The rain in SPAIN stays mainly in the plain";
	console.log("match:" + text.match(/ain/g));
}

{
	let text = "The rain in SPAIN stays mainly in the plain";
	console.log(text.match(/ain/gi));
}
console.log("-----------");

// matchAll
{
	let text = "Are Cats";
	const iterator = text.matchAll("Cats");
	console.log(iterator);
}

{
	let text = "Are Cats";
	const iterator = text.matchAll(/Cats/g);
	console.log(iterator);
}

{
	let text = "Are Cats";
	const iterator = text.matchAll(/Cats/gi);
	console.log(iterator);
}
console.log("-----------");

// includes
{
	let text = "Hello world, welcome to the universe.";
	console.log(text.includes("world"));
}

{
	let text = "Hello world, welcome to the universe.";
	console.log(text.includes("world", 12));
}
console.log("-----------");

// startWith
{
	let text = "Hello world, welcome to the universe.";
	console.log(text.startsWith("Hello"));
}

{
	let text = "Hello world, welcome to the universe.";
	console.log(text.startsWith("world"));
}

{
	let text = "Hello world, welcome to the universe.";
	console.log(text.startsWith("world", 5));
}

{
	let text = "Hello world, welcome to the universe.";
	console.log(text.startsWith("world", 6));
}
console.log("-----------");

// endWith
{
	let text = "John Doe";
	console.log(text.endsWith("Doe"));
}

{
	let text = "Hello world, welcome to the universe.";
	console.log(text.endsWith("world", 11));
}
