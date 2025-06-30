const caixaPrincipal = document.querySelector(".caixa principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-Alternativas")
const caixaResultado = document.querySelector("caixa-resultado")
const textoResultado = document.querySelector("texto-Resultado")

const perguntas = [
    {
        enuciado: "pergunta 1",
        altenativa: [
            "Alternativa01",
            "Altenartiva02"
        ]
    },
    {
        enuciado: "perguntas 2",
        altenativa: [
            "Alternativa03",
            "Altenartiva04"
    ]
    },
    {
        enuciado: "perguntas 3",
        altenativa: [
            "Alternativa05",
            "Altenartiva06"
        ]
    },
{
    enuciado: "perguntas 4",
    altenativa: [
        "Alternativa07",
        "Altenartiva08"
    ]
 }
 ]
let atual = 0;
let perguntaAtual

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enuciado;
}
mostraPergunta();{

}function mostraraltenativas (){
    for(const Alternativa of perguntaAtual.altenativa){
        const BotãoAlternativas = document.createElement("button");
        BotãoAlternativas.textContent = altenativa;
        caixaAlternativas.appendChild(BotãoAlternativas)
    }
}

function mostraraltenativas(){
    for (const altenativa of perguntaAtual.altenativa){
        const BotãoAlternativas = document.createElement("button");
        BotãoAlternativas.textContent = Alternativa.texto;
        BotãoAlternativas.addEventListener("click",() => respostaselecionada(function));
        caixaAlternativas.appendChild(BotãoAlternativas)
            atual++;
            mostraPergunta()
        }
        
    }

 function mostraPergunta() {
    if(atual >= pergunta.length){
        mostreResultado();
        return
    }
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enuciado;
    caixaAlternativas.textContent ="";
    mostraraltenativas();
 }