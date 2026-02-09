const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yay! 💖 Happy Valentine’s Day 😍";
});
