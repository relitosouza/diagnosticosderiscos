// --- BANCO DE PERGUNTAS ---

const perguntasGestor = [
    {
        titulo: "1. Documentação Legal (PGR/GRO)",
        pergunta: "A Secretaria possui o Programa de Gerenciamento de Riscos (PGR) atualizado e assinado?",
        opcoes: [
            { texto: "(A) Sim, está vigente, assinado e disponível digitalmente.", valor: 3 },
            { texto: "(B) Temos um documento antigo (PPRA) ou está vencido.", valor: 2 },
            { texto: "(C) Não possuímos ou desconheço a existência.", valor: 1 }
        ]
    },
    {
        titulo: "2. Investigação de Acidentes",
        pergunta: "Se ocorrer um acidente de trabalho (mesmo leve), existe um fluxo formal de investigação?",
        opcoes: [
            { texto: "(A) Sim, existe formulário padrão e análise de causa raiz.", valor: 3 },
            { texto: "(B) Fazemos apenas o CAT e reportamos ao RH, sem investigar a causa.", valor: 2 },
            { texto: "(C) Não há processo formal, tratamos caso a caso.", valor: 1 }
        ]
    },
    {
        titulo: "3. Gestão de Contratos (Terceiros)",
        pergunta: "Os contratos de limpeza e vigilância exigem cumprimento da NR-01 e entrega de EPIs?",
        opcoes: [
            { texto: "(A) Sim, e fiscalizamos se a empresa cumpre.", valor: 3 },
            { texto: "(B) Está no contrato, mas não fiscalizamos na prática.", valor: 2 },
            { texto: "(C) Não sei informar ou não é exigido.", valor: 1 }
        ]
    },
    {
        titulo: "4. Manutenção de Ar-Condicionado (PMOC)",
        pergunta: "Existe um Plano de Manutenção (PMOC) ativo para os sistemas de climatização?",
        opcoes: [
            { texto: "(A) Sim, com responsável técnico e relatórios mensais.", valor: 3 },
            { texto: "(B) A manutenção é feita apenas quando quebra (corretiva).", valor: 2 },
            { texto: "(C) Não há controle sobre a qualidade do ar.", valor: 1 }
        ]
    },
    {
        titulo: "5. Representação (CIPA)",
        pergunta: "A Secretaria possui CIPA constituída ou Designado (se for órgão menor)?",
        opcoes: [
            { texto: "(A) Sim, CIPA ativa com reuniões regulares documentadas.", valor: 3 },
            { texto: "(B) Existe apenas no papel para cumprir tabela.", valor: 2 },
            { texto: "(C) Não possui representação.", valor: 1 }
        ]
    },
    {
        titulo: "6. Infraestrutura Elétrica",
        pergunta: "Existe laudo de instalações elétricas ou manutenção preventiva recente?",
        opcoes: [
            { texto: "(A) Sim, manutenção preventiva é realizada periodicamente.", valor: 3 },
            { texto: "(B) Apenas manutenção corretiva (quando algo queima).", valor: 2 },
            { texto: "(C) Rede antiga, com quedas de energia e sobrecarga visível.", valor: 1 }
        ]
    },
    {
        titulo: "7. Plano de Emergência",
        pergunta: "A edificação possui AVCB (Bombeiros) e plano de abandono treinado?",
        opcoes: [
            { texto: "(A) AVCB em dia e simulados de evacuação realizados.", valor: 3 },
            { texto: "(B) Temos extintores, mas não temos plano de evacuação treinado.", valor: 2 },
            { texto: "(C) AVCB vencido ou inexistente.", valor: 1 }
        ]
    },
    {
        titulo: "8. Treinamento da Equipe",
        pergunta: "Há orçamento ou cronograma para treinamentos de segurança (ex: ergonomia)?",
        opcoes: [
            { texto: "(A) Sim, faz parte do plano anual de capacitação.", valor: 3 },
            { texto: "(B) Ocorre esporadicamente, sem planejamento.", valor: 2 },
            { texto: "(C) Não há previsão de treinamentos desse tipo.", valor: 1 }
        ]
    },
    {
        titulo: "9. Ergonomia (AEP)",
        pergunta: "Foi realizada a Análise Ergonômica Preliminar (AEP) dos postos de trabalho?",
        opcoes: [
            { texto: "(A) Sim, e as melhorias sugeridas foram implementadas.", valor: 3 },
            { texto: "(B) Foi feita, mas engavetada por falta de verba.", valor: 2 },
            { texto: "(C) Nunca foi feita.", valor: 1 }
        ]
    },
    {
        titulo: "10. Saúde Psicossocial",
        pergunta: "Como a gestão monitora o nível de estresse e afastamentos da equipe?",
        opcoes: [
            { texto: "(A) Monitoramos indicadores e temos programas de apoio/escuta.", valor: 3 },
            { texto: "(B) Percebemos o problema, mas não temos ferramentas para agir.", valor: 2 },
            { texto: "(C) Não é monitorado, foco total apenas em metas.", valor: 1 }
        ]
    }
];

