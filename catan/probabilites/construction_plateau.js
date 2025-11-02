// Constantes
const balise_plateau = document.getElementById('plateau');
const MAX_FIGURINES           = 7;
const MAX_TUILES_INTERSECTION = 3;

// Fonctions
function creer_plateau() {
    for (let i = 0; i < MAX_FIGURINES; i++) {
        const hr = document.createElement('hr');
        balise_plateau.appendChild(hr);
        balise_plateau.appendChild(creer_propriete(i));
    }
}

function creer_propriete( i ) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbdoy');
    table.appendChild(tbody);
    tbody.appendChild(creer_tr_select_figurine(i));
    tbody.appendChild(creer_tr_terrains(i)       );
    return table;
}

function creer_tr_select_figurine( i ) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    const select = document.createElement('select');
    td.appendChild(select);
    select.id = "Figurine" + String(i);
    select.classList.add('actualiser');
    for (const f of [''].concat(FIGURINES)) {
        const option = document.createElement('option');
        select.appendChild(option);
        option.textContent = f;
    }
    return tr;
}

function creer_tr_terrains( i ) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(creer_table_terrains(i));
    return tr;
}

function creer_table_terrains( i ) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    const tr0 = document.createElement('tr');
    tbody.appendChild(tr0);
    const tr1 = document.createElement('tr');
    tbody.appendChild(tr1);
    for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
        const td0 = document.createElement('td');
        tr0.appendChild(td0);
        td0.appendChild(creer_select_ressource(i, j));
        const td1 = document.createElement('td');
        tr1.appendChild(td1);
        td1.appendChild(creer_input_jeton(i, j));
    }
    return table;
}

function creer_select_ressource( i, j ) {
    const select = document.createElement('select');
    select.id = 'Figurine' + String(i) + 'Ressource' + String(j);
    select.classList.add('actualiser');
    for (const r of ['🏜️'].concat(RESSOURCES)) {
        const option = document.createElement('option');
        select.appendChild(option);
        option.textContent = r;
    }
    return select;
}

function creer_input_jeton( i, j ) {
    const input = document.createElement('input');
    input.id        = 'Figurine' + String(i) + 'Jeton' + String(j);
    input.classList.add('actualiser');
    input.type      = 'texte';
    input.inputMode = 'numeric';
    return input;
}

// Programme effectue
creer_plateau();