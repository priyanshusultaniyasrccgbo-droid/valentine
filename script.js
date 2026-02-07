const no = document.getElementById("no");
const yes = document.getElementById("yes");
const text = document.getElementById("text");
const love = document.getElementById("love");
const main = document.getElementById("main");

const messages = [
  "Nice try 😜",
  "Nope 😂",
  "Try again 😏",
  "Not allowed 💅",
  "Wrong answer 😆"
];

no.addEventListener("mouseover", function () {
  no.style.left = Math.random() * 300 + "px";
  no.style.top = Math.random() * 300 + "px";

  text.innerText = messages[Math.floor(Math.random() * messages.length)];
});

yes.addEventListener("click", function () {
  main.style.display = "none";
  love.style.display = "block";
});
