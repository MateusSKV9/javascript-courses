const dt = new Date();

let day = dt.getDate();
let weekDay = dt.getDay();
let month = dt.getMonth();
let year = dt.getFullYear();
let formatDate = dt.toLocaleDateString();

document.write(`
  Data - ${dt} <br>
  Dia da semana - ${weekDay + 1} <br>
  Dia do mês - ${day} <br>
  Mês - ${month + 1} <br>
  Ano - ${year} <br>
  Data formatada - ${formatDate}
  <br>`);

const months = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.write(`Hoje é ${week[weekDay]}, dia ${day} de ${months[month]} de ${year} <br>`);

let hours = dt.getHours();
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();

document.write(`São exatamente ${hours}:${minutes}:${seconds} <br>`);

let ndt = new Date();
ndt.setDate(dt.getDate() + 2);
document.write(
	`Para modificar datas ou horas, basta utilizar os métodos sets. <br> Por exemplo, para saber a data daqui a dois dia, pega a data atual e soma 2: ${ndt}`
);

let newDay = ndt.getDate();
let newWeekDay = ndt.getDay();

document.write(` <br>Dia ${newDay} - ${week[newWeekDay]} - ${newWeekDay}`);

ndt.setDate(dt.getDate());
ndt.setFullYear(dt.getFullYear() + 75);

document.write(`<br> Ano daqui a 10 anos: ${ndt.getFullYear()}`);

let newday = ndt.getDate();
let newweekDay = ndt.getDay();
let newmonth = ndt.getMonth();
let newyear = ndt.getFullYear();
let newformatDate = ndt.toLocaleDateString();

document.write(`<br>Hoje é ${week[newweekDay]}, dia ${newday} de ${months[newmonth]} de ${newyear} <br>`);

const dataNac = new Date(2004, 3, 30);
day = dataNac.getDate();
weekDay = dataNac.getDay();
month = dataNac.getMonth();
year = dataNac.getFullYear();
formatDate = dataNac.toLocaleDateString();

document.write(`<br>Hoje é ${week[weekDay]}, dia ${day} de ${months[month]} de ${year} <br>`);
