const $back_b = document.querySelector('.back_but')

$back_b.addEventListener('click', goMainPage)


function goMainPage(event) {
	console.log('ty')
	document.location.href = 'index.html'
}
