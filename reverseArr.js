module.exports = function reverseArr(arr) { 

	let j = arr.length -1;
	let i = 0
	var tempVal = ''

	while (i <= j) {

		tempVal = arr[j];

		arr[j] = arr[i];
		arr[i] = tempVal;

		i++
		j--

	}

	return arr;

}