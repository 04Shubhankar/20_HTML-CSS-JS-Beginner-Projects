const buttons = document.querySelectorAll(".button");
const heading = document.getElementById("heading");

const colorMap = {
  Violet: "#8F00FF",
  Indigo: "#4B0082",
  blue: "#0000FF",
  green: "#00FF00",
  yellow: "#FFFF00",
  orange: "#FFA500",
  red: "#FF0000",
};
const contrastMap = {
  Violet: "white",
  Indigo: "black",
  blue: "white",
  green: "black",
  yellow: "white",
  orange: "black",
  red: "white",
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    /**
     * The color value mapped to the button's ID in the colorMap object
     * @type {string}
     */
    const color = colorMap[button.id];
    document.body.style.backgroundColor = color;

    // Optional: Animate button text or show color name
    button.innerText = `✔ ${button.id}`;
    setTimeout(() => {
      button.innerText = button.id;
    }, 1000);
  });
});
