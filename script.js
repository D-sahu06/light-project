let toggle = document.getElementById("toggle");
let bulb = document.getElementById("bulb");

let mode = localStorage.getItem("mode") || "off";
applyMode(mode);

toggle.addEventListener("click", () => {
    mode = (mode === "off") ? "on" : "off";
    applyMode(mode);
    localStorage.setItem("mode", mode);
});

function applyMode(currentMode) {

    if (currentMode === "on") {
        bulb.src = "https://d-sahu06.github.io/light-switcher/bulb-on.png";
        document.body.style.backgroundColor = "#fff8d6";
        toggle.textContent = "Turn off";
        toggle.style.background = "#ff9800";
        toggle.style.color = "black";
        bulb.style.filter = "drop-shadow(0px 0px 30px yellow)";
    }
    else {
        bulb.src = "https://d-sahu06.github.io/light-switcher/bulb-off.png";
        document.body.style.backgroundColor = "#1a1a1a";
        toggle.textContent = "Turn On";
        toggle.style.background = "black";
        toggle.style.color = "white";
        bulb.style.filter = "none";
    }
}
