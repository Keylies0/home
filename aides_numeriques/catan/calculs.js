function calcul_esperance( r ) {
    let esperance = 0.;
    for (const region of REGIONS) {
        const figurigne = region.getElementsByClassName('Figurine')[0];
        if (figurigne.value != 'Figurine') {
            const TUILES = region.getElementsByClassName('Ressource');
            const JETONS = region.getElementsByClassName('Jeton');
            for (let i = 0; i < 3; i++)
                if (TUILES[i].value === r)
                    esperance += scalaire(figurigne.value) * proba(JETONS[i].value);
        }
    }
    return esperance/100;
}

function scalaire( value ) {
    if (value === '🏘️ Colonie') return 1;
    if (value === '🏰 Ville'  ) return 2;
    return 0;
}

function proba( value ) {
    const v = parseInt(value);
    if (isNaN(v)) return 0;
    if ( v === 2 || v === 12 ) return 100/36;
    if ( v === 3 || v === 11 ) return 100/18;
    if ( v === 4 || v === 10 ) return 100/12;
    if ( v === 5 || v ===  9 ) return 100/ 9;
    if ( v === 6 || v ===  8 ) return 500/36;
    if ( v === 7 ) return 100/6;
    return 0;
}


function calcul_proba( r ) {
    let proba_set = new Set();
    for (const region of REGIONS) {
        const figurigne = region.getElementsByClassName('Figurine')[0];
        if (figurigne.value != 'Figurine') {
            const TUILES = region.getElementsByClassName('Ressource');
            const JETONS = region.getElementsByClassName('Jeton');
            for (let i = 0; i < 3; i++)
                if (TUILES[i].value === r)
                    proba_set.add(JETONS[i].value);
        }
    }
    let probabilite = 0;
    for (const v of proba_set)
        probabilite += proba(v);
    return probabilite;
}


function calcul_esperance_tout() {
    let esperance = 0.;
    for (const region of REGIONS) {
        const figurigne = region.getElementsByClassName('Figurine')[0];
        if (figurigne.value != 'Figurine') {
            const TUILES = region.getElementsByClassName('Ressource');
            const JETONS = region.getElementsByClassName('Jeton');
            for (let i = 0; i < 3; i++)
                if (TUILES[i].value != '🏜️')
                    esperance += scalaire(figurigne.value) * proba(JETONS[i].value);
        }
    }
    return esperance/100;
}


function calcul_proba_tout() {
    let proba_set = new Set();
    for (const region of REGIONS) {
        const figurigne = region.getElementsByClassName('Figurine')[0];
        if (figurigne.value != 'Figurine') {
            const TUILES = region.getElementsByClassName('Ressource');
            const JETONS = region.getElementsByClassName('Jeton');
            for (let i = 0; i < 3; i++)
                if (TUILES[i].value != '🏜️')
                    proba_set.add(JETONS[i].value);
        }
    }
    let probabilite = 0;
    for (const v of proba_set)
        probabilite += proba(v);
    return probabilite;
}


function calculer() {
    for (const r of RESSOURCES) {
        document.getElementsByClassName('Probabilité ' + r)[0].textContent = String(Math.round(calcul_proba(r))) + ' %';
        document.getElementsByClassName('Espérance '   + r )[0].textContent = String(calcul_esperance(r).toFixed(2));
    }
    document.getElementsByClassName('Probabilité ' + '⭐')[0].textContent = String(Math.round(calcul_proba_tout())) + ' %';
    document.getElementsByClassName('Espérance '   + '⭐')[0].textContent = String(calcul_esperance_tout().toFixed(2));
}

calculer();
for (const select of document.getElementsByTagName('select'))
    select.addEventListener('change', calculer);
for (const input of document.getElementsByTagName('input'))
    input.addEventListener('input', calculer);
