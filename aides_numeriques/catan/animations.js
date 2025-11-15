const INPUTS  = document.getElementsByTagName('input');
const REGIONS = document.getElementsByClassName('region');

function uniquement_chiffres() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value === '6' || this.value === '8') {
        this.style.color = 'red';
        this.style.fontWeight = 'bold';
    }
    else {
        this.style.color = '';
        this.style.fontWeight = '';
    }
}

function cacher_montrer_tout( TUILES, JETONS ) {
    if (this.value === 'Figurine') {
        for (const tuile of TUILES)
            tuile.style.display = 'none';
        for (const jeton of JETONS)
            jeton.style.display = 'none';
    }
    else {
        for (let i = 0; i < 3; i++) {
            TUILES[i].style.display = 'block';
            montrer_cacher_jeton(TUILES[i], JETONS[i]);
        }
    }
}

function montrer_cacher_jeton( tuile, jeton ) {
    for (let i = 0; i < 3; i++) {
        if (tuile.value === '🏜️')
            jeton.style.display = 'none';
        else
            jeton.style.display = 'block';
    }
}

for (const input of INPUTS)
    input.addEventListener('input', uniquement_chiffres);

for (const region of REGIONS) {
    const figurine = region.getElementsByClassName('Figurine')[0];
    const TUILES   = region.getElementsByClassName('Ressource');
    const JETONS   = region.getElementsByClassName('Jeton');
    figurine.addEventListener('change', function() {
        cacher_montrer_tout.call(this, TUILES, JETONS);
    })
    cacher_montrer_tout.call(figurine, TUILES, JETONS);
    
    for (let i = 0; i < 3; i++)
        TUILES[i].addEventListener('change', () => { montrer_cacher_jeton(TUILES[i], JETONS[i]); })
}