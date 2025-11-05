// Constantes
let POINTS    = [];
let RESULTATS = [];
for (let i = 0; i < MAX_JOUEURS; i++) {
    POINTS.push(document.getElementsByClassName(String(i)));
    RESULTATS.push(document.getElementById(String(i)));
}
const button = document.getElementById('sommer');

// Fonctions
function sommer() {
    for (let i = 0; i < MAX_JOUEURS; i++) {
        let toutvide = 0;
        let resultat = 0;
        for (const point of POINTS[i]) {
            if (point.value === '') toutvide++;
            else resultat += parseInt(point.value);
        }
        if (toutvide != SCORES.length) RESULTATS[i].textContent = String(resultat);
        else RESULTATS[i].textContent = '';
    }
}

// Programme effectue
button.addEventListener('click', sommer);