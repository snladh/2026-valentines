const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const body = document.body;

/* YES BUTTON HEARTS */
yesBtn.addEventListener("mouseover", () => {
  yesBtn.innerText = "PRESS YESS FASTTT 💖";

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.className = "heart";

    heart.style.left = yesBtn.offsetLeft + Math.random()*80 + "px";
    heart.style.top = yesBtn.offsetTop + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
});

/* NO BUTTON SAD EFFECT */
noBtn.addEventListener("mouseover", () => {
  body.classList.add("dim");
  noBtn.innerText = "NO 😭";
});

noBtn.addEventListener("mouseout", () => {
  body.classList.remove("dim");
  noBtn.innerText = "NO 😢";
});
