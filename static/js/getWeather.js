const $weather = document.getElementById('api-weather')


const 	API_KEY = "d2889b9af6ec4fcaa98233734192104";

document.addEventListener("DOMContentLoaded", getWeather);


function getWeather(event) {
		//console.log('press')
		const xhr = new XMLHttpRequest()
		var url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d2889b9af6ec4fcaa98233734192104&format=json&q=' + $title_city
		xhr.open('GET', url)
		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			const object = JSON.parse(xhr.responseText)
			
			const temp = object.data.current_condition[0].temp_C
			
			//$weather.textContent = temp
			
			$weather.innerHTML = $weather.innerHTML.replace('weather', temp)

		  }
	}
	xhr.send()
		
}