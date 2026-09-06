export class CountdownTimer {
  constructor({ selector }) {
    this.stopwatchDisplay = document.querySelector(selector);
    this.daysSpan = this.stopwatchDisplay.querySelector("[data-value='days']");
    this.hourSpan = this.stopwatchDisplay.querySelector("[data-value='hours']");
    this.minsSpan = this.stopwatchDisplay.querySelector("[data-value='mins']");
    this.secsSpan = this.stopwatchDisplay.querySelector("[data-value='secs']");
    this.intervalId = null;
    this.startTime = null;
    this.isActive = false;
  }

  #formatTime(time) {
    let ms = time % 1000;
    let sec = Math.floor(time / 1000) % 60;
    let min = Math.floor(time / 1000 / 60) % 60;
    let hour = Math.floor(time / 1000 / 60 / 60) % 24;
    let days = Math.floor(time / 1000 / 60 / 60 / 24);
    return { days, hour, min, sec };
  }

  #updateDisplay({ days, hour, min, sec }) {
    const time = `days:${(this.daysSpan.textContent = days.toString().padStart(2, "0"))} hours: ${(this.hourSpan.textContent = hour.toString().padStart(2, "0"))}minutes: ${(this.minsSpan.textContent = min.toString().padStart(2, "0"))} seconds:${(this.secsSpan.textContent = sec.toString().padStart(2, "0"))}`;
    this.stopwatchDisplay.textContent = time;
  }

  start() {
    if (!this.stopwatchDisplay) {
      console.error("відсутній дисплей");
      return;
    }

    if (this.isActive === true) {
      return;
    }

    this.targetDate = new Date(2026, 8, 16, 11, 11, 11).getTime();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      let deltaTime = this.targetDate - currentTime;
      if (deltaTime <= 0) {
        this.stop();
        return;
      }
      const stringTime = this.#formatTime(deltaTime);
      this.#updateDisplay(stringTime);
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
    this.startTime = null;
  }
}
