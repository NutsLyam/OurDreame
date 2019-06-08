const $eur = document.getElementById('EUR')


document.addEventListener("DOMContentLoaded", loadEur);

function loadEur(rates) {
	
 // var EURrate = rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
 // var EUR = document.getElementById('EUR');
 // EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);
 // EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
	const xhr = new XMLHttpRequest()
		var url = 'https://www.cbr-xml-daily.ru/daily_json.js'
		xhr.open('GET', url)
		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			const object = JSON.parse(xhr.responseText)
			
			//console.log(object)
			const my_eur = object['Valute']['EUR']['Value']
			//console.log(my_eur)
			$eur.innerHTML = $eur.innerHTML.replace('00,0000', my_eur)
			//console.log($title_city)
		  }
	}
	xhr.send()
 
 
 }