//trnsl.1.1.20190429T050213Z.d6a2c6d8aea79395.1d0f4ea1430c616586770e0a327a087222c2b80f

//const $title_city = document.title
const $b1= document.querySelector('.transl-but')
const $transl_from = document.getElementById('input-trans')
const $transl_to = document.getElementById('api-transl2')

const 	API2_KEY = "trnsl.1.1.20190429T050213Z.d6a2c6d8aea79395.1d0f4ea1430c616586770e0a327a087222c2b80f";

/*по нажатию на кнопку*/
$transl_from.addEventListener('keydown', Transl_Text)


function Transl_Text(event) {
		//console.log('press')
		if (event.key === "Enter"){
		const tex1 = $transl_from.value
		const xhr = new XMLHttpRequest()
		
		if ($title_city === 'Barcelona'){
		for_lang = 'es'}
		else if ($title_city === 'Berlin'){
		for_lang = 'de'
		}
		var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=ru-' +for_lang +'&key=trnsl.1.1.20190429T050213Z.d6a2c6d8aea79395.1d0f4ea1430c616586770e0a327a087222c2b80f&text=' + tex1
		xhr.open('GET', url)
		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			//console.log(xhr.responseText)
			const object = JSON.parse(xhr.responseText)
			
			const temp = object["text"]
			
			$transl_to.textContent = temp

		  }
	}
	xhr.send()
		}
		
} 