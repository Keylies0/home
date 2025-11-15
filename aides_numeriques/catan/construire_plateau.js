const MAX_FIGURINES = 7;
const PLATEAU       = document.getElementById('plateau');
const FIGURINES = ['🏘️ Colonie', '🏰 Ville'];

function construire_plateau() {
    for (let _ = 0; _ < MAX_FIGURINES; _++)
        PLATEAU.appendChild(construire_figurine());
}

function construire_figurine() {
    const table = document.createElement('table');
    table.className = 'region';
    const select = table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(document.createElement('select'));
    select.className = 'Figurine'
    for (const f of ['Figurine'].concat(FIGURINES))
        select.appendChild(document.createElement('option')).textContent = f;
    table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(construire_intersection());
    return table;
}

function construire_intersection() {
    const table = document.createElement('table');
    const tr0 = table.appendChild(document.createElement('tr'));
    const tr1 = table.appendChild(document.createElement('tr'));
    for (let _ = 0; _ < 3; _++) {
        tr0.appendChild(construire_select_ressource());
        tr1.appendChild(construire_input_jeton());
    }
    return table;
}

function construire_select_ressource() {
    const td = document.createElement('td');
    const select = td.appendChild(document.createElement('select'));
    select.className = 'Ressource';
    for (const r of ['🏜️'].concat(RESSOURCES))
        select.appendChild(document.createElement('option')).textContent = r;
    return td;
}

function construire_input_jeton() {
    const td = document.createElement('td');
    const input = td.appendChild(document.createElement('input'));
    input.type = 'text';
    input.inputMode = 'numeric';
    input.placeholder = 'Jeton';
    input.className = 'Jeton';
    return td;
}

construire_plateau();