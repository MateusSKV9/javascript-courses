const numbers = [1, 2, 3, 4, 5, 6];

// push
numbers.push(9);
console.log(numbers);

// pop
numbers.pop();
console.log(numbers);

// unshift
numbers.unshift(0);
console.log(numbers);

// shift
numbers.shift();
console.log(numbers);

// Acessar último elemento
console.log(numbers[numbers.length - 1]);

// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(numbers));
