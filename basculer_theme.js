const theme_conteneur = document.getElementById("theme_conteneur");
const theme_joystick  = document.getElementById("theme_joystick");

function basculer_theme() {
    document.body.style.transition = 'all 0.3s';
    if ( localStorage.getItem("theme") === "sombre" ) {
        localStorage.setItem("theme", "clair");
        document.body.className = "clair";
        theme_joystick.style.left = '2px';
    }
    else {
        localStorage.setItem("theme", "sombre");
        document.body.className = "sombre";
        theme_joystick.style.left = '33px';
    }
}

function theme_enregistre() {
    theme_joystick.style.display = 'none';
    if ( localStorage.getItem("theme") === "clair" ) {
        document.body.className = "clair";
        theme_joystick.style.left = '2px';
    }
    else {
        localStorage.setItem("theme", "sombre"); 
        document.body.className = "sombre";
        theme_joystick.style.left = '33px';
    }
    theme_joystick.style.display = 'block';
}

theme_enregistre();
theme_conteneur.addEventListener('click', basculer_theme);