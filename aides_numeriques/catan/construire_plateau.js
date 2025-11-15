const MAX_FIGURINES = 7;
const PLATEAU       = document.getElementById('plateau');
const FIGURINES = ['🏘️ Colonie', '🏰 Ville'];

function construire_plateau() {
    for (let i = 0; i < MAX_FIGURINES; i++)
        PLATEAU.appendChild(construire_figurine(i));
}

function construire_figurine( i ) {
    const table = document.createElement('table');
    const select = table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(document.createElement('select'));
    select.className = 'Figurine' + String(i);
    for (const f of ['Figurine'].concat(FIGURINES))
        select.appendChild(document.createElement('option')).textContent = f;
    table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(construire_intersection(i));
    return table;
}

function construire_intersection( i ) {
    const table = document.createElement('table');
    const tr0 = table.appendChild(document.createElement('tr'));
    const tr1 = table.appendChild(document.createElement('tr'));
    for (let j = 0; j < 3; j++) {
        tr0.appendChild(construire_select_ressource(i, j));
        tr1.appendChild(construire_input_jeton(i, j));
    }
    return table;
}

function construire_select_ressource( i, j ) {
    const td = document.createElement('td');
    const select = td.appendChild(document.createElement('select'));
    select.className = 'Ressource' + String(i) + '-' + String(j);
    for (const r of ['🏜️'].concat(RESSOURCES))
        select.appendChild(document.createElement('option')).textContent = r;
    return td;
}

function construire_input_jeton( i, j ) {
    const td = document.createElement('td');
    const input = td.appendChild(document.createElement('input'));
    input.type = 'text';
    input.inputMode = 'numeric';
    input.placeholder = 'Jeton';
    input.className = 'Jeton' + String(i) + '-' + String(j);
    return td;
}

construire_plateau();