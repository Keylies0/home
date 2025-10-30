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

function creer_tableau_recap() {
    const tbody = document.getElementById("recap");

    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let td = document.createElement("td");
    tr.appendChild(td);

    for (let r of RESSOURCES) {
        td = document.createElement("td");
        tr.appendChild(td);

        td.textContent = r;
    }

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    td = document.createElement("td");
    tr.appendChild(td);

    td.textContent = "Probabilité";

    for (let r of RESSOURCES) {
        td = document.createElement("td");
        tr.appendChild(td);

        td.className = "proba " + r;
    }

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    td = document.createElement("td");
    tr.appendChild(td);

    td.textContent = "Espérance";

    for (let r of RESSOURCES) {
        td = document.createElement("td");
        tr.appendChild(td);

        td.className = "esper " + r;
    }
}


function creer_plateau() {
    const tr = document.getElementById("plateau");

    for (let i = 0; i < 7; i++) {
        td = document.createElement("td");
        tr.appendChild(td);

        table = document.createElement("table");
        td.appendChild(table);

        tbody = document.createElement("tbody");
        table.appendChild(tbody);

        colonie_3tuiles(tbody, i);
    }
}


function colonie_3tuiles( tbody, i ) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let td = document.createElement("td");
    tr.appendChild(td);

    const slct = document.createElement("select");
    td.appendChild(slct);

    slct.className = String(i) + " pion";

    let optn;

    for (let f of FIGURINES) {
        optn = document.createElement("option");
        slct.appendChild(optn);

        optn.textContent = f;
    }

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    td = document.createElement("td");
    tr.appendChild(td);

    const table = document.createElement("table")
    td.appendChild(table);

    const tbody_new = document.createElement("tbody");
    table.appendChild(tbody_new);

    trois_tuiles(tbody_new, i);
}


function trois_tuiles( tbody, i ) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let td;
    let slct;
    let optn;

    for (let j = 0; j < 3; j++) {
        td = document.createElement("td");
        tr.appendChild(td);

        slct = document.createElement("select");
        td.appendChild(slct);

        optn = document.createElement("option");
        slct.appendChild(optn);

        optn.textContent = "Désert";

        for (let r of RESSOURCES) {
            optn = document.createElement("option");
            slct.appendChild(optn);

            optn.textContent = r;
        }
    }

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (let j = 0; j < 3; j++) {
        td = document.createElement("td");
        tr.appendChild(td);

        for (let r of RESSOURCES) {
            input = document.createElement("input");
            td.appendChild(input);

            input.type = "text";
            input.inputmode = "numeric";
        }
    }
}



creer_tableau_recap();
creer_plateau();