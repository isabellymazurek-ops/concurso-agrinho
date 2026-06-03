// DOCUMENTO DE INTERATIVIDADE E LÓGICA - PROJETO AGRINHO

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LÓGICA DO JOGO (QUIZ DO AGRO)
    // ==========================================
    const btnOpcao1 = document.getElementById('btn-opcao1');
    const btnOpcao2 = document.getElementById('btn-opcao2');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    if (btnOpcao1 && btnOpcao2) {
        btnOpcao1.addEventListener('click', () => verificarResposta(true));
        btnOpcao2.addEventListener('click', () => verificarResposta(false));
    }

    function verificarResposta(respostaCorreta) {
        if (respostaCorreta) {
            resultadoQuiz.style.color = "#2e7d32"; // Verde sucesso
            resultadoQuiz.innerHTML = "🎉 <strong>Correto!</strong> Os Drones e satélites revolucionaram o mapeamento de pragas e a saúde do solo em tempo real!";
        } else {
            resultadoQuiz.style.color = "#d32f2f"; // Vermelho erro
            resultadoQuiz.innerHTML = "❌ <strong>Tente novamente!</strong> Os tratores antigos não conseguem sobrevoar a área para mapeamento preciso.";
        }
    }

    // ==========================================
    // 2. LÓGICA DA INTELIGÊNCIA ARTIFICIAL (CHATBOT)
    // ==========================================
    // Banco de dados de conhecimento otimizado com os temas do concurso
    const bancoCuriosidades = {
        inovacao: "Sabia que hoje existem tratores autônomos guiados por GPS e IA que trabalham sozinhos, calculando a quantidade exata de sementes sem desperdício?",
        esporte: "Atletas de alta performance utilizam alimentos rastreados por QR Code vindos do agro sustentável, garantindo energia de alta qualidade e livre de resíduos nocivos.",
        nutricao: "A cor do alimento diz muito! Alimentos roxos e vermelhos do agro (como açaí, amora e tomate) combatem o envelhecimento celular e melhoram o foco nos estudos.",
        desenho: "Os primeiros desenhos e gibis educativos no campo ajudavam crianças e famílias inteiras a entender os ciclos da chuva e a importância de proteger as nascentes.",
        animacoes: "Grandes estúdios de cinema utilizam simuladores de física realistas baseados em biomas e plantações de verdade para renderizar florestas perfeitas em animações 3D.",
        natureza: "Preservar vale a pena! Uma única árvore de grande porte na fazenda pode bombear até 400 litros de água por dia para a atmosfera através da evapotranspiração.",
        jogos: "Os jogos de fazenda virtuais não são só diversão: cientistas reais utilizam simuladores parecidos para testar cenários de mudanças climáticas antes do plantio real."
    };

    const btnEnviar = document.getElementById('btn-enviar');
    const userInput = document.getElementById('userInput');
    const chatContent = document.getElementById('chatContent');

    if (btnEnviar && userInput) {
        btnEnviar.addEventListener('click', enviarMensagem);
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                enviarMensagem();
            }
        });
    }

    function enviarMensagem() {
        const textoUsuario = userInput.value.trim().toLowerCase();

        if (textoUsuario === "") return;

        // 1. Renderiza a mensagem digitada pelo usuário na tela
        chatContent.innerHTML += `<div class="msg user">${userInput.value}</div>`;
        
        // Mensagem padrão caso nenhuma palavra-chave seja encontrada
        let respostaBot = "Hum, não encontrei essa palavra no meu sistema. Tente digitar termos como: <strong>Inovação, Esporte, Nutrição, Desenho, Animação, Natureza ou Jogos</strong>!";
        
        // 2. Varre o banco de dados procurando correspondências (trata também acentuações básicas)
        for (let chave in bancoCuriosidades) {
            let chaveTratada = chave.replace('cao', 'ção').replace('acoes', 'ações');
            if (textoUsuario.includes(chave) || textoUsuario.includes(chaveTratada)) {
                respostaBot = bancoCuriosidades[chave];
                break;
            }
        }

        // 3. Simula o tempo de resposta da "IA" com um pequeno delay (500ms)
        setTimeout(() => {
            chatContent.innerHTML += `<div class="msg bot">🤖 <strong>IA Agrinho:</strong> ${respostaBot}</div>`;
            chatContent.scrollTop = chatContent.scrollHeight; // Rola a tela automaticamente para baixo
        }, 500);

        // Limpa o campo de digitação
        userInput.value = "";
    }
});
