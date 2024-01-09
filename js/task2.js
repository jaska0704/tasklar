let form = document.querySelector("form");
let box = document.querySelector(".main-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  box.style.width = e.target[0].value + "px";
  box.style.borderRadius = e.target[1].value + "%";
  box.style.height = e.target[2].value + "px";
  box.style.backgroundColor = e.target[3].value;
});
