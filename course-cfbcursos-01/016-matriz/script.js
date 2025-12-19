var mochila = [];

var item1 = ["Corda", 2],
	item2 = ["Chave", 3],
	item3 = ["Alicate", 1];

mochila.push(item1, item2, item3);

var mochila2 = [];

var item4 = {
	name: "Machado",
	quantity: 1,
};

var item5 = {
	name: "Agua",
	quantity: 5,
};

var item6 = {
	name: "Betoneira",
	quantity: 2,
};

mochila2.push(item4, item5, item6);

document.write(JSON.stringify(mochila) + "<br>");
document.write(mochila + "<br><br>");

mochila.forEach((item) => {
	document.write(`Item ${item[0]} com quantidade ${item[1]} <br>`);
});

document.write("<br>");

mochila2.forEach((item) => {
	document.write(`Item ${item.name} - ${item.quantity} <br>`);
});

mochilaGeral = [...mochila, mochila2];
document.write("<br> " + mochilaGeral);

mochilaGeral = mochila.concat(mochila2);
document.write("<br> " + JSON.stringify(mochilaGeral));
