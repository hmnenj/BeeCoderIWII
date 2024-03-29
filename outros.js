const imgs = document.querySelector(".container");
const img = document.querySelectorAll(".container img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 460 }px)`;
}

setInterval(carrossel, 2500);

function corrigirExercicios() {
    const respostasCorretas = {
        q1: 'c',
        q2: 'a',
        q3: 'b',
        q4: 'a'
    };

    const respostasUsuario = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
    };

    let pontuacao = 0;
    let respostasCertasUsuario = '';

    for (const pergunta in respostasCorretas) {
        if (respostasUsuario[pergunta] && respostasCorretas[pergunta] === respostasUsuario[pergunta].value) {
            pontuacao++;
            respostasCertasUsuario += `Questão ${pergunta}: ${respostasUsuario[pergunta].value.toUpperCase()} <br>`;
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} questões.<br>Respostas corretas selecionadas:<br>${respostasCertasUsuario} <br>`;
}

