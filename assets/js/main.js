/*
    # Coded With 🧡 By Youssef Almodhesh ^_^
*/

/*
// root color vars
let cssColorVar = {
    backgroundColor: "--background-color",
    defaultColor: "--default-color",
    headingColor: "--heading-color",
    navColor: "--nav-color",
    contrastColor: "--contrast-color"
}

let darkModeColors = {
    backgroundColor: "#bdbdbd",
    defaultColor: "#b9b9b9",
    headingColor: "#d5d5d5",
    navColor: "#bdbdbd",
    contrastColor: "#212529"
}

let htmlRoot = getComputedStyle(document.documentElement); // help of AI

let orgColors = [];

for (let varName in cssColorVar) {
    console.log(cssColorVar[varName]);
    orgColors.push(htmlRoot.getPropertyValue(cssColorVar[varName]))
}

for (let varName in darkModeColors) {
    document.querySelector("html").style.setProperty(cssColorVar[varName], darkModeColors[varName]);
}*/

let isDark = false;
let body = document.querySelector("body");

function toggleIcon() {
    if (isDark) {
        document.querySelector(".dark-mode-toggler .bi").classList.add("bi-moon-stars-fill");
        document.querySelector(".dark-mode-toggler .bi").classList.remove("bi-sun-fill");
    } else {
        document.querySelector(".dark-mode-toggler .bi").classList.add("bi-sun-fill");
        document.querySelector(".dark-mode-toggler .bi").classList.remove("bi-moon-stars-fill");
    }
}

document.querySelector(".dark-mode-toggler").onclick = function () {
    toggleIcon();
    if (isDark) {
        isDark = false;
        body.classList.remove("dark");
    } else {
        isDark = true;
        body.classList.add("dark");
    }
}