const perguntas = [
    {
        texto: "Qual ano do nascimento de Monteiro Lobato?",                       
        opcoes: ["1882", "1500", "1888", "1900"],
        respostaCorreta: 0
    },
    {
        texto: "Monteiro Lobato foi escritor de qual desses desenhos infantis:",
        opcoes: ["Bob Espoja", "Turma da Mônica", "Sítio do Pica Pau Amarelo", "Tom e Jerry"],
        respostaCorreta: 2
    },
    {
        texto: "'Além da literatura infantil, Monteiro Lobato também escreveu obras destinadas ao público adulto, nas quais retratava problemas sociais, econômicos e políticos do Brasil.' Qual o nome do personagem mais conhecido?",
        opcoes: ["Jeca Galvão", "Jeca Pedro", "Jeca Lobato", "Jeca Tatu"],
        respostaCorreta: 3
    },
    {
        texto:"Quais profissões Monteiro Lobato exerceu?",
        opcoes: ["Empresário, escritor e editor", "Médico, escritor e editor", "Advogado, escritor e editor", "Professor, escritor e editor"],
        respostaCorreta: 0
    },
    {
        texto:"Lobato ficou principalmente conhecido por suas obras infantis, especialmente pela criação do Sítio do Picapau Amarelo, uma série de histórias que reúne personagens como",
        opcoes: ["Emília, Narizinho, Visconde de Sabugosa e Dona Rosa", "Emília, Narizinho, Visconde de Sabugosa e Dona Flor", "Emília, Narizinho, Visconde de Sabugosa e Dona Benta", "Emília, Narizinho, Visconde de Sabugosa e Dona Maria"],
        respostaCorreta: 2
    },
    {
        texto: "DESAFIO - Monteiro Lobato um escritor brasileiro, escritor do Sítio Do Pica Pau Amarelo, mesmo sendo escritor da literatura infantil, ele também escreveu obras para o público adulto, retratando problemas sociais, econômicos e políticos do Brasil, mesmo com as controvérsias relacionadas a parte de sua obra, ele continua sendo uma figura importante da literatura brasileira, principalmente por sua contribuição para a literatura infantil e pela criação de personagens que permanecem conhecidos até os dias atuais. Ele continua sendo uma figura importante da literatura brasileira?",
        opcoes: ["Verdadeiro", "Falso"],
        respostaCorreta: 0
    }
];

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});