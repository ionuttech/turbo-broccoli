function sumar(a, b) {
	console.log(a + b);
}

function restar(a, b) {
	console.log(a + b);
}

function multiplicar(a, b) {
	console.log(a + b);
}

function dividir(a, b) {
	console.log(a + b);
}

function calcular(a, b, op) {
	if (op == 'SUMAR') {
		sumar(a, b);
	} else if (op == 'RESTAR') {
		restar(a, b);
	} else if (op == 'DIVIDIR') {
		dividir(a, b);
	} else if (op == 'MULTIPLICAR') {
		multiplicar(a, b);
	}
}
module.exports = {
	calcular: calcular
};
