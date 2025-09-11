const btn_theme   = document.getElementById("btn_theme");
const autre_theme = document.getElementById("autre_theme");

function changer_theme() {
    if (localStorage.getItem("theme") === "clair") {
        localStorage.setItem("theme", "sombre");
        document.body.className = "sombre"
        autre_theme.textContent = "clair";
    }
    else {
        localStorage.setItem("theme", "clair");
        document.body.className = "clair"
        autre_theme.textContent = "sombre";
    }
}

if (localStorage.getItem("theme") != "clair" || localStorage.getItem("theme") != "sombre")
    localStorage.setItem("theme", "clair");
else if (localStorage.getItem("theme") === "sombre") {
    document.body.className = "sombre";
    autre_theme.textContent = "clair";
}

btn_theme.addEventListener("click", changer_theme);