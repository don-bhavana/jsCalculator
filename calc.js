
		var isEvaluated = false
		function add(key) 
		{ 
			if(isEvaluated == false || key.match(/^[0-9]$/) == null){
				document.getElementById("total").value+=key
				isEvaluated = false
			}
			else{
				document.getElementById("total").value=key
				isEvaluated = false
			}

		} 
		
		function evaluateString() 
		{  

			document.getElementById("total").value = eval(document.getElementById("total").value)
			isEvaluated = true

		} 
		
		function clearDisplay() 
		{ 
			document.getElementById("total").value = "" 
			isEvaluated = false
		}