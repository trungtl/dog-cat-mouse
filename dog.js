function Dog(name) {
	this.name = name
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}