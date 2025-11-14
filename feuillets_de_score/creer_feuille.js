const FEUILLE = document.getElementById("feuille");

function creer_feuille( NBR_JOUEURS, LS_TITRES, CARAC_SOMME ) {
    FEUILLE.appendChild(creer_joueurs(NBR_JOUEURS));
    for (const TITRE of LS_TITRES)
        FEUILLE.appendChild(creer_scores(NBR_JOUEURS, TITRE));
    FEUILLE.appendChild(creer_sommes(NBR_JOUEURS, CARAC_SOMME));
}

function creer_joueurs( NBR_JOUEURS ) {
    const tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    for (let i = 1; i <= NBR_JOUEURS; i++) {
        const td = tr.appendChild(document.createElement('td'));
        const input = td.appendChild(document.createElement('input'));
        input.type = "text";
        input.placeholder = 'Joueur ' + String(i);
        input.autocapitalize = "sentences";
    }
    return tr;
}

function creer_scores( NBR_JOUEURS, TITRE ) {
    const tr = document.createElement('tr');
    tr.appendChild(document.createElement('td')).textContent = TITRE;
    for (let i = 0; i < NBR_JOUEURS; i++) {
        const td = tr.appendChild(document.createElement('td'));
        const input = td.appendChild(document.createElement('input'));
        input.className = 'score' + String(i) + ' peut_negatif';
        input.type = "text";
        input.inputMode = "numeric";
    }
    return tr;
}

function creer_sommes( NBR_JOUEURS, CARAC_SOMME ) {
    const tr = document.createElement('tr');
    tr.appendChild(document.createElement('td')).textContent = CARAC_SOMME;
    for (let i = 0; i < NBR_JOUEURS; i++) {
        tr.appendChild(document.createElement('td')).id = 'somme' + String(i);
    }
    return tr;
}