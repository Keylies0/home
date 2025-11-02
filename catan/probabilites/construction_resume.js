// Constantes
const balise_resume  = document.getElementById('resume' );
const RESSOURCES = [
    '🪵',
    '🧱',
    '🐑',
    '🌾',
    '🪨',
]
const FIGURINES = [
    'Colonie',
    'Ville',
]

// Fonctions
function creer_resume() {
    balise_resume.appendChild(creer_tr_ressources()      );
    balise_resume.appendChild(creer_tr_txt('Probabilité'));
    balise_resume.appendChild(creer_tr_txt('Espérance'  ));
}

function creer_tr_ressources() {
    const tr = document.createElement('tr');
    for (const r of [''].concat(RESSOURCES)) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = r;
    }
    return tr;
}

function creer_tr_txt( texte ) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = texte;
    for (const r of RESSOURCES) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.id = texte + r
    }
    return tr;
}

// Programme effectue
creer_resume();