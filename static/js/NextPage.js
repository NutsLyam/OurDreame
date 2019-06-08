const $cityname = document.getElementById('input-city')

$cityname.addEventListener('keydown', goNextPage)

// массив с доступными городами
const arr_cities = ['Barcelona', 'barcelona', 'Berlin', 'berlin'];

function goNextPage(event) {
		if (event.key === "Enter" && arr_cities.indexOf($cityname.value) != -1)
		{
			if ($cityname.value === arr_cities[0] || $cityname.value === arr_cities[1])
			{
				//console.log($cityname.value)
				document.location.href = 'Barca.html'
			}
			if ($cityname.value === arr_cities[2] || $cityname.value === arr_cities[3])
			{

				document.location.href = 'Berlin.html'
			}
			
		}
}
