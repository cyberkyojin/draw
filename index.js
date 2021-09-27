const things = [];

function addThing(thing) {
	things.push(thing);
}

addThing("Node");
addThing("Python");
addThing("PHP");

function draw(array) {
	let r = Math.floor(Math.random() * 3);
	return array[r];
}

console.log(draw(things));
