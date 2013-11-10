document.getElementById('celsius').onkeydown = convert;
document.getElementById('farhenheit').onkeydown = convert;

function convert(){
	if ('celsius' == this.id) {
		var celsius = this.value;
		farhenheit = convertCelsiusToFarhenheit(celsius);
		this.nextElementSibling.value = farhenheit;
	} else if ('farhenheit' == this.id) {
		var farhenheit = this.value;
		celsius = convertFarhenheitToCelsius(farhenheit);
		this.previousElementSibling.value = celsius;
	}
}

function convertCelsiusToFarhenheit(celsius) {
	var farhenheit = 9 / 5 * celsius + 32;
	return farhenheit;
}

function convertFarhenheitToCelsius(farhenheit) {
	var celsius = (farhenheit - 32) * 5 / 9;
	return celsius;
}