const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");

generateBtn.addEventListener("click", generateImage);

function generateImage() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  // 이미지가 이미 존재하는지 확인
  const existingImage = imageContainer.querySelector("img");

  if (existingImage) {
    // 이미지가 이미 존재하면 제거
    imageContainer.removeChild(existingImage);
  }

  randomNum = Math.floor(Math.random() * (parseInt(toNum) - parseInt(fromNum) + 1)) + parseInt(fromNum);

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img");
    image.src = "images/face.png";
    randomNumEl.innerHTML = randomNum;
    imageContainer.appendChild(image); // 이미지를 컨테이너에 추가
  }
}
