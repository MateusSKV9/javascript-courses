//aplice
const arr = [1, 2, 3, 4, 5, 6];

arr.splice(1, 0, 99);
console.log(arr);

arr.splice(2, 1, 88);
console.log(arr);

arr.splice(0, 3);
console.log(arr);

// indexOf
console.log(arr.indexOf(3));

// join
const list = ["I", "Love", "JavaScript"];
console.log(list.join(" "));

// reverse
console.log(list.reverse());
