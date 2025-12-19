const form1 = document.forms.length;
document.write(`Quantidade de formulários: ${form1} <br>`);

const form2 = document.forms[0].id;
document.write(`1- Capturar form | document.forms[0].id: ${form2} <br>`);

const form3 = document.forms.item(0).id;
document.write(`2- Outra forma | document.forms.item(0).id: ${form3} <br>`);

const form4 = document.forms.namedItem("form1").id;
document.write(`3- Outra forma | document.forms.namedItem("form1").id: ${form4} <br>`);

const form5 = document.forms["form1"].id;
document.write(`4- Outra forma | document.forms["form1"].id: ${form5} <br>`);

const formBody = document.forms.namedItem("form1").innerHTML;
document.write(`Capturar elementos do form | document.forms.namedItem("form1"): <br> ${formBody} <br>`);

const formElement0 = document.forms["form1"].elements[0].value;
document.write(`Valor do elemento 1 do form1 | document.forms["form1"].elements[0].value: ${formElement0} <br>`);

const formElement1 = document.forms["form1"].elements[1].value;
document.write(`Valor do elemento 2 do form1 | document.forms["form1"].elements[1].value: ${formElement1} <br>`);

const formElements = Array.from(document.forms["form1"].elements);
formElements.forEach((element, index) => {
	element.style.backgroundColor = "blue";
	element.style.color = "white";
	element.style.border = "3px solid black";
	document.write(`Elemento ${index}: ${element.value}<br>`);
});

const form6 = document.forms["form2"];
document.write(`<hr>Elementos do form2: <br> ${form6.innerHTML}`);
