var mochila = [];

mochila.push("Final");
document.write("<br>| Adiciona no final - <strong>push()</strong> => " + mochila);

mochila.unshift("Início");
document.write("<br>| Adiciona no início - <strong>unshift()</strong> => " + mochila);

mochila.push("Final2");
document.write("<br>| Adiciona no final - <strong>push()</strong> => " + mochila);

mochila.pop();
document.write("<br>| Remove no final - <strong>pop()</strong> => " + mochila);

mochila.unshift("Início2");
document.write("<br>| Adiciona no início - <strong>unshift()</strong> => " + mochila);

mochila.shift();
document.write("<br>| Remove no início - <strong>shift()</strong> => " + mochila);

mochila.push(1, 2, 3, 4);
document.write("<br>| Adiciona no final - <strong>push()</strong> => " + mochila);

mochila.splice(2, 3);
document.write("<br>| Remove quantos em qualquer lugar - <strong>splice(start, quantidade)</strong> => " + mochila);
