
document.getElementById('start-btn').onclick = () => {
  const dialog = document.getElementById('dialog');
  const messages = [
    "Bot JUMAT BERKAH 36 terbunuh!",
    "Fanny: Let's fly!",
    "Lord telah muncul!",
    "GLORY 999999!!!",
    "Jangan savage dulu 😇"
  ];
  let i = 0;
  const interval = setInterval(() => {
    dialog.textContent = messages[i % messages.length];
    i++;
    if (i >= messages.length) clearInterval(interval);
  }, 2000);
};