const perguntasServidor = [
    {
        titulo: "1. Acesso à Informação",
        pergunta: "Você já viu ou foi apresentado aos riscos da sua função (documento PGR)?",
        opcoes: [
            { texto: "(A) Sim, me explicaram os riscos e como me prevenir.", valor: 3 },
            { texto: "(B) Sei que existe, mas nunca li.", valor: 2 },
            { texto: "(C) Nunca vi e ninguém nunca falou sobre isso.", valor: 1 }
        ]
    },
    {
        titulo: "2. Mobiliário (Cadeira e Mesa)",
        pergunta: "Sua cadeira e mesa permitem trabalhar com conforto?",
        opcoes: [
            { texto: "(A) Sim, minha cadeira ajusta bem e não sinto dores.", valor: 3 },
            { texto: "(B) A cadeira é velha ou ruim, preciso usar almofadas.", valor: 2 },
            { texto: "(C) Sinto dores frequentes nas costas/pescoço devido ao mobiliário.", valor: 1 }
        ]
    },
    {
        titulo: "3. Equipamentos (Monitor/Computador)",
        pergunta: "A altura do monitor e a posição do teclado/mouse estão adequados?",
        opcoes: [
            { texto: "(A) Sim, ou recebi suporte para regular.", valor: 3 },
            { texto: "(B) Improviso com livros/caixas para ajustar a altura.", valor: 2 },
            { texto: "(C) Trabalho torto/curvado o dia todo.", valor: 1 }
        ]
    },
    {
        titulo: "4. Treinamento Recebido",
        pergunta: "Ao entrar ou mudar de função, você recebeu treinamento de segurança?",
        opcoes: [
            { texto: "(A) Sim, treinamento formal ou orientações claras.", valor: 3 },
            { texto: "(B) Apenas dicas informais de colegas.", valor: 2 },
            { texto: "(C) Nenhuma orientação.", valor: 1 }
        ]
    },
    {
        titulo: "5. Instalações Elétricas (No seu pé)",
        pergunta: "Existem fios soltos ou 'gambiarras' perto da sua mesa?",
        opcoes: [
            { texto: "(A) Não, tudo organizado em canaletas.", valor: 3 },
            { texto: "(B) Fios bagunçados atrás da mesa, mas não tropeço.", valor: 2 },
            { texto: "(C) Sim, uso benjamins e há fios onde passo andando.", valor: 1 }
        ]
    },
    {
        titulo: "6. Emergência (Incêndio)",
        pergunta: "Se o alarme tocar agora, você sabe exatamente para onde correr?",
        opcoes: [
            { texto: "(A) Sim, conheço a rota de fuga e o ponto de encontro.", valor: 3 },
            { texto: "(B) Tenho uma ideia, mas nunca treinamos.", valor: 2 },
            { texto: "(C) Não faço ideia de onde é a saída de emergência.", valor: 1 }
        ]
    },
    {
        titulo: "7. Conforto Ambiental",
        pergunta: "O ar-condicionado e a iluminação te incomodam?",
        opcoes: [
            { texto: "(A) Não, temperatura e luz são agradáveis.", valor: 3 },
            { texto: "(B) O ar é muito sujo/cheira mal ou a luz cansa a vista.", valor: 2 },
            { texto: "(C) Passo mal frequentemente (rinite, dor de cabeça) no ambiente.", valor: 1 }
        ]
    },
    {
        titulo: "8. Direito de Recusa",
        pergunta: "Se você ver um risco grave (ex: teto caindo), sente liberdade para parar e relatar?",
        opcoes: [
            { texto: "(A) Sim, a gestão apoia a segurança.", valor: 3 },
            { texto: "(B) Relato, mas com medo de ser considerado 'chato'.", valor: 2 },
            { texto: "(C) Não, tenho medo de represálias se reclamar.", valor: 1 }
        ]
    },
    {
        titulo: "9. Higiene e Copa",
        pergunta: "As áreas comuns (banheiros e copa) estão em condições dignas?",
        opcoes: [
            { texto: "(A) Sim, limpos e abastecidos.", valor: 3 },
            { texto: "(B) Limpeza deixa a desejar às vezes.", valor: 2 },
            { texto: "(C) Condições precárias de higiene.", valor: 1 }
        ]
    },
    {
        titulo: "10. Clima e Estresse",
        pergunta: "Como você classifica a pressão psicológica no setor?",
        opcoes: [
            { texto: "(A) Desafiadora, mas respeitosa.", valor: 3 },
            { texto: "(B) Alta pressão, saio exausto mentalmente com frequência.", valor: 2 },
            { texto: "(C) Ambiente hostil, com gritos ou assédio.", valor: 1 }
        ]
    }
];

