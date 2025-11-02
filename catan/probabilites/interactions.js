// Constantes
const ACTUALISER_SELECTS = document.querySelectorAll('select.actualiser');
const ACTUALISER_INPUTS  = document.querySelectorAll('input.actualiser' );

// Fonctions
function calculer_resume() {
    calculer_probabilites();
    calculer_esperances();
}

function calculer_probabilites() {
    for (const r of RESSOURCES) {
        let JETONS = new Set();
        for (let i = 0; i < MAX_FIGURINES; i++) {
            const Figurinei = 'Figurine' + String(i);
            const figurine = document.getElementById(Figurinei);
            if (figurine.value != '') {
                for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
                    const ressource = document.getElementById(Figurinei + 'Ressource' + String(j));
                    if (ressource.value === r) {
                        const jeton = document.getElementById(Figurinei + 'Jeton' + String(j));
                        JETONS.add(jeton.value);
                    }
                }
            }
        }
        let proba = 0;
        for (const jeton of JETONS)
            proba += probabilites(jeton);
        const ProbabiliteRessource = document.getElementById('Probabilité' + r);
        ProbabiliteRessource.textContent = String(Math.round(100*proba)) + ' %';
    }
}

function probabilites( j ) {
    if (
        j != ''
        && 2 <= parseInt(j)
        && parseInt(j) <= 12
    )
        return (6 - Math.abs(parseInt(j) - 7)) / 36;
    return 0;
}

function calculer_esperances() {
    for (const r of RESSOURCES) {
        let esper = 0;
        for (let i = 0; i < MAX_FIGURINES; i++) {
            const Figurinei = 'Figurine' + String(i);
            const figurine = document.getElementById(Figurinei);
            if (figurine.value != '') {
                for (let j = 0; j < MAX_TUILES_INTERSECTION; j++) {
                    const ressource = document.getElementById(Figurinei + 'Ressource' + String(j));
                    if (ressource.value === r) {
                        const jeton = document.getElementById(Figurinei + 'Jeton' + String(j));
                        esper += scalaire(figurine.value) * probabilites(jeton.value);
                    }
                }
            }
        }
        const EsperanceRessource = document.getElementById('Espérance' + r);
        EsperanceRessource.textContent = String(esper.toFixed(2));
    }
}

function scalaire(figurine) {
    if (figurine === "Colonie") return 1;
    if (figurine === "Ville"  ) return 2;
    return 0;
}

function filtrer_input() {
    this.value = this.value.replace(/[^0-9]/g, '');
}

// Programme effectue
for (const s of ACTUALISER_SELECTS)
    s.addEventListener('change', calculer_resume);
for (const i of ACTUALISER_INPUTS  ) {
    i.addEventListener('input' , calculer_resume);
    i.addEventListener('input' , filtrer_input  );
}
calculer_resume();