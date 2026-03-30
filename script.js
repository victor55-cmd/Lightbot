import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuração
const API_KEY = "AIzaSyBwqfEgcKCmBcJckuI0X0JUSLoQXc5snaI"; // Lembre-se de trocar pela sua!
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Referências aos elementos do HTML
const inputPergunta = document.getElementById('pergunta');
const botaoEnviar = document.getElementById('btnEnviar');
const painelResposta = document.getElementById('chat-box');

// Função para chamar a IA
async function chamarIA() {
    const texto = inputPergunta.value;
    if (!texto) return;

    painelResposta.innerText = "IA está pensando...";

    try {
        const result = await model.generateContent(texto);
        const response = await result.response;
        painelResposta.innerText = response.text();
    } catch (error) {
        painelResposta.innerText = "Erro: " + error.message;
        console.error("Erro na API:", error);
    }
}

// Escutador de clique no botão
botaoEnviar.addEventListener('click', chamarIA);
