const ressources = [
    "Argile",
    "Blé",
    "Bois",
    "Laine",
    "Minerai",
];

const tbody_resultats = document.getElementById("tbody_resultats");
const tbody_plateau   = document.getElementById("tbody_plateau");


// Construction tableaux des résultats
for (const r of ressources) {
    const tr = tbody_resultats.appendChild(document.createElement("tr"));
    tr.appendChild(document.createElement("td")).textContent = r;
    tr.appendChild(document.createElement("td")).className = r + " P";
    tr.appendChild(document.createElement("td")).className = r + " E";
}


// Construction pions et tuiles

const tr = document.createElement("tr");
tbody_plateau.appendChild(tr);

for (let n_td = 0; n_td < 7; n_td++) {
    const td = document.createElement("td");
    tr.appendChild(td);

    const slct = document.createElement("select");
    td.appendChild(slct);
    slct.className = String(n_td) + " pion";

    slct.appendChild(document.createElement("option")).textContent = "Aucune";
    slct.appendChild(document.createElement("option")).textContent = "Colonie";
    slct.appendChild(document.createElement("option")).textContent = "Ville";
}

for (let n_tr = 0; n_tr < 3; n_tr++) {
    const tr = document.createElement("tr");
    tbody_plateau.appendChild(tr);

    for (let n_td = 0; n_td < 7; n_td++) {
        const td = document.createElement("td");
        tr.appendChild(td);

        const slct = document.createElement("select");
        td.appendChild(slct);
        slct.className = String(n_td) + " tuile" + String(n_tr) + " rsrc";

        slct.appendChild(document.createElement("option")).textContent = "Désert";
        for (const r of ressources) {
            slct.appendChild(document.createElement("option")).textContent = r;
        }

        const inpt = document.createElement("input");
        td.appendChild(inpt);
        inpt.className = String(n_td) + " tuil" + String(n_tr) + " proba";
        inpt.type = "number";
    }
}