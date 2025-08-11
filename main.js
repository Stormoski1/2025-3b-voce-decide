const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um cientista e descobre uma solução para diminuir as mortes de uma doença e te precionam com isso?",
        
        alternativas: [
            {
                texto: "Você aceita colaborar e ajudar todos",
                afirmacao: "Apos aceitar você passa essa noticia para todos."
            },
            {
                texto: "Você recussa e passa para outra pessoa que quer ela",
                afirmacao: "Apos passar para essa pessoa ele diz que quem descobriu foi ele."
            }
        ]
    },
    {
        enunciado: "após um tempo você tem um certo problema com essa pessoa e ameaça contar para todos o que ele queria? ",
        alternativas: [
            {
                texto: "Você decide contar para todos?",
                afirmacao: "com essa noticia ele é preso."
            },
            {
                texto: "Você decide deixar por isso mesmo?",
                afirmacao: "após isso ele continua com a vida normalmente, e você arrependido."
            }
        ]
    },
    {
        enunciado: "após isso você fica muito mal e pega essa doença e precisa da ajuda dessa pessoa?",
        alternativas: [
            {
                texto: "você procura ele",
                afirmacao: "ele decide te ajudar e você melhora e agradece ele."
            },
            {
                texto: "você decide não procurar ele",
                afirmacao: "você acaba piorando e tem que ficar internado, e acaba piorando cada vez mais e vem a óbito."
            }
        ]
    },

        ]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Como termina a sua historia... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)