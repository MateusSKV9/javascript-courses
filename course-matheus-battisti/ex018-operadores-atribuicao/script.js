var x = 1;
var y = 2;

console.log((x += x)); // 2
console.log(x++); // 2
console.log(x); // 3
console.log(++x); // 4
console.log(x); // 4
console.log((x *= 2)); // 8
console.log((x /= 2)); // 4
console.log((x -= 2)); // 2
console.log(x ** 2); // 4
console.log((x += y)); // 4
console.log(x--); // 4
console.log(x); // 3
console.log(--x); // 2

var i = 10;
while (i >= 0) {
	console.log(i);
	i -= 2;
}
