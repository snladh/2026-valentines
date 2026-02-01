const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("mouseover", () => {
  yesBtn.innerText = "YES 💖💖💖";
  yesBtn.style.background = "red";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.innerText = "NO 😭";
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random()*80 + "%";
  noBtn.style.left = Math.random()*80 + "%";
});
