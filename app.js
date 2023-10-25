const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0; // 현재 이미지 배열의 인덱스
const images = ["images/face.png", "images/face2.png]; // 이미지 파일 경로 배열

generateBtn.addEventListener("click", changeImage);

function changeImage() {
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
    image.src = images[currentIndex]; // 현재 인덱스에 해당하는 이미지 파일 경로 사용
    randomNumEl.innerHTML = randomNum;
    imageContainer.appendChild(image); // 이미지를 컨테이너에 추가

    // 다음 이미지를 표시하기 위해 인덱스 업데이트
    currentIndex = (currentIndex + 1) % images.length;
  }
}
