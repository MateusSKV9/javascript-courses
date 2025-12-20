// length
{
	let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let length = text.length;
}

// charAt
{
	let text = "HELLO WORLD";
	let char = text.charAt(0);
	console.log(char);
}

// charCodeAt
{
	let text = "HELLO WORLD";
	let char = text.charCodeAt(0);
	console.log(char);
}

// codePointAt
{
	let text = "HELLO WORLD";
	let code = text.codePointAt(0);
	console.log(code);
}

// at{
{
	const name = "W3Schools";
	let letter = name.at(2);
	console.log(letter);
}

{
	const name = "W3Schools";
	let letter = name[2];
	console.log(letter);
}

// concat
{
	let text1 = "Hello";
	let text2 = "World";
	let text3 = text1.concat(" ", text2);
	console.log(text3);
}

// alice
{
	let text = "Apple, Banana, Kiwi";
	let part = text.slice(7, 13);
	console.log(part);
}

{
	let text = "Apple, Banana, Kiwi";
	let part = text.slice(7);
	console.log(part);
}

{
	let text = "Apple, Banana, Kiwi";
	let part = text.slice(-12);
	console.log(part);
}

{
	let text = "Apple, Banana, Kiwi";
	let part = text.slice(-12, -6);
	console.log(part);
}

// substring
{
	let str = "Apple, Banana, Kiwi";
	let part = str.substring(7, 13);
	console.log(part);
}

// toUpperCase
{
	let text1 = "Hello World!";
	let text2 = text1.toUpperCase();
	console.log(text2);
}

// toLowerCase
{
	let text1 = "Hello World!";
	let text2 = text1.toLowerCase();
	console.log(text2);
}

// isWellFormed
{
	let text = "Hello world!";
	let result = text.isWellFormed();
	console.log(result);
}

{
	let text = "Hello World \uD800";
	let result = text.isWellFormed();
	console.log(result);
}

// toWellFormed
{
	let text = "Hello World \uD800";
	let result = text.toWellFormed();
	console.log(result);
}

// trim
{
	let text1 = "      Hello World!      ";
	let text2 = text1.trim();
	console.log(text2);
}

{
	let text1 = "     Hello World!     ";
	let text2 = text1.trimStart();
	console.log(text2);
}

{
	let text1 = "     Hello World!     ";
	let text2 = text1.trimEnd();
	console.log(text2);
}

// padStart
{
	let text = "5";
	let padded = text.padStart(4, "0");
	console.log(padded);
}

{
	let text = "5";
	let padded = text.padStart(4, "x");
	console.log(padded);
}

{
	let numb = 5;
	let text = numb.toString();
	let padded = text.padStart(4, "0");
	console.log(padded);
}

{
	let text = "5";
	let padded = text.padEnd(4, "0");
	console.log(padded);
}

{
	let text = "5";
	let padded = text.padEnd(4, "x");
	console.log(padded);
}

// repeat
{
	let text = "Hello world!";
	let result = text.repeat(2);
	console.log("repeat: " + result);
}

{
	let text = "Hello world!";
	let result = text.repeat(4);
	console.log("repeat: " + result);
}

// replace
{
	let text = "Please visit Microsoft!";
	let newText = text.replace("Microsoft", "W3Schools");
	console.log(newText);
}

{
	let text = "Please visit Microsoft and Microsoft!";
	let newText = text.replace("Microsoft", "W3Schools");
	console.log(newText);
}

{
	let text = "Please visit Microsoft!";
	let newText = text.replace("MICROSOFT", "W3Schools");
	console.log(newText);
}

{
	let text = "Please visit Microsoft!";
	let newText = text.replace(/MICROSOFT/i, "W3Schools");
	console.log(newText);
}

{
	let text = "Please visit Microsoft and Microsoft!";
	let newText = text.replace(/Microsoft/g, "W3Schools");
	console.log(newText);
}

{
	let text = "Cats are awesome";
	text = text.replaceAll("Cats", "Dogs");
	text = text.replaceAll("cats", "dogs");
	console.log(text);
}

// split
{
	let text = " , | ";
	text.split(",");
	text.split(" ");
	text.split("|");
	text.split("");
}
