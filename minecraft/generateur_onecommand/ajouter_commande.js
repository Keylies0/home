// Constantes
const button          = document.getElementById('ajouter'        );
const liste_commandes = document.getElementById('liste_commandes');
const ligne_dajout    = document.getElementById('ligne_dajout'   );

// Fonctions
function ajouter_commande() {
    const tr = document.createElement('tr');
    liste_commandes.insertBefore(tr, ligne_dajout);
    const td0 = document.createElement('td');
    tr.appendChild(td0);
    const suppr = document.createElement('button');
    td0.appendChild(suppr);
    suppr.textContent = '❌';
    suppr.addEventListener('click', supprimer_commande);
    suppr.addEventListener('click', generer_onecommand);
    const td1 = document.createElement('td');
    tr.appendChild(td1);
    const textarea = document.createElement('textarea');
    td1.appendChild(textarea);
    textarea.classList.add('commande');
    textarea.addEventListener('input', generer_onecommand)
}

function supprimer_commande() {
    this.parentElement.parentElement.remove();
}

// Programme effectue
button.addEventListener('click', ajouter_commande);