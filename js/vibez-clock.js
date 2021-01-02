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
    (label, i) =>
      (label.textContent = `${now.getHours()}:${padTime(now.getMinutes())}`)
  );
};

const updateDay = function () {
  const now = new Date();
  const weekday = [];
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";

  currentDayLabel.textContent = `${weekday[now.getDay()]},`;
  return weekday[now.getDay()];
};

const updateDate = function () {
  const now = new Date();
  const date = now.getDate();
  const dateSeperated = String(date).split("");
  let tense;

  if (dateSeperated[0] === "1") {
    tense = "th";
  } else if (dateSeperated[0] === "2") {
    tense = "nd";
  } else if (dateSeperated[0] === "3") {
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

  if (dayOfWeek === "monday") {
    videoID = "N9wsjroVlu8";
  } else if (dayOfWeek === "tuesday") {
    videoID = "7nJGCR7HtrM";
  } else if (dayOfWeek === "wednesday") {
    videoID = "du-TY1GUFGk";
  } else if (dayOfWeek === "thursday") {
    videoID = "Ex8B4qQOE-M";
  } else if (dayOfWeek === "friday") {
    videoID = "aCDM8bURT08";
  } else if (dayOfWeek === "saturday") {
    videoID = "oRuEWFHnq8g";
  } else if (dayOfWeek === "sunday") {
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

const padTime = function (min) {
  const s = String(min);
  const minutes = s.split("");

  if (minutes.length < 2) {
    return "0" + String(min);
  } else {
    return min;
  }
};

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
