// DOCUMENTO DE INTERATIVIDADE INTERATIVA - PROJETO AGRINHO 🚀

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. JOGO DO QUIZ AVANÇADO (SISTEMA DE PONTUAÇÃO E FASES)
    // ==========================================
    const perguntas = [
        {
            pergunta: "Qual tecnologia usa robôs voadores para monitorar plantações?",
            opcoes: ["Drones de Precisão", "Tratores Antigos"],
            correta: 0,
            feedback: "🎉 Sensacional! Os Drones economizam tempo e insumos encontrando pragas lá do alto!"
        },
        {
            pergunta: "Qual dessas ações protege as nascentes de água na fazenda?",
            opcoes: ["Cercar e plantar árvores nativas (Mata Ciliar)", "Desviar o rio para a plantação"],
            correta: 0,
            feedback: "🌊 Perfeito! A mata ciliar protege a água como os cílios protegem nossos olhos!"
        }
    ];

    let faseAtual = 0;
    const perguntaTexto = document.getElementById('pergunta');
    const btnOpcao1 = document.getElementById('btn-opcao1');
    const btnOpcao2 = document.getElementById('btn-opcao2');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    function carregarFase() {
        if (faseAtual < perguntas.length) {
            perguntaTexto.innerHTML = `<strong>Pergunta ${faseAtual + 1}:</strong> ${perguntas[faseAtual].pergunta}`;
            btnOpcao1.innerText = perguntas[faseAtual].opcoes[0];
            btnOpcao2.innerText = perguntas[faseAtual].opcoes[1];
        } else {
            // Fim do Jogo
            document.getElementById('quiz-area').style.display = 'none';
            resultadoQuiz.style.color = "#0284c7";
            resultadoQuiz.innerHTML = "🏆 <strong>Parabéns!</strong> Você completou a Trilha Agro Conectada e provou ser um Protetor da Natureza!";
        }
    }

    if (btnOpcao1 && btnOpcao2) {
        btnOpcao1.addEventListener('click', () => verificarResposta(0));
        btnOpcao2.addEventListener('click', () => verificarResposta(1));
        carregarFase(); // Inicializa a primeira pergunta
    }

    function verificarResposta(opcaoEscolhida) {
        if (opcaoEscolhida === perguntas[faseAtual].correta) {
            resultadoQuiz.style.color = "#16a34a";
            resultadoQuiz.innerHTML = perguntas[faseAtual].feedback;
            faseAtual++;
            // Espera 3 segundos para o jogador ler o feedback e passa para o próximo desafio
            setTimeout(() => {
                resultadoQuiz.innerText = "";
                carregarFase();
            }, 3000);
        } else {
            resultadoQuiz.style.color = "#dc2626";
            resultadoQuiz.innerHTML = "💥 <strong>Ops! Essa não!</strong> Pense em como a sustentabilidade e a tecnologia se unem.";
        }
    }


    // ==========================================
    // 2. CHATBOT INTELIGENTE COM ANIMAÇÃO DE DIGITAÇÃO
    // ==========================================
    const bancoCuriosidades = {
        inovacao: "💡 <strong>Inovação Incrível:</strong> Hoje já existem sensores enterrados no solo que enviam um 'WhatsApp' para o sistema de irrigação avisando se a planta está com sede ou não!",
        esporte: "🏅 <strong>Energia de Atleta:</strong> Alimentos ricos em carboidratos complexos produzidos no campo, como a batata-doce e a aveia, são a maior fonte de combustível limpo para maratonistas e jogadores de futebol!",
        nutricao: "🍏 <strong>Super Nutrição:</strong> Frutas colhidas na época certa da safra têm até 3 vezes mais vitaminas do que as colhidas fora de época. O Agro consciente respeita esse tempo!",
        desenho: "🎨 <strong>Arte no Campo:</strong> Antigamente, gibis animados eram distribuídos nas fazendas para ensinar de forma divertida como combater a erosão do solo através de jogos!",
        animacoes: "🎬 <strong>Mágica das Telas:</strong> Para criar as florestas do filme 'O Rei Leão' em 3D, os animadores usaram algoritmos reais de botânica que imitam o crescimento real das árvores do campo!",
        natureza: "🌳 <strong>Poder Oculto:</strong> A floresta nativa preservada dentro de uma propriedade rural ajuda a controlar a temperatura de toda a fazenda, diminuindo as ondas de calor extremo.",
        jogos: "🎮 <strong>Gamers no Agro:</strong> Cientistas usam simuladores estilo Minecraft e FarmVille para testar se uma nova semente vai resistir a grandes secas antes mesmo de fabricá-la."
    };

    const btnEnviar = document.getElementById('btn-enviar');
    const userInput = document.getElementById('userInput');
    const chatContent = document.getElementById('chatContent');

    if (btnEnviar && userInput) {
        btnEnviar.addEventListener('click', enviarMensagem);
        userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') enviarMensagem(); });
    }

    function enviarMensagem() {
        const textoUsuario = userInput.value.trim().toLowerCase();
        if (textoUsuario === "") return;

        // Adiciona a fala do usuário
        chatContent.innerHTML += `<div class="msg user">${userInput.value}</div>`;
        chatContent.scrollTop = chatContent.scrollHeight;

        let respostaBot = "🤖 Hmmm, não captei essa palavra no meu chip do Agrinho. Tente enviar termos como: <strong>Inovação, Esporte, Nutrição, Desenho, Animação, Natureza ou Jogos</strong>!";

        // Varredura inteligente de palavras-chave
        for (let chave in bancoCuriosidades) {
            let chaveTratada1 = chave.replace('cao', 'ção').replace('acoes', 'ações');
            let chaveTratada2 = chave.replace('cao', 'cao'); // segurança de busca
            if (textoUsuario.includes(chave) || textoUsuario.includes(chaveTratada1) || textoUsuario.includes(chaveTratada2)) {
                respostaBot = bancoCuriosidades[chave];
                break;
            }
        }

        // Criando efeito de "IA pensando/digitando..."
        const indicadorDigitando = document.createElement('div');
        indicadorDigitando.className = 'msg bot';
        indicadorDigitando.innerHTML = '⚡ <em>Analisando dados do campo...</em>';
        setTimeout(() => {
            chatContent.appendChild(indicadorDigitando);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 300);

        // Renderiza a resposta definitiva substituindo o indicador
        setTimeout(() => {
            indicadorDigitando.remove();
            chatContent.innerHTML += `<div class="msg bot">🤖 ${respostaBot}</div>`;
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1200);

        userInput.value = "";
    }
});
