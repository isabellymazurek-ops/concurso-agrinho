// AGRO_ENGINE v2.0 - SCRIPTS DO CONCURSO AGRINHO

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. SISTEMA COMPLETO DE QUIZZIZ (MÚLTIPLAS PERGUNTAS)
    // ==========================================
    const perguntas = [
        {
            pergunta: "Qual tecnologia usa robôs voadores para monitorar a lavoura sem amassar as plantas?",
            opcoes: ["Tratores com esteira de ferro", "Drones de Alta Precisão", "Sensores subterrâneos"],
            correta: 1,
            feedback: "⚡ Excelente! Os Drones escaneiam e criam mapas de calor indicando a saúde exata da lavoura."
        },
        {
            pergunta: "Para economizar até 40% de água, o agro sustentável monitora o solo com:",
            opcoes: ["Placas de captação de neblina", "Previsão do tempo de rádio", "Sensores de umidade IoT conectados"],
            correta: 2,
            feedback: "⚡ Alvo atingido! Sensores de Internet das Coisas (IoT) calculam milimetricamente se o solo precisa de água."
        },
        {
            pergunta: "Qual a melhor estratégia para proteger os rios e nascentes em uma fazenda?",
            opcoes: ["Cercar e reflorestar com Mata Ciliar nativa", "Canalizar o rio para debaixo da terra", "Cobrir o leito do rio com lonas plásticas"],
            correta: 0,
            feedback: "⚡ Perfeito! As raízes das matas nativas filtram a água e seguram a terra, evitando o assoreamento."
        }
    ];

    let faseAtual = 0;
    let acertos = 0;

    const elemPergunta = document.getElementById('pergunta');
    const elemProgresso = document.getElementById('quiz-progress');
    const elemResultado = document.getElementById('resultado-quiz');

    function renderizarQuiz() {
        if (faseAtual < perguntas.length) {
            // Atualiza barra de progresso gráfica
            const porcentagem = (faseAtual / perguntas.length) * 100;
            elemProgresso.style.width = `${porcentagem}%`;
            elemResultado.innerHTML = "";

            // Atualiza texto da pergunta
            elemPergunta.innerHTML = `[STAGE 0${faseAtual + 1}] &raquo; ${perguntas[faseAtual].pergunta}`;
            
            // Renderiza opções dinamicamente nos botões
            perguntas[faseAtual].opcoes.forEach((textoOpcao, index) => {
                const btn = document.getElementById(`opt-${index}`);
                if (btn) {
                    btn.innerText = textoOpcao;
                    btn.onclick = () => checarResposta(index);
                }
            });
        } else {
            // Fim do Jogo / Vitória
            elemProgresso.style.width = "100%";
            document.getElementById('quiz-area').style.display = 'none';
            elemResultado.style.color = "#00ff66";
            elemResultado.innerHTML = `🏆 <strong>SYSTEM OVERRIDE: PARABÉNS!</strong><br>Você acertou ${acertos} de ${perguntas.length} testes de campo. Seu perfil está sincronizado com a sustentabilidade do futuro!`;
        }
    }

    function checarResposta(indiceEscolhido) {
        if (indiceEscolhido === perguntas[faseAtual].correta) {
            acertos++;
            elemResultado.style.color = "#00ff66";
            elemResultado.innerHTML = perguntas[faseAtual].feedback;
            faseAtual++;
            setTimeout(renderizarQuiz, 2500); // Avança após ler a resposta
        } else {
            elemResultado.style.color = "#ff0055";
            elemResultado.innerHTML = "❌ <strong>ACESSO NEGADO:</strong> Alternativa incorreta. Recalculando dados, tente outra vez!";
        }
    }

    // Inicializa o jogo na primeira execução
    renderizarQuiz();


    // ==========================================
    // 2. CHATBOT NEURAL IA AGRINHO
    // ==========================================
    const bancoDadosIA = {
        inovacao: "📡 <strong>LOG_CURIOSIDADE:</strong> Sensores inteligentes hoje escutam o som de insetos nas plantas. A IA diferencia o barulho de pragas perigosas e avisa o fazendeiro onde tratar!",
        esporte: "🏃 <strong>LOG_BIOENERGIA:</strong> Nutrientes orgânicos de cana-de-açúcar produzida de forma sustentável geram bio-géis de carboidrato puros usados por ciclistas olímpicos para energia imediata.",
        nutricao: "🧬 <strong>LOG_BIOQUÍMICA:</strong> Frutas com coloração escura (antocianinas) colhidas de forma sustentável reduzem o cansaço do cérebro em até 20% se consumidas frescas de manhã.",
        desenho: "✏️ <strong>LOG_ANIMAÇÃO:</strong> Os softwares que desenham animações de grandes jogos usam simulações botânicas reais criadas por engenheiros agrônomos para gerar plantas virtuais realistas.",
        natureza: "🌳 <strong>LOG_CLIMA:</strong> Um hectare de floresta preservada dentro de plantações agrícolas pode sugar até 300 toneladas de gás carbônico por ano, purificando o oxigênio regional."
    };

    const btnEnviar = document.getElementById('btn-enviar');
    const userInput = document.getElementById('userInput');
    const chatContent = document.getElementById('chatContent');

    if (btnEnviar && userInput) {
        btnEnviar.addEventListener('click', processarIA);
        userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') processarIA(); });
    }

    function processarIA() {
        const prompt = userInput.value.trim().toLowerCase();
        if (prompt === "") return;

        // Imprime balão do usuário
        chatContent.innerHTML += `<div class="msg user">${userInput.value}</div>`;
        chatContent.scrollTop = chatContent.scrollHeight;

        let resposta = "🤖 [ERRO 404]: Parâmetro não localizado na rede. Tente os comandos: <strong>Inovação, Esporte, Nutrição, Desenho ou Natureza</strong>.";

        // Escaneamento de palavras chaves
        for (let key in bancoDadosIA) {
            let keyTratada = key.replace('cao', 'ção');
            if (prompt.includes(key) || prompt.includes(keyTratada)) {
                resposta = bancoDadosIA[key];
                break;
            }
        }

        // Prompt de digitação
        const loader = document.createElement('div');
        loader.className = 'msg bot';
        loader.innerHTML = '⚙️ <em>Buscando logs no servidor central...</em>';
        
        setTimeout(() => {
            chatContent.appendChild(loader);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 200);

        // Resposta final da IA
        setTimeout(() => {
            loader.remove();
            chatContent.innerHTML += `<div class="msg bot">${resposta}</div>`;
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1200);

        userInput.value = "";
    }
});
