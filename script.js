let currentStep = 1;
const totalSteps = 10;

function changeStep(direction) {
    // Se estiver tentando avançar (direction = 1), validar se respondeu
    if (direction === 1) {
        if (!validateStep(currentStep)) {
            alert("Por favor, selecione uma opção antes de continuar.");
            return;
        }
    }

    // Calcula o novo passo
    const nextStep = currentStep + direction;

    // Se passou do último passo, mostra o resultado
    if (nextStep > totalSteps) {
        calcularResultado();
        return;
    }

    // Atualiza visualização
    document.querySelector(`.question-step[data-index="${currentStep}"]`).classList.remove('active');
    document.querySelector(`.question-step[data-index="${nextStep}"]`).classList.add('active');
    
    currentStep = nextStep;
    updateInterface();
}

function validateStep(stepIndex) {
    const radios = document.getElementsByName('q' + stepIndex);
    for (let radio of radios) {
        if (radio.checked) return true;
    }
    return false;
}

function updateInterface() {
    // Atualizar texto "Pergunta X de 10"
    document.getElementById('current-q-num').innerText = currentStep;

    // Atualizar barra de progresso
    const progressPercent = (currentStep / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';

    // Controle dos botões
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    // Botão Anterior
    if (currentStep === 1) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }

    // Botão Próximo (Muda texto no final)
    if (currentStep === totalSteps) {
        btnNext.innerText = "Ver Resultado";
    } else {
        btnNext.innerText = "Próximo";
    }
}

function calcularResultado() {
    let score = 0;

    // Soma pontos de todas as perguntas
    for (let i = 1; i <= totalSteps; i++) {
        const radios = document.getElementsByName('q' + i);
        for (const radio of radios) {
            if (radio.checked) {
                score += parseInt(radio.value);
                break;
            }
        }
    }

    exibirDiagnostico(score);
}

function exibirDiagnostico(pontos) {
    // Esconde o formulário e cabeçalho para focar no resultado
    document.getElementById('quizForm').classList.add('hidden');
    document.querySelector('.progress-container').classList.add('hidden');

    const resultBox = document.getElementById('resultado');
    const resultTitle = document.getElementById('resultTitle');
    const scoreValue = document.getElementById('scoreValue');
    const resultText = document.getElementById('resultText');
    const recommendation = document.getElementById('recommendation');

    resultBox.classList.remove('hidden');
    scoreValue.innerText = pontos;

    if (pontos >= 26) {
        // Cenário Verde
        resultBox.classList.add('green-result');
        resultTitle.innerText = "Gestão Eficiente (Conformidade Alta)";
        resultText.innerText = "A Secretaria demonstra um alto nível de maturidade em relação à NR-1. Os riscos são gerenciados, há documentação e cultura de prevenção.";
        recommendation.innerText = "Recomendação: Manter o PGR atualizado e focar na melhoria contínua.";
    } else if (pontos >= 18) {
        // Cenário Amarelo
        resultBox.classList.add('yellow-result');
        resultTitle.innerText = "Gestão Reativa (Alerta Ligado)";
        resultText.innerText = "A Secretaria opera no 'piloto automático'. Provavelmente cumpre o mínimo burocrático, mas a segurança não é um valor prático. Existe risco latente.";
        recommendation.innerText = "Recomendação: Revisar o Inventário de Riscos imediatamente. Transformar documentos de gaveta em ações práticas.";
    } else {
        // Cenário Vermelho
        resultBox.classList.add('red-result');
        resultTitle.innerText = "Situação Crítica (Risco Iminente)";
        resultText.innerText = "Há um cenário de negligência administrativa perante as normas. A Secretaria está vulnerável a acidentes e responsabilização civil/criminal.";
        recommendation.innerText = "Recomendação: AÇÃO URGENTE. Contratar consultoria ou acionar o SESMT para realizar um levantamento de perigos do zero.";
    }
}
