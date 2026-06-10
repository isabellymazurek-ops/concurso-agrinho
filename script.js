// --- 1. WIDGET DE TEMPO REAL (Hora, Data e Estações) ---
function updateRealTimeData() {
    const now = new Date();

    // Atualizar data e hora
    document.getElementById('current-date').innerText = now.toLocaleDateString('pt-BR');
    document.getElementById('current-time').innerText = now.toLocaleTimeString('pt-BR');

    // Simulação dinâmica de clima baseada no horário do Paraná
    const hour = now.getHours();
    let temp = (hour > 6 && hour < 18) ? "26°C" : "18°C";
    let humidity = (hour > 12) ? "55%" : "78%";

    document.getElementById('weather-temp').innerText = temp;
    document.getElementById('weather-humidity').innerText = humidity;
}
setInterval(updateRealTimeData, 1000);
updateRealTimeData();

// --- 2. JOGO / QUIZ INTERATIVO ---
const quizData = [
    {
        q: "Qual o tema central do Agrinho 2026?",
        options: ["Agro Tecnológico apenas", "Agro forte, futuro sustentável", "Produção sem limites"],
        answer: 1
    },
    {
        q: "Qual tecnologia reduz o desperdício de água monitorando o solo?",
        options: ["Sensores IoT", "Tratores comuns", "Arados manuais"],
        answer: 0
    }
];

let currentQuizIndex = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuizIndex];
    document.getElementById('quiz-question').innerText = currentQuiz.q;
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';

    currentQuiz.options.forEach((opt, index) => {
        const button = document.createElement('button');
        button.innerText = opt;
        button.classList.add('quiz-option');
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if(selectedIndex === quizData[currentQuizIndex].answer) {
        alert("Correto! O equilíbrio é o caminho correto para o futuro.");
    } else {
        alert("Errado! Lembre-se do equilíbrio ecológico.");
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
    document.getElementById('next-btn').style.display = 'none';
    loadQuiz();
}
loadQuiz();

// --- 3. CHATBOT AgroIA (Mecanismo de Respostas por Contexto) ---
const curiosidades = {
    sustentabilidade: "Curiosidade: O sistema ILPF (Integração Lavoura-Pecuária-Floresta) permite produzir grãos, carne e madeira na mesma área, neutralizando o metano do gado!",
    nutricao: "Curiosidade Nutricional: Legumes cultivados via agricultura de precisão retêm mais micronutrientes devido ao controle exato da fertilização orgânica.",
    esporte: "Curiosidade: O Agro sustentável preserva trilhas naturais perfeitas para o Eco-esporte, como o Mountain Bike e Corridas de Aventura no Paraná!",
    jogos: "Dica de Jogo: Que tal testar simuladores de fazenda sustentável onde seu objetivo é lucrar plantando sem desmatar?",
    desenhos: "Animação: Os novos desenhos educativos usam inteligência artificial para mostrar heróis da terra protegendo polinizadores como as abelhas!"
};

function askAI() {
    const inputField = document.getElementById('chat-input');
    const text = inputField.value.toLowerCase();
    if(!text.trim()) return;

    const output = document.getElementById('chat-output');

    // Adiciona pergunta do usuário
    output.innerHTML += `<p class="user-msg">${inputField.value}</p>`;

    let reply = "Interessante! Posso te contar curiosidades específicas se você digitar palavras como: 'sustentabilidade', 'nutrição', 'esporte', 'jogos' ou 'desenhos'.";

    // Busca palavras-chave
    if(text.includes("sustentabilidade") || text.includes("natureza")) reply = curiosidades.sustentabilidade;
    else if(text.includes("nutrição") || text.includes("alimento")) reply = curiosidades.nutricao;
    else if(text.includes("esporte") || text.includes("saude")) reply = curiosidades.esporte;
    else if(text.includes("jogo") || text.includes("quiz")) reply = curiosidades.jogos;
    else if(text.includes("desenho") || text.includes("animação")) reply = curiosidades.desenhos;

    // Resposta do bot simulada com delay para parecer real
    setTimeout(() => {
        output.innerHTML += `<p class="bot-msg">${reply}</p>`;
        output.scrollTop = output.scrollHeight; // Scroll automático para baixo
    }, 500);

    inputField.value = '';
}
