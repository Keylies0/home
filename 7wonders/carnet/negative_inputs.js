// Constantes
const NEGATIVE_INPUTS = document.getElementsByClassName('allow_negative');

// Fonctions
function is_negative() {
    if (this.value[0] === '0' && this.value.length >= 2)
        this.value = '-' + this.value.slice(1);
}

function filtrer_input() {
    this.value = this.value.replace(/[^0-9-]/g, '');
}

// Programme effectue
for (const input of NEGATIVE_INPUTS) {
    input.addEventListener('input', is_negative );
    input.addEventListener('input', filtrer_input);
}