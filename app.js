const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);


function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));


  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img");
    const imageContainer = document.getElementById("image-container");
    
    image.src = "images.face.png"; 
    randomNumEl.innerHTML = randomNum;
    imageContainer.appendChild(image);
  }
}


