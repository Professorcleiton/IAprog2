const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Apesar da abolição da escravatura ter sido assinada há 131 anos, a sociedade brasileira continua perpetuando várias palavras e expressões em seu vocabulário que são carregadas de racismo. “Denegrir”, “meia-tigela”, “mulata”, “cabelo ruim” e “negra de traços finos” são alguns exemplos de uma lista que tornam o preconceito contra a cor da pele como algo natural e comum.",
        alternativas: [
            {
                texto: "Não concordo!",
                afirmacao: "Você ainda acha que essas pequenas frases não tem nada de preconceituoso. "
            },
            {
                texto: "Com certeza!",
                afirmacao: "Você concorda que essas frases deveriam sim para de serem ditas, só para começar."
            }
        ]
    },
    {
        enunciado: "Frase racista, você já ouviu ou falou uma hoje? Pode ser até mesmo aquela que seus entes queridos falam sem pensar?",
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
        enunciado: "Você pode até acreditar que “não ver cor” é algo positivo, o problema é que quase sempre, as mesmas pessoas que não enxergam cores também não percebem quando estão sendo racistas.",
        alternativas: [
            {
                texto: "Eu não enxergo cores",
                afirmacao: "Em outras palavras, se fazer de cego não isenta você de ser racista."
            },
            {
                texto: "Enxergo seres humanos.",
                afirmacao: "enxergar diferenças nos permite reconhecer que justamente por não sermos iguais é que temos diferentes tratamentos socialmente."
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
                afirmacao: "Se você percebeu que agora nenhuma das suas “piadinhas” tem graça, a não ser quando está cercado de racistas reacionários iguais a você, significa que quem precisa se tratar urgentemente é você."
            }
        ]
    },
    {
        enunciado: "Por que não tem dia da consciência humana? ",
        alternativas: [
            {
                texto: "O mês da consciência negra existe justamente para celebrar a morte de um dos maiores símbolos de resistência e luta contra o sistema escravocrata.",
                afirmacao: " O mais intrigante é que estas pessoas normalmente pregam o discurso de que somos todos iguais, mas nunca questionam a ausência de negros em ambientes de destaque, universidades, histórias, televisão e etc."
            },
            {
                texto: "O mês de novembro é famoso por levantar questionamentos absurdos acerca da celebração do povo preto (lê se recalque, ódio e racismo enrustido).",
                afirmacao: " O mais intrigante é que estas pessoas normalmente pregam o discurso de que somos todos iguais, mas nunca questionam a ausência de negros em ambientes de destaque, universidades, histórias, televisão e etc.. "
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
    caixaPerguntas.textContent = "Racismo para mim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
