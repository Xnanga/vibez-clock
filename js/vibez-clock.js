"use: strict";

// DOM ELEMENTS

const currentTimeLabel = [...document.querySelectorAll(".intro-text-time")];
const currentDayLabel = document.querySelector(".intro-text-day");
const currentDateLabel = document.querySelector(".intro-text-date");
const currentMonthLabel = document.querySelector(".intro-text-month");

let userTimeLabel = document.querySelector(".user-text-time");
let userDayLabel = document.querySelector(".user-text-day");
const userTimeSelector = document.querySelector(".hour-selector");
const userDaySelector = document.querySelector(".day-selector");
const userMessage = document.querySelector(".timer-container-user");

const video = document.querySelector("iframe");
const button = document.querySelector("button");

const errorMessage = document.querySelector(".error-message");

// FUNCTIONS

const controller = function () {
  const day = updateDay();
  const date = updateDate();
  const month = updateMonth();
  chooseVideo(day);
};

const updateTime = function () {
  const now = new Date();

  currentTimeLabel.forEach(
    (label, i) => (label.textContent = `${now.getHours()}:${now.getMinutes()}`)
  );
};

const updateDay = function () {
  const now = new Date();
  const weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  currentDayLabel.textContent = `${weekday[now.getDay()]},`;
  return weekday[now.getDay()];
};

const updateDate = function () {
  const now = new Date();
  const date = now.getDate();
  const dateSeperated = String(date).split("");
  let tense;

  if (dateSeperated[1] === 1) {
    tense = "th";
  } else if (dateSeperated === 2) {
    tense = "nd";
  } else if (dateSeperated === 3) {
    tense = "rd";
  } else {
    tense = "th";
  }

  currentDateLabel.textContent = `${date}${tense}`;
  return date;
};

const updateMonth = function () {
  const now = new Date();
  const month = [];
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  currentMonthLabel.textContent = `${month[now.getMonth()]}.`;
  return month[now.getMonth()];
};

const chooseVideo = function (dayOfWeek) {
  let videoID;
  const URLPartOne = `https://www.youtube.com/embed/`;
  const URLPartTwo = `?controls=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;rel=0`;
  video.src = `${URLPartOne}${videoID}${URLPartTwo}`;

  if (dayOfWeek === "Monday") {
    videoID = "N9wsjroVlu8";
  } else if (dayOfWeek === "Tuesday") {
    videoID = "7nJGCR7HtrM";
  } else if (dayOfWeek === "Wednesday") {
    videoID = "du-TY1GUFGk";
  } else if (dayOfWeek === "Thursday") {
    videoID = "Ex8B4qQOE-M";
  } else if (dayOfWeek === "Friday") {
    videoID = "aCDM8bURT08";
  } else if (dayOfWeek === "Saturday") {
    videoID = "oRuEWFHnq8g";
  } else if (dayOfWeek === "Sunday") {
    videoID = "dEdZC7EExCM";
  }

  video.src = `${URLPartOne}${videoID}${URLPartTwo}`;
};

const userSetTimeDay = function (hour, day) {
  formattedHour = hour.split("");
  formattedHour[2] = ":";
  formattedHour[4] = "0";
  finalHour = formattedHour.join("");

  userTimeLabel.textContent = `${finalHour}`;
  userDayLabel.textContent = `${day}.`;

  userMessage.style = "display: initial";
  chooseVideo(day);
};

// const displayError = function () {
//   errorMessage.style = "display: initial";
// };

controller();

// Event Listeners

window.setInterval(function () {
  updateTime();
}, 1000);

button.addEventListener("click", function () {
  if (userDaySelector.value != "none" && userTimeSelector.value != "none") {
    const hour = userTimeSelector.value;
    const day = userDaySelector.value;
    userSetTimeDay(hour, day);
    errorMessage.style = "display: none";
  } else {
    errorMessage.style = "display: initial";
  }
});
