const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje é sua vez de fazer serviço de preto.",
        alternativas: [
            {
                texto: "Para mim, não é racismo!",
                afirmacao: "Você ainda acha que essas pequenas frases não tem nada de preconceituoso. "
            },
            {
                texto: "Racismo, com certeza!",
                afirmacao: "Você concorda que essas frases deveriam sim parar de serem ditas, só para começar."
            }
        ]
    },
    {
        enunciado: "Amanhã é dia de branco",
        alternativas: [
            {
                texto: " Sim, já ouvi ou falei, mas foi sem querer",
                afirmacao: "Sabe aquela pessoa que jura de pés juntos, que não é racista, mas vive compartilhando conteúdo e falas racistas no facebook, twitter, grupo do whatsapp, roda de conversa."
            },
            {
                texto: "Isso parece que nunca vai acabar.",
                afirmacao: "Não acredito que ainda existe pessoas que acham normal esse tipo de atitude."
            }
        ]
    },
    {
        enunciado: "Serviço de preto.",
        alternativas: [
            {
                texto: "Sim, já ouvi ou falei, mas foi sem querer",
                afirmacao: "Em outras palavras, se fazer de cego não isenta você de ser racista."
            },
            {
                texto: "Isso parece que nunca vai acabar.",
                afirmacao: "Não dá para ser ingênuo e achar que não existe o teor racista, ainda mais quando associamos a outras dessas expressões que colocam o negro como o oposto de positivo."
            }
        ]
    },
    {
        enunciado: "Hoje tudo em dia é racismo, eu ein…",
        alternativas: [
            {
                texto: "O racismo sempre existiu.",
                afirmacao: "Se você percebeu que agora nenhuma das suas “piadinhas” tem graça, a não ser quando está cercado de racistas reacionários iguais a você, significa que quem precisa se tratar urgentemente é você."
            },
            {
                texto: "Hoje em dia negros estão se posicionando.",
                afirmacao: "Numa sociedade racista, não basta não ser racista. É necessário ser antirracista."
            }
        ]
    },
    {
        enunciado: "Não sou tuas negas",
        alternativas: [
            {
                texto: "Com as negras pode tudo.",
                afirmacao: " O racismo ainda está conosco. Porém, cabe a nós preparar nossas crianças para o que elas têm que enfrentar e que, com esperança, nós vamos superar."
            },
            {
                texto: " É necessário ser antirracista.",
                afirmacao: "Eu não sou racista. Estou contra toda forma de racismo e segregação, toda forma de discriminação. Eu acredito nos seres humanos, e que todos os seres humanos devem ser respeitados como tais, independentemente da sua cor."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre essas frases racistas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
