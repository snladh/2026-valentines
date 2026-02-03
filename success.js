const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("mouseover", () => {
  giftBtn.innerText = "Open Your Gifts 🎉";
});

giftBtn.addEventListener("mouseout", () => {
  giftBtn.innerText = "Time to Reveal Your Gifts 🎁";
});
