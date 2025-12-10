function calcularResultado() {
    const totalQuestions = 10;
    let score = 0;
    let answered = 0;

    // Loop para verificar cada pergunta
    for (let i = 1; i <= totalQuestions; i++) {
        const radios = document.getElementsByName('q' + i);
        let questionAnswered = false;

        for (const radio of radios) {
            if (radio.checked) {
                score += parseInt(radio.value);
                questionAnswered = true;
                break;
            }
        }

        if (questionAnswered) {
            answered++;
        }
    }

    // Validação: Todas as perguntas foram respondidas?
    if (answered < totalQuestions) {
        alert("Por favor, responda a todas as 10 perguntas antes de gerar o diagnóstico.");
        return;
    }

    exibirDiagnostico(score);
}

function exibirDiagnostico(pontos) {
    const resultBox = document.getElementById('resultado');
    const resultTitle = document.getElementById('resultTitle');
    const scoreValue = document.getElementById('scoreValue');
    const resultText = document.getElementById('resultText');
    const recommendation = document.getElementById('recommendation');

    // Resetar classes de cor
    resultBox.classList.remove('hidden', 'green-result', 'yellow-result', 'red-result');

    scoreValue.innerText = pontos;

    if (pontos >= 26) {
        // Cenário Verde
        resultBox.classList.add('green-result');
        resultTitle.innerText = "Gestão Eficiente (Conformidade Alta)";
        resultText.innerText = "A Secretaria demonstra um alto nível de maturidade em relação à NR-1. Os riscos são gerenciados, há documentação e cultura de prevenção. O risco jurídico e de acidentes é baixo.";
        recommendation.innerText = "Recomendação: Manter o PGR atualizado e focar na melhoria contínua (ex: saúde mental e ginástica laboral).";
    } else if (pontos >= 18) {
        // Cenário Amarelo
        resultBox.classList.add('yellow-result');
        resultTitle.innerText = "Gestão Reativa (Alerta Ligado)";
        resultText.innerText = "A Secretaria opera no 'piloto automático'. Provavelmente cumpre o mínimo burocrático, mas a segurança não é um valor prático. Existe risco latente de passivos trabalhistas e multas.";
        recommendation.innerText = "Recomendação: Revisar o Inventário de Riscos imediatamente. Transformar documentos de gaveta em ações práticas.";
    } else {
        // Cenário Vermelho
        resultBox.classList.add('red-result');
        resultTitle.innerText = "Situação Crítica (Risco Iminente)";
        resultText.innerText = "Há um cenário de negligência administrativa perante as normas. A Secretaria está vulnerável a acidentes, adoecimento da equipe e responsabilização civil/criminal dos gestores.";
        recommendation.innerText = "Recomendação: AÇÃO URGENTE. Contratar consultoria ou acionar o SESMT para realizar um levantamento de perigos do zero.";
    }

    // Rolar a página até o resultado
    resultBox.scrollIntoView({ behavior: 'smooth' });
}
