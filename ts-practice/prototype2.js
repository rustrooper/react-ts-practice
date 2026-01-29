function Rabbit() {}
Rabbit.prototype = {
	eats: true,
}

let rabbit = new Rabbit()

//1 Rabbit.prototype = {}
// true
//2 Rabbit.prototype.eats = false
// false
//3 delete rabbit.eats
// true
//4 delete Rabbit.prototype.eats
// undefined

console.log(rabbit.eats)
