let sec = 0;
let mili = 0;
let interval;

const secDisplay = document.querySelector(".sec");
const miliDisplay = document.querySelector(".mili");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const pauseHistoryList = document.getElementById("pauseHistory");

function updateDisplay() {
  secDisplay.textContent = sec < 10 ? "0" + sec : sec;
  miliDisplay.textContent = mili < 10 ? "0" + mili : mili;
}

function startTimer() {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    mili++;
    if (mili > 99) {
      mili = 0;
      sec++;
    }
    updateDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;

  
  const timestamp = `${sec < 10 ? "0" + sec : sec} : ${mili < 10 ? "0" + mili : mili}`;
  const li = document.createElement("li");
  li.textContent = "Paused at " + timestamp;
  pauseHistoryList.appendChild(li);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  sec = 0;
  mili = 0;
  updateDisplay();
  pauseHistoryList.innerHTML = ""; // Clear pause history
}

 
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
 
updateDisplay();
