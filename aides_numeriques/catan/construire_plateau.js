const MAX_FIGURINES = 7;
const PLATEAU       = document.getElementById('plateau');
const FIGURINES = ['Colonie', 'Ville'];

function construire_plateau() {
    for (let i = 0; i < MAX_FIGURINES; i++)
        PLATEAU.appendChild(construire_figurine(i));
}

function construire_figurine( i ) {
    const table = document.createElement('table');
    const select = table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(document.createElement('select'));
    select.className = 'Figurine' + String(i);
    for (const f of ['Figurine'].concat(FIGURINES))
        select.appendChild(document.createElement('option')).textContent = f + ' ' + String(i+1);
    table.appendChild(document.createElement('tr')).appendChild(document.createElement('td')).appendChild(construire_intersection(i));
    return table;
}

function construire_intersection( i ) {
    const table = document.createElement('table');

    return table;
}

construire_plateau();