var posicao = 3,
	res = "";

switch (posicao) {
	case 1:
		res = "Primeiro lugar   Medalha de Ouro";
		break;
	case 2:
		res = "Segundo lugar - Medalha de prata";
		break;
	case 3:
		res = "Terceiro lugar - Medalha de bronze";
		break;
	default:
		res = "Não foi ao pódio - sem medalha";
}

res += "<br>";

switch (posicao) {
	case 1:
	case 2:
	case 3:
		res += "Subiu ao pódio";  
		break;
	default:
		res += "Não subiu ao pódio";
}

document.write(res);
