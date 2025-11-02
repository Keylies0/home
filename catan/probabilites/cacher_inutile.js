// Fonctions
function cacher_ressources_jetons( i ) {
    for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
        const ressource = document.getElementById('Figurine' + String(i) + 'Ressource' + String(j));
        ressource.style.display = 'none';
        cacher_jeton(i, j);
    }
}

function cacher_jeton( i, j ) {
    const jeton = document.getElementById('Figurine' + String(i) + 'Jeton' + String(j));
    jeton.style.display = 'none';
}

function afficher_ressources_jetons( i ) {
    for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
        const ressource = document.getElementById('Figurine' + String(i) + 'Ressource' + String(j));
        ressource.style.display = 'block';
        afficher_jeton(i, j, ressource.value);
    }
}

function afficher_jeton( i, j, Rvalue ) {
    if (Rvalue != '🏜️') {
        const jeton = document.getElementById('Figurine' + String(i) + 'Jeton' + String(j));
        jeton.style.display = 'block';
    }
}

// Programme effectue
for (let i = 0; i < MAX_FIGURINES; i++) {
    cacher_ressources_jetons(i);
    const Figurinei = 'Figurine' + String(i);
    const figurine = document.getElementById(Figurinei);
    figurine.addEventListener('change', function() {
        if (
            this.value != 'Colonie'
            && this.value != 'Ville'
        )    cacher_ressources_jetons(i);
        else afficher_ressources_jetons(i);
    });
    for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
        const ressource = document.getElementById(Figurinei + 'Ressource' + String(j));
        ressource.addEventListener('change', function() {
            if (this.value === '🏜️') cacher_jeton(i, j);
            else                     afficher_jeton(i, j, this.value);
        })
    }
}