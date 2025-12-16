// removeChild
const lista = document.querySelector("#lista");
const li = document.createElement("li");
li.textContent = "Novo li";
lista.appendChild(li);

// insertBefore
const li2 = document.createElement("li");
li2.textContent = "Novo li2";
lista.insertBefore(li2, li);

// after
const li3 = document.createElement("li");
li3.textContent = "Li3";
li2.after(li3);
