var objCanvas   = null;    // objeto que representa o canvas
var objContexto = null; // objeto que representa o
                      // Contexto do canvas

// Objetos Image para cada coisa que vai aparecer na tela
var imgFundo = new Image();
imgFundo.src = "img/fundo.png";

// Controle de Posicionamento do Heroi
var xHeroi = 100;
var yHeroi = 100;

// Controle de Posicionamento do Monstro
var xMonstro=200;
var yMonstro=100;

var imgHeroi = new Image();
imgHeroi.src = "img/heroi.png";
var imgMonstro = new Image();
imgMonstro.src = "img/monstro.png";

function Iniciar()
{
    objCanvas = document.getElementById("meuCanvas");
    objContexto = objCanvas.getContext("2d");

    objContexto.drawImage(imgFundo,0,0);

    AtualizaTela();
}

function AtualizaTela()
{
    objContexto.drawImage(imgFundo,0,0);
    objContexto.drawImage(imgHeroi, xHeroi, yHeroi);
    objContexto.drawImage(imgMonstro, xMonstro, yMonstro);
}  

    //códigos do teclado
    //lista de valores universal
    var esquerda = 37;
    var cima = 38;
    var direita = 39;
    var baixo = 40;
    var w = 87;
    var a = 65;
    var s = 83;
    var d = 68;

    //taxa de incremento
    var taxa = 10;

    function leDoTeclado(evento){
        /*sabemos que é através do evento.keyCode
        que temos acesso ao cód da tecla
        pressionada.*/
        var teclaPressionada = evento.keyCode;

        if (teclaPressionada == esquerda) {  
                MovimentoDoHeroi(2)
        } 
        else if (teclaPressionada == cima) {
            MovimentoDoHeroi(3)
          
        } else if (teclaPressionada == direita) {
            
                MovimentoDoHeroi(0)
        } else if (teclaPressionada == baixo) {
            MovimentoDoHeroi(1)
        }
        else if(teclaPressionada == w)
        {
            MovimentoDoMonstro(3)
        }
        else if (teclaPressionada == a) {
            MovimentoDoMonstro(2)
        } 
        else if (teclaPressionada == d) {
            MovimentoDoMonstro(0)

        } else if (teclaPressionada == s) {
            MovimentoDoMonstro(1)
        }
    }
    document.onkeydown = leDoTeclado;

//
function MovimentoDoHeroi (mov)
{
    // sorteia uma direção para a qual o heroi vai se dirigir
    switch (mov)
    {
        case 0:xHeroi=(xHeroi + 10); break;
        case 1:yHeroi=(yHeroi + 10); break;
        case 2:xHeroi=(xHeroi - 10); break;
        case 3:yHeroi=(yHeroi - 10); break;
    }
    AtualizaTela();
}

function MovimentoDoMonstro (mov)
{
    switch (mov)
    {
        case 0:xMonstro=(xMonstro + 10); break;
        case 1:yMonstro=(yMonstro + 10); break;
        case 2:xMonstro=(xMonstro - 10); break;
        case 3:yMonstro=(yMonstro - 10); break;
    }
    AtualizaTela();
} 