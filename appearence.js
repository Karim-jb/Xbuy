let themeBtn = document.getElementById("theme");
let body = document.querySelector("body");
let about = document.getElementById("aboutUs");
let choose = document.getElementById("chose");

themeBtn.addEventListener("click", () => {
  body.classList.toggle("body-c");
  about.classList.toggle("change");
  choose.classList.toggle("change");

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
let btn2 = document.getElementById('btn-down')

btn.addEventListener("click", () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

btn2.addEventListener("click", () => {
  scrollBy({
    top:1050,
    behavior: "smooth",
  });
});