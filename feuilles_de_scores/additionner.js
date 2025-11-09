function additionner( NBR_JOUEURS ) {
    let somme;
    let nbr_vides;
    let SCORES;
    for (let i = 0; i < NBR_JOUEURS; i++) {
        somme = 0;
        nbr_vides = 0;
        SCORES = document.getElementsByClassName('score' + String(i));
        for (const SCORE of SCORES) {
            if (SCORE.value === '') nbr_vides++;
            else somme += parseInt(SCORE.value);
        }
        const td_somme = document.getElementById('somme' + String(i));
        if (nbr_vides != SCORES.length) td_somme.textContent = String(somme);
        else td_somme.textContent = '';
    }
}