let form = document.querySelector("form");
let ul = document.querySelector("ul");

let arr = [
  {
    id: 1,
  },
];

let ul2 = document.querySelector(".ul");
let btn2 = document.querySelector(".otkaz");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target[0].value;
  if (!text) return alert("Matn kirgazish shart");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let icon = document.createElement("i");
  let editicon = document.createElement("i");
  let editbtn = document.createElement("button");
  let chekbox = document.createElement("input");
  let span = document.createElement("span");
  let p = document.createElement("p");

  arr.forEach((arrr) => {
    p.textContent = arrr.id++ + ")";
  });

  span.classList.add("todo-title");
  li.classList.add("flex", "justify-between", "items-center", "mt-2");
  icon.classList.add("fa-solid", "fa-trash");
  editicon.classList.add("fa-solid", "fa-pen");
  btn.classList.add(
    "border-2",
    "border-green-200",
    "py-2",
    "px-2",
    "bg-green-200",
    "rounded"
  );
  editbtn.classList.add(
    "border-2",
    "border-blue-200",
    "py-2",
    "px-2",
    "bg-blue-200",
    "rounded"
  );
  chekbox.setAttribute("type", "checkbox");
  chekbox.classList.add("todo-completed-checkbox");

  btn.append(icon);
  span.innerText = text;
  editbtn.append(editicon);
  li.append(p);
  li.append(chekbox);
  li.append(span);
  li.append(editbtn);
  li.append(btn);
  // arr.push(text);
  ul.append(li);
  console.log(arr);

  btn.addEventListener("click", (e) => {
    if (confirm("Ishonchingiz komilmi?")) {
      let elem = e.target;
      while (elem.tagName !== "BUTTON") {
        elem = elem.parentElement;
      }
      elem.parentElement.remove();
    }
  });

  btn2.addEventListener("click", () => {
    let checkedItems = ul.querySelectorAll('li input[type="checkbox"]:checked');
    checkedItems.forEach((item) => {
      ul2.appendChild(item.parentElement);
    });
  });
  e.target.reset();
});
