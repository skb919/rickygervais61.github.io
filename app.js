const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function resetImage() {
    if (imageContainer.contains(image)) {
        imageContainer.removeChild(image);
    }
}

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));


  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img"); 
    let count = 0; 
    image.src = "images/face.png"; 
    randomNumEl.innerHTML = randomNum;
    const imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(image);
    count ++;
    if (count === 2)
    { 
        resetImage();
    }
  }
}



