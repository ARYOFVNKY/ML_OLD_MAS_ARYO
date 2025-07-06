function startGame() {
  document.getElementById("lobby").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "28px Arial";
  ctx.fillText("FANNY SKYLARK MULAI PUSH!", 60, 100);
  ctx.fillText("JUMAT BERKAH 36 SIAP TEMPUR 💪", 60, 150);

  const quotes = [
    "Assalamualaikum, jangan savage dulu 😇",
    "Push rank dulu, Jumatan belakangan ✨",
    "Aku pasrah, yang penting halal 😭",
    "Bismillah MVP walau sendirian 🔥"
  ];

  let quoteIndex = 0;
  setInterval(() => {
    ctx.clearRect(0, canvas.height - 100, canvas.width, 100);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText(quotes[quoteIndex], 40, canvas.height - 50);
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 3000);
}
