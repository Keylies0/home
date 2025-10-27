const pions = document.getElementsByClassName("pion");

const rsrc = [];
rsrc.push(document.getElementsByClassName("tuile0 rsrc"));
rsrc.push(document.getElementsByClassName("tuile1 rsrc"));
rsrc.push(document.getElementsByClassName("tuile2 rsrc"));

const probas = [];
probas.push(document.getElementsByClassName("tuile0 proba"));
probas.push(document.getElementsByClassName("tuile1 proba"));
probas.push(document.getElementsByClassName("tuile2 proba"));



function int_to_proba(n) {
    if (n === "2" || n === "12") return 1/36;
    if (n === "3" || n === "11") return 1/18;
    if (n === "4" || n === "10") return 1/12;
    if (n === "5" || n ===  "9") return 1/ 9;
    if (n === "6" || n ===  "8") return 5/36;
}



function calculer() {
    const probabilites = {};
    const espera = {};

    for (const r of ressources) { 
        probabilites[r] = new Set();
        espera[r] = 0;
    }

    for (let pion = 0; pion < 7; pion++) {
        if (pions[pion].value != "Aucun") {
            probabilites[rsrc[0][pion].value].add(probas[0][pion]);
            probabilites[rsrc[1][pion].value].add(probas[1][pion]);
            probabilites[rsrc[2][pion].value].add(probas[2][pion]);
        }
        else if (pions[pion].value === "Colonie") {
            espera[rsrc[0][pion].value] += int_to_proba(probas[0][pion]);
            espera[rsrc[0][pion].value] += int_to_proba(probas[0][pion]);
            espera[rsrc[0][pion].value] += int_to_proba(probas[0][pion]);
        }
        else if (pions[pion].value === "Ville") {
            espera[rsrc[0][pion].value] += 2*int_to_proba(probas[0][pion]);
            espera[rsrc[0][pion].value] += 2*int_to_proba(probas[0][pion]);
            espera[rsrc[0][pion].value] += 2*int_to_proba(probas[0][pion]);
        }
    }

    console.log(probabilites);
    console.log(espera);
}

calculer();