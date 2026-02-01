const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const body = document.body;
const thunderSound = document.getElementById("thunderSound");
const thunderLeft = document.getElementById("thunderLeft");
const thunderMid = document.getElementById("thunderMid");
const thunderRight = document.getElementById("thunderRight");


/* YES HEARTS NEAR HER HEAD */
yesBtn.addEventListener("mouseover", () => {

  yesBtn.innerText = "PRESS HERE FASTTT 💖";

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.className = "heart";

    heart.style.left = (window.innerWidth * 0.35 + Math.random()*60) + "px";
    heart.style.top = (window.innerHeight * 0.35) + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
});

yesBtn.addEventListener("mouseout", () => {
  yesBtn.innerText = "COME BACK !! press me 🥺";
});

/* NO BUTTON EFFECTS */
noBtn.addEventListener("mouseover", () => {
  body.classList.add("dim");
  noBtn.innerText = "NO 😭";

  thunderLeft.style.display = "block";
  thunderMid.style.display = "block";
  thunderRight.style.display = "block";

  body.classList.add("flashWhite");

  if (thunderSound) {
    thunderSound.currentTime = 0;
    thunderSound.play().catch(()=>{});
  }

  setTimeout(() => {
    thunderLeft.style.display = "none";
    thunderMid.style.display = "none";
    thunderRight.style.display = "none";
    body.classList.remove("flashWhite");
  }, 700);
});

noBtn.addEventListener("mouseout", () => {
  body.classList.remove("dim");
  noBtn.innerText = "DON'T COME NEAR ME 😢";
});
