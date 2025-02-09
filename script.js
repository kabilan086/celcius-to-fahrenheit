function convert(){

    const celsiusvalue = Number(document.getElementById("input").value)
    const fahrenheitvalue= (celsiusvalue*9/5) +32
    const result = document.getElementById("result")
    result.innerHTML = fahrenheitvalue+ "°F"
    }

   
