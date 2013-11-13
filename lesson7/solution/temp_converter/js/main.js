<<<<<<< HEAD
document.getElementById('celsius').onkeydown = convert;
document.getElementById('farhenheit').onkeydown = convert;

function convert(){
	if (celsius == this.id) {
		var celsius = getElementById('celsius').value
		farhenheit = convertCelsiusToFarhenheit(celsius);
		document.getElementById('farhenheit').value = farhenheit;
	} else if (farhenheit == this.id) {
		var farhenheit = document.getElementById('farhenheit').value
		celsius = convertFarhenheitToCelsius(farhenheit);
=======


document.getElementById('convertCelsius').onclick = convertCelsius;
document.getElementById('convertFarhenheit').onclick = convertFarhenheit;

function convertCelsius(){
	var celsius = document.getElementById('celsius').value
	farhenheit = convertCelsiusToFarhenheit(celsius);
	if (farhenheit > 100){
		document.getElementById('farhenheit').value = 'hot!!';
	} else {
		document.getElementById('farhenheit').value = farhenheit;
	}
}

function convertFarhenheit(){
	var farhenheit = document.getElementById('farhenheit').value
	celsius = convertFarhenheitToCelsius(farhenheit);
	if (celsius > 100){
		document.getElementById('celsius').value = 'hot!!';
	} else {
>>>>>>> 4815ca1bcaa9374c4f309284a0de4b3444236b75
		document.getElementById('celsius').value = celsius;
	}
}

<<<<<<< HEAD
function convertCelsiusToFarhenheit(celsius) {
=======
function convertCelsiusToFarhenheit(celsius){
>>>>>>> 4815ca1bcaa9374c4f309284a0de4b3444236b75
	var farhenheit = 9 / 5 * celsius + 32;
	return farhenheit;
}

<<<<<<< HEAD
function convertFarhenheitToCelsius(farhenheit) {
=======
function convertFarhenheitToCelsius(farhenheit){
>>>>>>> 4815ca1bcaa9374c4f309284a0de4b3444236b75
	var celsius = (farhenheit - 32) * 5 / 9;
	return celsius;
}