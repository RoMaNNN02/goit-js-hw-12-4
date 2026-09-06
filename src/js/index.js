import { CountdownTimer } from "./stopwatch.js";

const startBtn = document.querySelector(".button-1");
const stopBtn = document.querySelector(".button-2");
const pauseBtn = document.querySelector(".button-3");
const timer = document.querySelector(".timer");
if (timer) {
  timer.style.display = "none";
}

const stopwatch = new CountdownTimer({
  selector: ".timer",
  targetDate: new Date("Sep 16, 2026 11:11:11"),
});
startBtn.addEventListener("click", () => {
  timer.style.display = "flex";
  stopwatch.start();
});

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
  timer.style.display = "none";
});
pauseBtn.addEventListener("click", () => {
  timer.style.display = "flex";
  stopwatch.pause();
});
