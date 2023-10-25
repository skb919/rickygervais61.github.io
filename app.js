const generateBtn = document.querySelector(".generateBtn");
const imageContainer = document.getElementById("image-container");

generateBtn.addEventListener("click", generateImage);

function generateImage() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");

    // 이미지가 이미 존재하는지 확인
    const existingImage = imageContainer.querySelector("img");

    if (!existingImage) {
      const image = document.createElement("img");
      image.src = "images/face.png";
      randomNumEl.innerHTML = randomNum;
      imageContainer.appendChild(image); // 이미지를 컨테이너에 추가
    }
  }
}
