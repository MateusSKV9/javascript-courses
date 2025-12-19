const pi = Math.PI;
const euler = Math.E;
const sqrt2 = Math.SQRT2;
const absolute = Math.abs(-45);
const sqrt4 = Math.sqrt(4);
const valueCeil = Math.ceil(2.45);
const valueFloor = Math.floor(4.9);
const valeuRound = Math.round(4.5);
const cosseno = Math.cos((45 * pi) / 180);
const seno = Math.sin((45 * pi) / 180);

const numbers = [1, 2, 55, 78, -912, 2345];

const maxValue = Math.max(1, 4, 99, 293);
const maxValueArray = Math.max(...numbers);

const minValue = Math.min(-1, -92, 9, 2);
const minValueArray = Math.min(...numbers);

document.write(`
    ${pi} <br>
    ${euler} <br>
    ${sqrt2} <br>
    ${absolute} <br>
    ${sqrt4} <br>
    ${valueCeil} <br>
    ${valueFloor} <br>
    ${valeuRound} <br>
    ${cosseno} <br>
    ${seno} <br>
    ${maxValue} <br>
    ${minValue} <br>
    ${minValueArray} <br>
    ${maxValueArray} <br>
`);

const btnRandom = document.querySelector("#btnRandom");
let p = document.querySelector("#pRandom");
btnRandom.addEventListener("click", () => {
	p.textContent = Math.floor(Math.random() * 10);
});
