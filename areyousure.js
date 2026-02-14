const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");

/* YES HOVER CELEBRATION NEAR BUTTON */
yesBtn.addEventListener("mouseover", () => {

  const rect = yesBtn.getBoundingClientRect();

  celebration.style.display = "block";
  celebration.style.left = rect.left + "px";
  celebration.style.top = (rect.top - 120) + "px"; // slightly above button
});

yesBtn.addEventListener("mouseout", () => {
  celebration.style.display = "none";
});


/* NO BUTTON RUN FAR AWAY */
/* NO BUTTON RUN AWAY SAFELY */
/* NO BUTTON RUN AWAY SAFELY */
noBtn.addEventListener("mouseover", () => {

  const safeMargin = 50;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - safeMargin;
  const maxY = window.innerHeight - btnHeight - safeMargin;

  const minX = safeMargin;
  const minY = safeMargin;

  let randomX, randomY;

  do {
    randomX = Math.random() * (maxX - minX) + minX;
    randomY = Math.random() * (maxY - minY) + minY;
  } while (
    Math.abs(randomX - noBtn.offsetLeft) < 120 &&
    Math.abs(randomY - noBtn.offsetTop) < 80
  );

  noBtn.style.position = "fixed";   // KEY FIX
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
