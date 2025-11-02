// Constantes
const ACTUALISER_SELECTS = document.querySelectorAll('select.actualiser');
const ACTUALISER_INPUTS  = document.querySelectorAll('input.actualiser' );

// Fonctions
function calculer_resume() {
    calculer_probabilites();
    calculer_esperances();
}

function calculer_probabilites() {
    let JETONSCARTES = new Set();
    for (const r of RESSOURCES) {
        let JETONS = new Set();
        for (let i = 0; i < MAX_FIGURINES; i++) {
            const Figurinei = 'Figurine' + String(i);
            const figurine = document.getElementById(Figurinei);
            if (FIGURINES.includes(figurine.value)) {
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
        JETONSCARTES = JETONSCARTES.union(JETONS);
    }
    let probacartes = 0;
    for (const jeton of JETONSCARTES)
        probacartes += probabilites(jeton);
    const ProbabiliteCartes = document.getElementById('Probabilité' + '🃏');
    ProbabiliteCartes.textContent = String(Math.round(100*probacartes)) + ' %';
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
    let espercartes = 0;
    for (const r of RESSOURCES) {
        let esper = 0;
        for (let i = 0; i < MAX_FIGURINES; i++) {
            const Figurinei = 'Figurine' + String(i);
            const figurine = document.getElementById(Figurinei);
            if (FIGURINES.includes(figurine.value)) {
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
        espercartes += esper;
    }
    const EsperanceCartes = document.getElementById('Espérance' + '🃏');
    EsperanceCartes.textContent = String(espercartes.toFixed(2));
}

function scalaire(figurine) {
    if (figurine === "Colonie") return 1;
    if (figurine === "Ville"  ) return 2;
    return 0;
}

function filtrer_input() {
    this.value = this.value.replace(/[^0-9]/g, '');
}

function couleur_jeton() {
    if (
        this.value === '6'
        || this.value === '8'
    ) {
        this.style.color = 'red';
        this.style.fontWeight = 'bold';
    }
    else {
        this.style.cssText = '';
    }
}

// Programme effectue
for (const s of ACTUALISER_SELECTS)
    s.addEventListener('change', calculer_resume);
for (const i of ACTUALISER_INPUTS  ) {
    i.addEventListener('input' , calculer_resume);
    i.addEventListener('input' , filtrer_input  );
    i.addEventListener('input' , couleur_jeton);
}
calculer_resume();