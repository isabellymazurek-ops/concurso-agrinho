// DOCUMENTO DE INTERATIVIDADE - PROJETO AGRINHO

document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO JOGO (QUIZ) ---
    const btnOpcao1 = document.getElementById('btn-opcao1');
    const btnOpcao2 = document.getElementById('btn-opcao2');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    if(btnOpcao1 && btnOpcao2) {
        btnOpcao1.addEventListener('click', () => verificarResposta(true));
        btnOpcao2.addEventListener('click', () => verificarResposta(false));
    }

    function verificarResposta(respostaCorreta) {
        if (respostaCorreta) {
            resultadoQuiz.style.color = "green";
            resultadoQuiz.innerText = "🎉 Correto! Os Drones revolucionaram a checagem de pragas e falhas no campo!";
        } else {
            resultadoQuiz.style.color = "red";
            resultadoQuiz.innerText = "❌ Tente novamente! Essa ferramenta não voa para mapear.";
        }
    }

    // --- LÓGICA DO CHATBOT DE IA (Banco de Dados Temático) ---
    const bancoCuriosidades = {
        inovacao: "Sabia que hoje existem tratores autônomos guiados por GPS e IA que trabalham sozinhos sem errar um único centímetro de terra?",
        esporte: "Atletas de alta performance utilizam a tecnologia do campo para rastrear a origem orgânica dos alimentos, garantindo energia limpa e livre de resíduos nocivos.",
        nutricao: "A cor do alimento diz muito! Alimentos roxos do agro (como o açaí e a amora) são cheios de antocianinas, excelentes para o cérebro, foco e a memória.",
        desenho: "Os primeiros desenhos animados focados no campo ajudavam os pioneiros da agricultura a entender as previsões do tempo no século passado de forma lúdica!",
        animacoes: "Grandes estúdios de animação utilizam simuladores de física baseados em biomas reais para recriar florestas e plantações idênticas às reais nos cinemas.",
        natureza: "Uma única árvore de grande porte na fazenda pode bombear até 400 litros de água por dia para a atmosfera através da evapotranspiração!",
        jogos: "Os jogos de fazenda virtuais ajudam cientistas reais a testar cenários de mudanças climáticas antes de plantar as sementes de verdade no solo!"
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

        // Adiciona a mensagem do usuário na tela
        chatContent.innerHTML += `<div class="msg user">${userInput.value}</div>`;
        
        // Mensagem padrão caso não encontre palavra-chave
        let respostaBot = "Hum, não entendi bem. Tente digitar termos como: 'inovação', 'esporte', 'nutrição', 'desenhos', 'natureza' ou 'jogos'!";
        
        // Varre o banco de curiosidades procurando termos equivalentes
        for (let chave in bancoCuriosidades) {
            if (textoUsuario.includes(chave) || textoUsuario.includes(chave.replace('cao', 'ção'))) {
                respostaBot = bancoCuriosidades[chave];
                break;
            }
        }

        // Simulação de resposta com delay de "processamento" da IA
        setTimeout(() => {
            chatContent.innerHTML += `<div class="msg bot">🤖 <strong>IA Agrinho:</strong> ${respostaBot}</div>`;
            chatContent.scrollTop = chatContent.scrollHeight; // Mantém o chat rolando para o final
        }, 500);

        userInput.value = "";
    }
});
