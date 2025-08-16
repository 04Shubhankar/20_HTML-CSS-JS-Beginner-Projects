let startTime = null;

function countingcharactor() {
    const text = document.getElementById("textarea").value;

    // Record the time of first input
    if (startTime === null && text.trim().length > 0) {
        startTime = new Date();
    }

    // Character count
    document.querySelector(".Counter").textContent = text.length;

    // Character count without spaces
    const withoutSpaces = text.replace(/\s/g, '');
    document.querySelector(".wospace").textContent = withoutSpaces.length;

    // Word count
    const words = text.trim().split(/\s+/).filter(word => word !== "");
    document.querySelector(".wordcount").textContent = words.length;

    // Typing speed (WPM)
    if (startTime) {
        const now = new Date();
        const minutes = (now - startTime) / 60000;
        const wpm = Math.floor(words.length / minutes);
        document.querySelector(".wpm").textContent = isFinite(wpm) ? wpm : 0;
    }
}

function copyText() {
    const text = document.getElementById("textarea").value;
    navigator.clipboard.writeText(text).then(() => {
        alert("Text copied to clipboard!");
    });
}

function clearText() {
    document.getElementById("textarea").value = "";
    document.querySelector(".Counter").textContent = 0;
    document.querySelector(".wospace").textContent = 0;
    document.querySelector(".wordcount").textContent = 0;
    document.querySelector(".wpm").textContent = 0;
    startTime = null;
}


function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeBtn");

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️';
        btn.title = "Switch to Light Mode";
    } else {
        btn.textContent = '🌙';
        btn.title = "Switch to Dark Mode";
    }
}
