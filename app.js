const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);


function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));


  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    const img = document.createElement("img");
    
    randomNumEl.innerHTML = randomNum;
    img.src="images/face.png";
  }
}