// --- VARIÁVEIS DE CONTROLE ---
let currentStep = 0; // Começa no 0 (array index)
let totalSteps = 10;
let perguntasAtuais = [];
let perfilSelecionado = "";

// --- FUNÇÕES ---

function iniciarQuiz(perfil) {
    perfilSelecionado = perfil;
    
    // Carrega o conjunto de perguntas correto
    if (perfil === 'gestor') {
        perguntasAtuais = perguntasGestor;
        document.getElementById('quiz-title').innerText = "Diagnóstico: Perfil Gestão";
    } else {
        perguntasAtuais = perguntasServidor;
        document.getElementById('quiz-title').innerText = "Diagnóstico: Perfil Servidor";
    }

    // Esconde tela inicial e mostra quiz
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    renderizarPerguntas();
    updateInterface();
}

function renderizarPerguntas() {
    const container = document.getElementById('question-container');
    container.innerHTML = ''; // Limpa

    perguntasAtuais.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question-step';
        div.setAttribute('data-index', index);
        if (index !== 0) div.style.display = 'none'; // Esconde todas menos a primeira

        let html = `<h3>${q.titulo}</h3><p>${q.pergunta}</p>`;
        
        q.opcoes.forEach(opt => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${opt.valor}">
                    ${opt.texto}
                </label>
            `;
        });

        div.innerHTML = html;
        container.appendChild(div);
    });
}

function changeStep(direction) {
    // Validação ao avançar
    if (direction === 1) {
        if (!validateStep(currentStep)) {
            alert("Por favor, selecione uma opção antes de continuar.");
            return;
        }
    }

    const nextStep = currentStep + direction;

    // Se acabou
    if (nextStep >= totalSteps) {
        calcularResultado();
        return;
    }

    // Navegação Visual
    document.querySelector(`.question-step[data-index="${currentStep}"]`).style.display = 'none';
    document.querySelector(`.question-step[data-index="${nextStep}"]`).style.display = 'block';
    
    currentStep = nextStep;
    updateInterface();
}

function validateStep(index) {
    const radios = document.getElementsByName('q' + index);
    for (let radio of radios) {
        if (radio.checked) return true;
    }
    return false;
}

function updateInterface() {
    // Texto
    document.getElementById('current-q-num').innerText = currentStep + 1;

    // Barra
    const progressPercent = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';

    // Botões
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    btnPrev.disabled = (currentStep === 0);

    if (currentStep === totalSteps - 1) {
        btnNext.innerText = "Ver Resultado";
    } else {
        btnNext.innerText = "Próximo";
    }
}

function calcularResultado() {
    let score = 0;
    for (let i = 0; i < totalSteps; i++) {
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
    document.getElementById('quiz-screen').classList.add('hidden');
    const resultBox = document.getElementById('resultado');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const recommendation = document.getElementById('recommendation');
    const scoreValue = document.getElementById('scoreValue');

    resultBox.classList.remove('hidden', 'green-result', 'yellow-result', 'red-result');
    scoreValue.innerText = pontos;

    // Lógica de Resultado (Igual para ambos, mas textos adaptados)
    if (pontos >= 26) {
        resultBox.classList.add('green-result');
        resultTitle.innerText = "Cenário Controlado (Baixo Risco)";
        resultText.innerText = perfilSelecionado === 'gestor' 
            ? "Sua gestão está em conformidade com a NR-1. A documentação e os processos protegem a Secretaria juridicamente."
            : "Sua percepção indica um ambiente seguro, saudável e respeitoso para se trabalhar.";
        recommendation.innerText = "Recomendação: Manter o padrão e focar na melhoria contínua.";
    } else if (pontos >= 18) {
        resultBox.classList.add('yellow-result');
        resultTitle.innerText = "Cenário de Alerta (Risco Médio)";
        resultText.innerText = perfilSelecionado === 'gestor'
            ? "Existem falhas documentais ou procedimentais. Se houver uma fiscalização ou processo trabalhista, a Secretaria está vulnerável."
            : "Há problemas pontuais que afetam seu conforto ou segurança. Não é crítico, mas incomoda e gera riscos a longo prazo.";
        recommendation.innerText = "Recomendação: Rever os itens pontuados como 'negativos' e criar plano de ação.";
    } else {
        resultBox.classList.add('red-result');
        resultTitle.innerText = "Cenário Crítico (Alto Risco)";
        resultText.innerText = perfilSelecionado === 'gestor'
            ? "Situação grave. Há negligência administrativa perante as normas de segurança. O risco de acidentes e responsabilização civil/criminal é alto."
            : "O ambiente oferece riscos reais à sua saúde física e mental. As condições de trabalho estão inadequadas.";
        recommendation.innerText = "Recomendação: AÇÃO IMEDIATA. É necessário intervenção urgente para sanar irregularidades.";
    }
}
