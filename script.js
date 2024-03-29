function corrigirExercicios() {
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'b'
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
    resultado.innerHTML = `Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} questões.<br>Respostas corretas selecionadas:<br>${respostasCertasUsuario}`;
}
