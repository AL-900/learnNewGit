function add(a, b) {
	return a + b;
}

function newFunc(a, b, func) {
	let c = a + b;
	let d = a - b;

	return  ()=> {
		let f = func(a, b);
		console.log(c * d * f);
	};
}

let n = newFunc(24, 52, add);
// n();


