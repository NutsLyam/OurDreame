const $b1= document.querySelector('.weather-but')
const $weather = document.getElementById('api-weather')

const 	API_KEY = "d2889b9af6ec4fcaa98233734192104";

/*по нажатию на кнопку*/
$b1.addEventListener('click', getWeather)

/* при загрузке страницы */
document.addEventListener("DOMContentLoaded", getWeather);


function getWeather(event) {
		console.log('press')
		const xhr = new XMLHttpRequest()
		/* Петергоф фиксирован*/
		var url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d2889b9af6ec4fcaa98233734192104&format=json&q=Petergof'
		xhr.open('GET', url)
		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {
			console.log('get')		
			
			const object = JSON.parse(xhr.responseText)
			
			const temp = object.data.current_condition[0].temp_C
			console.log(temp)
			
			$weather.textContent = temp

		  }
	}
	xhr.send()
		
}

  
