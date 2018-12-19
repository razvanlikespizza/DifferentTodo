let arr = ["Adauga si tu ceva"],
    addButton = document.getElementById("label_add"),
    input = document.getElementById("input"),
    ul = document.getElementById("todo_ul"),
    li;

if(localStorage.getItem("array") == null) {
  localStorage.setItem("array", JSON.stringify(arr));
  show(arr[0]);
} else {
  arr = JSON.parse(localStorage.getItem("array"));
  arr.forEach((elem) => show(elem));
}

addButton.addEventListener("click", () => {
  if (input.value.length >= 3) {
    arr.push(input.value);
    show(input.value);
    localStorage.setItem("array", JSON.stringify(arr));
    input.value = "";
    input.blur();
  }
});

input.addEventListener("keyup", () => {
  event.preventDefault();
  if(event.keyCode === 13) {
    addButton.click();
  }
})

function remove() {
  let idx = Array.from(ul.children).indexOf(this.parentNode);
  ul.removeChild(this.parentNode);
  arr.splice(idx, 1);
  localStorage.setItem("array", JSON.stringify(arr));
}

function show(text) {
  li = document.createElement("li");
  li.classList.add("todo__li");
  li.innerHTML = '<p class="todo__content"></p><button class="todo__delete"><span class="far fa-trash-alt"></span></button>';
  li.getElementsByTagName("p")[0].innerText = text;
  li.getElementsByClassName("todo__delete")[0].addEventListener("click", remove);
  ul.appendChild(li);
};

