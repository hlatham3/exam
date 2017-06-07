Array.prototype.map = function (func) { /* YOUR CODE HERE */ 

	var newArray = [];
	this.forEach(function(value,index) {
		newArray.push(func(value,index));
	});
	
	return newArray;

};
 