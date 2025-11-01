const INPUTS  = document.getElementsByClassName("inputProba");
const SELECTS = document.getElementsByClassName("selectResrc");
const SLCTFIG = document.getElementsByClassName("figurine");

function garder_chiffres() {
    this.value = this.value.replace(/[^0-9]/g, "");
}


function figurine_to_scalaire(texte) {
    if (texte === "Colonie") return 1;
    if (texte === "Ville"  ) return 2;
    return 0;
}

function nbr_to_proba(texte) {
    const nbr = parseInt(texte);
    if (nbr == 2 || nbr == 12) return 1/36;
    if (nbr == 3 || nbr == 11) return 2/36;
    if (nbr == 4 || nbr == 10) return 3/36;
    if (nbr == 5 || nbr ==  9) return 4/36;
    if (nbr == 6 || nbr ==  8) return 5/36;
    return 0;
}

function calcul_esperance() {
    for (const r of RESSOURCES) {
        esperance = 0;
        recap_esp = document.getElementsByClassName("Espérance " + r)[0];

        for (let i = 0; i < 7; i++) {
            figurine = document.getElementsByClassName(String(i) + " figurine")[0];
            scalaire = figurine_to_scalaire(figurine.value);

            for (let j = 0; j < 3; j++) {
                rsrc = document.getElementsByClassName(String(i) + " Ressource" + String(j))[0];
                if ( rsrc.value === r) {
                    nbr = document.getElementsByClassName(String(i) + " Probabilité" + String(j))[0];
                    proba = nbr_to_proba(nbr.value);
                    esperance += scalaire * proba;
                }
            }
        }

        recap_esp.textContent = String(esperance.toFixed(2));
    }
}


function calcul_probabilite() {
    for (const r of RESSOURCES) {
        proba = 0;
        recap_prob = document.getElementsByClassName("Probabilité " + r)[0];
        let S = new Set();

        for (let i = 0; i < 7; i++) {
            figurine = document.getElementsByClassName(String(i) + " figurine")[0];

            if (figurine.value != "") {
                for (let j = 0; j < 3; j++) {
                    rsrc = document.getElementsByClassName(String(i) + " Ressource" + String(j))[0];
                    if ( rsrc.value === r) {
                        nbr = document.getElementsByClassName(String(i) + " Probabilité" + String(j))[0];
                        S.add(nbr.value);
                    }
                }
            }
        }

        for (const v of S) {
            proba += nbr_to_proba(v);
        }

        recap_prob.textContent = String(proba.toFixed(2));
    }
}







for (const INPUT of INPUTS) {
    INPUT.addEventListener("input", garder_chiffres);
    INPUT.addEventListener("input", calcul_esperance);
    INPUT.addEventListener("input", calcul_probabilite);
}

for (const SELECT of SELECTS) {
    SELECT.addEventListener("change", calcul_esperance);
    SELECT.addEventListener("change", calcul_probabilite);
}

for (const SELECT of SLCTFIG) {
    SELECT.addEventListener("change", calcul_esperance);
    SELECT.addEventListener("change", calcul_probabilite);
}