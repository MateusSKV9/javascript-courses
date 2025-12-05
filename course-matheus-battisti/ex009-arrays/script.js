var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers);

numbers.forEach((number) => console.log(number));

var numbers2 = [-1, 0, ...numbers];
console.log(numbers2);

var [, , ...numbers3] = numbers;
console.log(numbers3);

var obj = { ...numbers };
console.log(obj);
