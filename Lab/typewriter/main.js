var container = document.getElementById('container');

var blocks = document.getElementsByClassName("block")

for (var i = 0; i < blocks.length; i++) {
	blocks[i].style.display = "none";
}



document.addEventListener('keydown', function(event)
	{
	if (event.keyCode >= 65 && event.keyCode <= 90){

    if (event.keyCode == 65) {
    	var div = document.getElementById(1).style.display = "block"
	} 
	else if (event.keyCode == 66) {
    	document.getElementById(2).style.display = "block"
    }
    else if (event.keyCode == 67) {
    	document.getElementById(3).style.display = "block"
    }
    else if (event.keyCode == 68) {
    	document.getElementById(4).style.display = "block"
    }
    else if (event.keyCode == 69) {
    	document.getElementById(5).style.display = "block"
    }
    else if (event.keyCode == 70) {
    	document.getElementById(6).style.display = "block"
    }
    else if (event.keyCode == 71) {
    	document.getElementById(7).style.display = "block"
    }
    	else if (event.keyCode == 72) {
    	document.getElementById(8).style.display = "block"
    }
    else if (event.keyCode == 73) {
    	document.getElementById(9).style.display = "block"
    }
    else if (event.keyCode == 74) {
    	document.getElementById(10).style.display = "block"
    }
    else if (event.keyCode == 75) {
    	document.getElementById(11).style.display = "block"
    }
    else if (event.keyCode == 76) {
    	document.getElementById(12).style.display = "block"
    }
    else if (event.keyCode == 77) {
    	document.getElementById(13).style.display = "block"
    }
    	else if (event.keyCode == 78) {
    	document.getElementById(14).style.display = "block"
    }
    else if (event.keyCode == 79) {
    	document.getElementById(15).style.display = "block"
    }
    else if (event.keyCode == 80) {
    	document.getElementById(16).style.display = "block"
    }
    else if (event.keyCode == 81) {
    	document.getElementById(17).style.display = "block"
    }
    else if (event.keyCode == 82) {
    	document.getElementById(18).style.display = "block"
    }
    else if (event.keyCode == 83) {
    	document.getElementById(19).style.display = "block"
    }
    else if (event.keyCode == 84) {
    	document.getElementById(20).style.display = "block"
    }
    else if (event.keyCode == 85) {
    	document.getElementById(21).style.display = "block"
    }
    else if (event.keyCode == 86) {
    	document.getElementById("a1").style.display = "block"
    	document.getElementById("a5").style.display = "block"

    }
    else if (event.keyCode == 87) {
    	document.getElementById("a2").style.display = "block"
   		document.getElementById("a6").style.display = "block"

    }
    else if (event.keyCode == 88) {
    	document.getElementById("a3").style.display = "block"
    	document.getElementById("a7").style.display = "block"

    }
    else if (event.keyCode == 89) {
    	document.getElementById("a4").style.display = "block"
    	document.getElementById("a8").style.display = "block"

    }


	}
	});

