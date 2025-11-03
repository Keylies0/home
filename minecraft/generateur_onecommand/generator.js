// Constantes
const CHECKPREDEF     = document.getElementsByClassName('checkpredef'   );
const COMMANDESPREDEF = document.getElementsByClassName('commandepredef');
const COMMANDES       = document.getElementsByClassName('commande'      );
const one_command     = document.getElementById('onecommand');

// Fonctions
function generer_onecommand() {
    let StringOneCommand = '/summon minecraft:falling_block ~ ~1 ~ {BlockState:{Name:"minecraft:redstone_block"},Passengers:[{id:"minecraft:falling_block",BlockState:{Name:"minecraft:activator_rail"}},';
    if (CHECKPREDEF[0].checked) StringOneCommand += append_command(COMMANDESPREDEF[0]);
    for (const elt of COMMANDES) StringOneCommand += append_command(elt);
    if (CHECKPREDEF[1].checked) StringOneCommand += append_command(COMMANDESPREDEF[1]);
    if (CHECKPREDEF[2].checked) StringOneCommand += append_command(COMMANDESPREDEF[2]);
    StringOneCommand += ']}';
    one_command.textContent = StringOneCommand;
}

function append_command(elt) {
    if (elt.value != '')
        return '{id:"minecraft:command_block_minecart",Command:"' + ajout_backslash(elt.value) + '"},';
    return '';
}

function ajout_backslash(str) {
    return str.replace(/["]/g, '\\$&');
}

// Programme effectuer
generer_onecommand();
for (const input of CHECKPREDEF)
    input.addEventListener('change', generer_onecommand);