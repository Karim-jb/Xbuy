let themeBtn = document.getElementById("theme");
let body = document.querySelector("body");

themeBtn.addEventListener("click", () => {
  body.classList.toggle("body-c");

  if (themeBtn.innerText == "Dark Mode") {
    themeBtn.style.backgroundColor = "wheat";
    themeBtn.style.color = "black";
    themeBtn.innerText = "Light Mode";
  } else if (themeBtn.innerText !== "Dark Mode") {
    themeBtn.style.backgroundColor = "black";
    themeBtn.innerText = "Dark Mode";
    themeBtn.style.color = "white";
  }
});

let btn = document.getElementById("btn-up");
let btn2 = document.getElementById("btn-down");

btn.addEventListener("click", () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

btn2.addEventListener("click", () => {
  scrollBy({
    top: 1050,
    behavior: "smooth",
  });
});
