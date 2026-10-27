const backtotop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backtotop.style.opacity = "1";
        backtotop.style.visibility = "visible";
    } else {
        backtotop.style.opacity = "0";
        backtotop.style.visibility = "hidden";
    }

});

backtotop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const dropdownLink = document.querySelector(".dropdown > a");
const dropdownParent = document.querySelector(".dropdown");

if (dropdownLink && dropdownParent) {
    dropdownLink.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownParent.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!dropdownParent.contains(e.target)) {
            dropdownParent.classList.remove("open");
        }
    });
}

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
    } else {
        root.removeAttribute("data-theme");
    }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        applyTheme(next);
    });
}
        