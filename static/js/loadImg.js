//Authorization: 563492ad6f91700001000001bc9e19ab29cd4f51bab5c0ee4642c082

const $aimg= document.getElementById('api_img')
const $title_city = document.title
document.addEventListener("DOMContentLoaded", loadImg);


function loadImg(event) {
		
		const xhr = new XMLHttpRequest()
		var url = 'https://api.pexels.com/v1/search?query=' + $title_city + '&per_page=1&page=1'
		xhr.open('GET', url)
		xhr.setRequestHeader ("Authorization", "563492ad6f91700001000001bc9e19ab29cd4f51bab5c0ee4642c082")

		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			const object = JSON.parse(xhr.responseText)
			
			const my_img = object['photos'][0]['src']['medium']
			//console.log($aimg)
			$aimg.src = my_img 
			//console.log($title_city)
		  }
	}
	xhr.send()
		
}