var input = document.getElementById("password")
		input.value = ""	//makes input blank when page is reloaded
		
		var generatorButton = document.getElementById("generator")	// the button clicked to generate password
		var onClick = function () {	// function to run when the password generator button is clicked
			//objects
			var textOutput = document.getElementById("text-output")	//div to output text
			var password = document.getElementById("password").value.toString()	// input where the user enters an object
			
			//arrays
			var text = password.split("")	// array with all the characters in the password input
			var combo = [["o","0"],["i","1"],["z","2"],["e","3"],["a","4"],["s","5"],["b","8"]]	//letter and number combos
			
			//variables
			var change	//variable to decide weather to change a letter or not
			
			for(var i = 0; i < text.length; i++) {
				for(var j = 0; j < combo.length; j++){
					change = Math.round(Math.random())
					add = Math.round(Math.random)
					addnumber = Math.round(Math.random*10)
					if(change == 0) {
						if(text[i] == combo[j][0]) {
							text[i] = combo[j][1]
						}
					}
					if(add == 0 && change == 1) {
						text[i] = addnumber
					}
				}
			}
			
			text = text.join("")
			
			textOutput.textContent = text
		}
		generatorButton.addEventListener("click",onClick)
