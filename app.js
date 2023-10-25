const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;
const images = ["images/faca.png", "images/facb.png"];

generateBtn.addEventListener("click", changeImage);

function changeImage() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;


  const existingImage = imageContainer.querySelector("img");

  if (existingImage) {

    imageContainer.removeChild(existingImage);
  }

  randomNum = Math.floor(Math.random() * (parseInt(toNum) - parseInt(fromNum) + 1)) + parseInt(fromNum);

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img");
    image.src = images[currentIndex]; 
    randomNumEl.innerHTML = randomNum;
    imageContainer.appendChild(image); 
    currentIndex = (currentIndex + 1) % images.length;
  }
}

