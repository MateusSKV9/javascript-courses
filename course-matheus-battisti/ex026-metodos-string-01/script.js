// length
let nome = "World";
console.log(nome.length);

// indexOf
let frase1 = "Hello, World!";
let indexWorld = frase1.indexOf("World");
console.log(nome.indexOf("s"));
console.log(indexWorld);

// slice
let palavra = "World";
let world = frase1.slice(indexWorld, indexWorld + palavra.length);
console.log(world);

// replace
let novaFrase = frase1.replace("World", "Mundo");
console.log(novaFrase)