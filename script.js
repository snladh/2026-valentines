const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const body = document.body;
const clouds = document.getElementById("clouds");
const thunderSound = document.getElementById("thunderSound");
const thunderLeft = document.getElementById("thunderLeft");
const thunderMid = document.getElementById("thunderMid");
const thunderRight = document.getElementById("thunderRight");


/* YES HEARTS NEAR HER HEAD */
yesBtn.addEventListener("mouseover", () => {

  yesBtn.innerText = "PRESS YESS FASTTT 💖";

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
  yesBtn.innerText = "YES 💖";
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
  noBtn.innerText = "NO 😢";

  if (clouds) clouds.innerHTML = "";
});

/* CLOUDS */
function createClouds() {
  if (!clouds) return;

  clouds.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.innerText = "☁️";
    cloud.style.top = Math.random()*80 + "%";
    cloud.style.left = (i%2===0 ? "-200px" : "100%");
    clouds.appendChild(cloud);
  }
}

/* THUNDER FLASH */
function thunder() {
  document.body.classList.add("flash");

  if (thunderSound) {
    thunderSound.currentTime = 0;
    thunderSound.play().catch(() => {});
  }

  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 300);
}
