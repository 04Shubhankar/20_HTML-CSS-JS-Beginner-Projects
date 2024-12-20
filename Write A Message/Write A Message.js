function showmessagecontent(message) {
  const messagecontent = document.querySelector(".content");
  messagecontent.textContent = `"${message}" - Your Message is delivered`;
}

function showinvalid() {
  const invalid = document.querySelector(".invalid"); // Use correct selector
  invalid.style.display = "block"; // Fix style handling
  setTimeout(() => {
    invalid.style.display = "none"; // Fix style handling
  }, 2000);
}

function onsubmit(event) {
  event.preventDefault();

  const input = document.querySelector(".message");
  const message = input.value.trim();

  if (message === "") {
    showinvalid();
  } else {
    showmessagecontent(message);
    input.value = "";
  }
}

(function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", onsubmit);
})();
