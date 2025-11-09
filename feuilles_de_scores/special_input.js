const NEGATIFS = document.getElementsByClassName('peut_negatif');

function opposer() {
    if (this.value[0] === '0' && this.value.length > 1)
        this.value = '-' + this.value.slice(1);
}

function uniquement_chiffres() {
    this.value = this.value.replace(/[^0-9-]/g, '');
}

for (const INPUT of NEGATIFS)
    INPUT.addEventListener('input', function() {
        opposer.call(this);
        uniquement_chiffres.call(this);
    })