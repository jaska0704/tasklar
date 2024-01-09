let number = document.querySelector(".number");
let form = document.querySelector("form");
let main = document.querySelector(".main");
let ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let color = Math.random().toString(16).slice(2, 8);
  li.innerText = e.target[0].value;
  li.classList.add(
    "number",
    "w-16",
    "h-16",
    "rounded-full",
    "flex",
    "justify-center",
    "items-center",
    "ml-4"
  );
  li.style.backgroundColor = "#" + color;

  setInterval(() => {
    li.innerText--;
    if (li.innerText <= 0) {
      li.remove();
    }
  }, 1_000);
  ul.append(li);

  form.reset();
});
