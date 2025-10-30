const RESSOURCES = [
    "Argile",
    "Blé",
    "Bois",
    "Cailloux",
    "Mouton",
]

const FIGURINES = [
    "",
    "Colonie",
    "Ville",
]

const recap = document.getElementById("recap");

function creer_tableau_recap() {
    const tbody = document.createElement("tbody");
    recap.appendChild(tbody);

    tbody.appendChild(creer_recap_l1());
    tbody.append(creer_recap_l2l3("Probabilité"));
    tbody.appendChild(creer_recap_l2l3("Espérance"));
}

function creer_recap_l1() {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    tr.appendChild(td);

    for (const r of RESSOURCES) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.textContent = r;
    }

    return tr;
}

function creer_recap_l2l3( texte ) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = texte;

    for (const r of RESSOURCES) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.className = texte + " " + r;
    }

    return tr;
}


function creer_plateau() {
    const plateau = document.getElementById("plateau");
    for (let i = 0; i < 7; i++)
        plateau.appendChild(creer_figurine_intersection(i));
}

function creer_figurine_intersection( i ) {
    const table = document.createElement("table");

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    let td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(creer_select_figurine(i));

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(creer_intersection(i));

    return table;
}

function creer_select_figurine( i ) {
    const slct = document.createElement("select");
    slct.className = String(i) + " figurine";

    let optn;

    for (const f of FIGURINES) {
        optn = document.createElement("option");
        slct.appendChild(optn);
        optn.textContent = f;
    }

    return slct;
}

function creer_intersection( i ) {
    const table = document.createElement("table");

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const tr0 = document.createElement("tr");
    const tr1 = document.createElement("tr");
    tbody.appendChild(tr0);
    tbody.appendChild(tr1);

    let td;
    let inpt;
    let slct;
    let optn;

    for (let j = 0; j < 3; j++) {
        td = document.createElement("td");
        tr0.appendChild(td);

        slct = document.createElement("select");
        td.appendChild(slct);
        slct.className = String(i) + " Ressource" + String(j);

        for (const r of RESSOURCES) {
            optn = document.createElement("option");
            slct.appendChild(optn);
            optn.textContent = r;
        }


        td = document.createElement("td");
        tr1.appendChild(td);
        
        inpt = document.createElement("input");
        td.appendChild(inpt);
        inpt.type = "text";
        inpt.inputMode = "numeric";
        inpt.className = String(i) + " Probabilité " + String(j);
    }

    return table;
}

creer_tableau_recap();
creer_plateau();