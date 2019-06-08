const $curLoc = document.getElementById('api-city')

/*document.addEventListener("DOMContentLoaded", getWeather);*/



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
 // $curLoc.textContent = "Perergof"/*'http://maps.googleapis.com/maps/api/staticmap?center=' + crd.latitude + ',' + crd.longitude + '&zoom=13&size=300x300&sensor=false'*/
  $curLoc.innerHTML = $curLoc.innerHTML.replace('current-city', "Petergof")

 };


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);


/*
/* при загрузке страницы */
/*
document.addEventListener("DOMContentLoaded", getCity);

function getCity(event){
	const xhr1 = new XMLHttpRequest()
	
	var path = 'https://yandex.ru/tune/geo/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&nosync=1'   /*'https://yandex.ru'*/
	/*
	xhr1.open('GET', path)
	
	console.log('get city')

	xhr1.onreadystatechange = () => {
		if (xhr1.readyState === XMLHttpRequest.DONE &&
		  xhr1.status === 200) {
			console.log('city')	
		  }
		  else {
			  console.log('not connect')
		  }
	}
	/*
	response = requests.get(path, verify=False)
	tree = html.fromstring(response.text)
	current_city = tree.xpath( '//div[@class="col headline__item headline__leftcorner"]//span[@class= "geolink__reg"]/text()')
	/*current_city = str(current_city[0])*/
	/*$curLoc.textContent = str(current_city[0]) */
/*	
}*/