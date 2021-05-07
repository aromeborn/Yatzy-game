

// Return the sum of an array
function sumArray (array) {
	let summedArray = array.reduce((previousValue, currentValue) => {
		return previousValue + currentValue;
	}, 0 );

	return summedArray;
}

export default sumArray
