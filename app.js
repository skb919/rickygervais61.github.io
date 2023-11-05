const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;
const images = ["images/facea.png", "images/faceb.png"];
const usedNumbers = []; // 이미 사용된 숫자를 기록할 배열

generateBtn.addEventListener("click", changeImage);

function changeImage() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  const existingImage = imageContainer.querySelector("img");

  if (existingImage) {
    imageContainer.removeChild(existingImage);
  }

  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * (parseInt(toNum) - parseInt(fromNum) + 1)) + parseInt(fromNum);
  } while (usedNumbers.includes(randomNum)); // 이미 사용된 숫자인지 확인

  usedNumbers.push(randomNum); // 사용된 숫자를 기록

  if (usedNumbers.length >= toNum - fromNum + 1) {
    // 모든 숫자를 이미 사용했을 경우 초기화
    usedNumbers.length = 0;
  }

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const image = document.createElement("img");
    image.src = images[currentIndex];
    randomNumEl.innerHTML = randomNum;
    imageContainer.appendChild(image);
    currentIndex = (currentIndex + 1) % images.length;
  }
}
