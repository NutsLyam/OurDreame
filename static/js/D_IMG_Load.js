//Authorization: 563492ad6f91700001000001bc9e19ab29cd4f51bab5c0ee4642c082

const $d1= document.getElementById('d1_img')
const $d2= document.getElementById('d2_img')
const $d3= document.getElementById('d3_img')

const $title_d1 = document.getElementsByTagName('p')[0].innerHTML
const $title_d2 = document.getElementsByTagName('p')[2].innerHTML
const $title_d3 = document.getElementsByTagName('p')[4].innerHTML


document.addEventListener("DOMContentLoaded", loadImg($title_d1, $d1), loadImg($title_d2, $d2), loadImg($title_d3, $d3)  );


function loadImg( title_d , d_img) {
	
	//console.log(title_d)
		
		const xhr = new XMLHttpRequest()
		var url = 'https://api.pexels.com/v1/search?query=' + title_d + '&per_page=1&page=1'
		xhr.open('GET', url)
		xhr.setRequestHeader ("Authorization", "563492ad6f91700001000001bc9e19ab29cd4f51bab5c0ee4642c082")

		
		xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE &&
		  xhr.status === 200) {	
			
			const object = JSON.parse(xhr.responseText)
			
			const my_img = object['photos'][0]['src']['medium']
			//console.log($aimg)
			d_img.src = my_img 
			//console.log($title_city)
		  }
	}
	xhr.send()
		
}