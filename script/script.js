// ### html elements

const slidesContainerEl = document.getElementById("slides-container");

// ### on load



const slides = [
  "01.webp" , "02.webp" , "03.webp" , "04.webp" , "05.webp"
];

let slidesHTML = "";
for(let i = 0; i < slides.length; i++){
  const slide = slides[i];
  let activeClass = i == 0 ? "active" : "";

 

slidesHTML += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}"/>`

}

slidesContainerEl.innerHTML = slidesHTML;