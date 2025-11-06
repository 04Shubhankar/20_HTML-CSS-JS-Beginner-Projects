let count = 0;
const countDisplay = document.getElementById("count");

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  countDisplay.textContent = count;
}
