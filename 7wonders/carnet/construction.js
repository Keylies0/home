// Constantes
const tableau = document.getElementById('tableau');
const MAX_JOUEURS = 7;
const SCORES = [
    '🏛️',
    '🪙',
    '⚔️',
    '🟦',
    '🟨',
    '🟩',
    '🟪',
]

// Fonctions
function creer_blocscores() {
    tableau.appendChild(creer_tr_noms());
    for (const s of SCORES)
        tableau.appendChild(creer_tr_score(s));
    tableau.appendChild(creer_tr_sommes());
}

function creer_tr_noms() {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    for (let i = 0; i < MAX_JOUEURS; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        const input = document.createElement('input');
        td.appendChild(input);
        input.type = 'text';
        input.placeholder = 'Joueur ' + String(i);
    }
    return tr;
}

function creer_tr_score(s) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = s;
    for (let i = 0; i < MAX_JOUEURS; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        const input = document.createElement('input');
        td.appendChild(input);
        input.type = 'text';
        input.inputMode = 'numeric';
        input.classList.add(String(i));
        input.classList.add('allow_negative');
    }
    return tr;
}

function creer_tr_sommes() {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = '∑';
    for (let i = 0; i < MAX_JOUEURS; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.id = String(i);
    }
    return tr;
}

// Programme effectue
creer_blocscores();