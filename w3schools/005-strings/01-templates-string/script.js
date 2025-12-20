{
	let text = `Hello World!`;
}

{
	let text = `He's often called "Johnny"`;
}

{
	let text = `The quick
  brown fox
  jumps over
  the lazy dog`;
}

{
	let firstName = "John";
	let lastName = "Doe";

	let text = `Welcome ${firstName}, ${lastName}!`;
}

{
	let price = 10;
	let VAT = 0.25;

	let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
}

{
	let header = "Template Strings";
	let tags = ["template strings", "javascript", "es6"];

	let html = `<h2>${header}</h2><ul>`;
	for (const x of tags) {
		html += `<li>${x}</li>`;
	}

	html += `</ul>`;
}
