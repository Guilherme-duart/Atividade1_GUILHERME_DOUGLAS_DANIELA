const pista2 = document.getElementById('pista2');
const pista3 = document.getElementById('pista3');
const ganhou = document.getElementById('imagem');
const btnAcao = document.getElementById('btn-verifica');
let respostaInput = document.getElementById('respostaJogador');

pista2.style.display = 'none';
pista3.style.display = 'none';
ganhou.style.display = 'none';

const respostaCorreta = 'VEGETA';

btnAcao.addEventListener('click', function () {
    if ((respostaInput.value.toUpperCase() == respostaCorreta) && (respostaInput.value != '')) {
        ganhou.style.display = 'block';
    } else {
        if (respostaInput.value == '') {
            alert('É preciso digitar um nome antes de verificar');
        } else if (pista2.style.display == 'none') {
            pista2.style.display = 'block';
        } else if ((pista3.style.display == 'none')) {
            pista3.style.display = 'block';
        } else if ((pista2.style.display == 'block') && (pista3.style.display == 'block')) {
            alert('Você não consegui descobir quem é!');
            location.reload();
        }
    }
})