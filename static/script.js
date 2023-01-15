"use-strict";
// Send button in Contact me page
const btnSend = document.getElementById("btn-send");
const btnCloseNote = document.querySelector(".close-note");
const notification = document.querySelector(".notification");
const overlay = document.querySelector(".overlay");

function displayNote() {
  notification.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeNote() {
  notification.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnSend.addEventListener("click", displayNote);
btnCloseNote.addEventListener("click", closeNote);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !notification.classList.contains("hidden")) {
    closeNote();
  }
});
