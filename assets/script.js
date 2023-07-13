const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}

]
console.log(slides.length);

let cursor = 0;
let imageSlide = document.querySelector(".banner-img");
let textSlide = document.querySelector(" p ");
let arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);
arrowLeft.addEventListener("click", () => {
	console.log('cliquez sur la flèche gauche');

	cursor = cursor -1;
	if (cursor+4 < slides.length) {
		cursor = 3;
	}
selectDot()
	if (slides.length > 0) {
		imageSlide.src = "./assets/images/slideshow/" + slides[cursor].image;
		textSlide.innerHTML = slides[cursor].tagLine;
	}



});



let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	console.log('cliquez sur la flèche droite');
	// cursor = cursor +1; (si curosr+1 >= slides.length; alors cursor prend la valeur de 0)
	// modifier l'attribut src de <img> du slide par la valeur image de slides à l'index cursor

	cursor = cursor + 1;
	if (cursor >= slides.length) {
		cursor = 0;
	}
selectDot()

	if (slides.length > 0) {
		imageSlide.src = "./assets/images/slideshow/" + slides[cursor].image;
		textSlide.innerHTML = slides[cursor].tagLine;

	}

});


function addDots() {
	const dotElement = document.createElement("div");
	dotElement.setAttribute("class", "dot")
	document.querySelector(".dots").appendChild(dotElement)
	
}



for (let i = 0; i < slides.length; i++) {
	addDots()

}





function selectDot() {
	
	
	for(const dotElement of document.querySelectorAll(".dot").entries() ){
		console.log(dotElement);
		const index = dotElement [0]
		const element = dotElement [1]
		console.log(index === cursor, index, cursor);
	}
	
}




// function selectDot() {
//     const dotElements = document.querySelectorAll(".dot");

//     dotElements.forEach((dotElement, index) => {
//         if (index === cursor) {
//             dotElement.classList.add("active");
//         } else {
//             dotElement.classList.remove("active");
//         }
//     });
// }

// selectDot();




