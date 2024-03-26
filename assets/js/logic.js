const toggle = document.querySelector("#colors");
const container = document.querySelector(".container");
const headerEl = document.querySelector("header")
const sectionEl = document.querySelectorAll("section")
const h2El = document.querySelector("h2")
const formEl = document.querySelector("form")

let mode = "dark-mode";

toggle.addEventListener("click", function () {
    if (mode === "dark-mode") {
        mode = "light-mode";
        container.classList.add("light-mode");
        container.classList.remove("dark-mode")
        headerEl.classList.add("light-mode");
        headerEl.classList.remove("dark-mode")
        h2El.classList.add("light-mode");
        h2El.classList.remove("dark-mode")
        formEl.classList.add("light-mode");
        formEl.classList.remove("dark-mode")
        sectionEl.forEach(function (el) {
            el.classList.add("light-mode")
            el.classList.remove("dark-mode")
        })
    }

    else {
        mode = "dark-mode";
        container.classList.add("dark-mode")
        container.classList.remove("light-mode")
        headerEl.classList.remove("light-mode");
        headerEl.classList.add("dark-mode")
        h2El.classList.remove("light-mode");
        h2El.classList.add("dark-mode")
        formEl.classList.remove("light-mode");
        formEl.classList.add("dark-mode")
        sectionEl.forEach(function (el) {
            el.classList.remove("light-mode")
            el.classList.add("dark-mode")
        })
    }
});


function myFunction() {
    const element = document.querySelector('.Myfirstblog')
    element.classList.add("dark-mode");
}


