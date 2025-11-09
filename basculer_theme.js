const btn_theme   = document.getElementById("btn_theme");
const autre_theme = document.getElementById("autre_theme");

function basculer_theme() {
    if ( localStorage.getItem("theme") === "sombre" ) {
        localStorage.setItem("theme", "clair");
        document.body.className = "clair";
        autre_theme.textContent = "sombre";
    }
    else {
        localStorage.setItem("theme", "sombre");
        document.body.className = "sombre";
        autre_theme.textContent = "clair";
    }
}

function theme_enregistre() {
    if ( localStorage.getItem("theme") === "clair" ) {
        document.body.className = "clair";
        autre_theme.textContent = "sombre";
    }
    else {
        document.body.className = "sombre";
        autre_theme.textContent = "clair";
    }
}

theme_enregistre();
btn_theme.addEventListener("click", basculer_theme);