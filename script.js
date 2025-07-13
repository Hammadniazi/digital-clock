function displayTime(){

const displayDate = document.querySelector(".date");
const hrs = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const sec = document.getElementById("second")
const dayNight = document.getElementById("daynight")

const months = ["January", "February", " March", " April", "May", " June", "July", "August", " September", "Octuber", "November", " December"]


let date = new Date();
let currentDate= date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
displayDate.innerHTML = currentDate;

let hours = date.getHours();
let mints = date.getMinutes();
let seconds = date.getSeconds();

let period = hours >= 12 ? "PM" : "AM";
dayNight.innerHTML = period;

hours = (hours < 10 ? "0" : "") + hours;
mints = (mints < 10 ? "0" : "") + mints;
seconds = (seconds < 10 ? "0" : "") + seconds;

hrs.innerHTML = hours;
minutes.innerHTML = mints;
sec.innerHTML = seconds;
}
setInterval(displayTime, 1000)