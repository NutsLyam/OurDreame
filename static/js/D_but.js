const $d_but = document.querySelector('.forward-but')

//const $title_city1 = document.title

$d_but.addEventListener('click', goDPage)


function goDPage(event) {
	//console.log($title_city)
	
	if ($title_city === 'Barcelona' )
			{
	document.location.href = 'DBarca.html'
			}
			
			if ($title_city === 'Berlin' )
			{
	document.location.href = 'DBerlin.html'
			}
}
