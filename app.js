const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");
let count = 0; // count 변수를 함수 외부에 위치시킴

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
    imageContainer.appendChild(image); // 이미지를 컨테이너에 추가

    count++; // count를 증가시킴
      
    if (count === 2)
    { 
        resetImage();
    }
  }
}

function resetImage() {
    // 컨테이너에서 이미지 요소를 찾아서 제거합니다.
    const image = imageContainer.querySelector("img");

    if (image) {
        imageContainer.removeChild(image);
    }

    count = 0; // count를 재설정
}
