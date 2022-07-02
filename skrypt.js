var wynik = [];

function potegowanieLiczbZespolonych(a, b, c, d) {
	
	var e = Math.E;
	var kat = Math.acos( (a / Math.sqrt((a*a + b*b))) );
	
	var czescRzeczywista = Math.pow( (a*a + b*b), (c/2) ) * Math.pow(e, (-1 * d * kat)) * Math.cos( (c * kat + 0.5 * d * Math.log( (a*a + b*b) )));
	
	var czescZespolona = Math.pow( (a*a + b*b), (c/2) ) * Math.pow(e, (-1 * d * kat)) * Math.sin( (c * kat + 0.5 * d * Math.log( (a*a + b*b) )));
	
	console.log(czescRzeczywista, czescZespolona);
	
	wynik.push(czescRzeczywista);
	wynik.push(czescZespolona);
	
	
}



function myFunction() {
	
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var c = parseFloat(document.getElementById('c').value);
	var d = parseFloat(document.getElementById('d').value);
	
	
	potegowanieLiczbZespolonych(a, b, c, d);
	
	
	if (wynik[1].toString().charAt(0) == "-") {
		
		document.getElementById("wynik").innerHTML = wynik[0] + " " + wynik[1] + "i";
		
	}
	
	else {
		
		document.getElementById("wynik").innerHTML = wynik[0] + " + " + wynik[1] + "i";
		
	}
	
	
}