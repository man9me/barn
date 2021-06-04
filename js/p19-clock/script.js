const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggleEl.addEventListener("click", (e) => {
    console.log("ta suka");
    const html = document.querySelector("html");

    html.classList.contains("dark") ? html.classList.remove("dark") : html.classList.add("dark");

    html.classList.contains("dark") ? (e.target.innerHtml = "dark") : (e.target.innerHtml = "light");
});

setTime();

function setTime() {
    const time = new Date();
    const day = time.getDay();
    const month = time.getMonth();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate()

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 23, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    timeEl.innerText = `${hour < 10 ? `0${hour}` : `${hour}`} : ${minutes < 10 ? `0${minutes}` : `${minutes}`}`
  dateEl.innerHTML = `${months[month]}, ${days[day]} <span class="circle">${date}</span>`

}

setInterval(setTime, 500)