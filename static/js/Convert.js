// https://www.currencyconverterapi.com/docs/sample-code/nodejs
const $b1= document.querySelector('.convert-but')
const $curr = document.getElementById('api-curr')

const 	API1_KEY = "331815fa259cd31a195b";

/*по нажатию на кнопку*/
$b1.addEventListener('click', Convert_curr)

function Convert_curr(event) {
		//console.log('press')
		const xhr = new XMLHttpRequest()
		var url = 'https://api.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=' + API1_KEY
		xhr.open('GET', url)
		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			console.log(xhr.responseText)
			//const object = JSON.parse(xhr.responseText)
			
			//const temp = object.data.current_condition[0].temp_C
			
			//$weather.textContent = temp

		  }
	}
	xhr.send()
		
} 