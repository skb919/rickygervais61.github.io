const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));


  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img"); 
    image.src = "images/face.png"; 
    randomNumEl.innerHTML = randomNum;
    const imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(image);

    let count = 0;
    count++;
      
    if (count === 2)
    { 
        resetImage();
    }
  }
}

function resetImage() {
    // 이미지를 표시할 컨테이너 요소를 선택합니다.
    const imageContainer = document.getElementById("image-container");
    
    // 컨테이너에서 이미지 요소를 찾아서 제거합니다.
    const image = imageContainer.querySelector("img");

    if (image) {
        imageContainer.removeChild(image);
    }
}



