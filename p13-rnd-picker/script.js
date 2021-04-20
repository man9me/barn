const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// сунуть текстбокс в фокус схожу
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",") //масив
    .filter((tag) => tag.trim() !== "") //не пустая строка
    .map((tag) => tag.trim()); // пробелы

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 50;
  const init = 80;
  var time = 1;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlight(randomTag);
    time++;
    setTimeout(() => {
      unhighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlight(randomTag);
      
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  // флур верх граница, рандом на количество тагов, кьюри выдёт список с айди

  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}
function unhighlight(tag) {
  tag.classList.remove("highlight");
}
