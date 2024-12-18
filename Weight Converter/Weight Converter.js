const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const input = document.querySelector("input");
  const convertedweight = document.querySelector("span");

  const inputValue = parseFloat(input.value); // Convert input value to a number
  let kgtolbs;

  if (isNaN(inputValue) || inputValue < 0) {
    // Show error for invalid input
    convertedweight.classList.add("Error");
    convertedweight.innerHTML = "<p>Enter a Valid Number</p>";

    setTimeout(() => {
      convertedweight.innerHTML = ""; // Clear the message after 2.5 seconds
      convertedweight.classList.remove("Error");
    }, 2500);
  } else {
    // Perform kg to lbs conversion for valid input
    kgtolbs = inputValue * 2.20462;

    convertedweight.classList.add("Success");
    convertedweight.innerHTML = `${kgtolbs.toFixed(4)} lbs`; // Display converted weight

    setTimeout(() => {
      convertedweight.innerHTML = ""; // Clear the message after 2.5 seconds
      convertedweight.classList.remove("Success");
    }, 2500);
  }

  input.value = ""; // Clear the input field after processing
});
