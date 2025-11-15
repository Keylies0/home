const RESSOURCES = ['🪵', '🧱', '🐑', '🌾', '🪨'];
const CARTES = '⭐';
const TITRES = ['🎲', '⚖️'];
const resume = document.getElementById('resume');

function construire_resume() {
    resume.appendChild(construire_ressources());
    for (const titre of TITRES)
        resume.appendChild(construire_resultats(titre));
}

function construire_ressources() {
    const tr = document.createElement('tr');
    for (const r of [''].concat(RESSOURCES).concat([CARTES]))
        tr.appendChild(document.createElement('td')).textContent = r;
    return tr;
}

function construire_resultats( titre ) {
    const tr = document.createElement('tr');
    tr.appendChild(document.createElement('td')).textContent = titre;
    for (const r of RESSOURCES.concat([CARTES])) {
        const td = tr.appendChild(document.createElement('td'));
        td.className = titre + ' ' + r;
    }
    return tr;
}

construire_resume();