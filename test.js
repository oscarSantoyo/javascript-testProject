var output = (function (x) {
	delete x;
	return x;
})(0);

console.log(output);

let yoMero = {
	  // name: 'Oscarin',
  	// currentYear: 2019,
  	// birthYear: 1992,
  	age: function () {return this.currentYear - this.birthYear},
  	toString: function () { return `Soy ${this.name} y tengo ${this.age()} anhos`}
};


console.log(yoMero.age());
console.log(yoMero.toString());


let newInstance =  Object.create(yoMero);
// console.log(yoMero);
yoMero.name = 'Nuevo nombre';
console.log(newInstance.toString());
// let newObject = new yoMero();
