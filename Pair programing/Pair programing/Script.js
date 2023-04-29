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

// Controle de Posicionamento do Heroi
var xHeroiR = 100;
var yHeroiR = 100;

// Controle de Posicionamento do Monstro
var xMonstroR =200;
var yMonstroR =100;

var imgHeroi = new Image();
imgHeroi.src = "img/heroi.png";
var imgMonstro = new Image();
imgMonstro.src = "img/monstro.png";

function Resetar()
{
    objContexto.drawImage(imgFundo,0,0);
    objContexto.drawImage(imgHeroi, xHeroiR, yHeroiR);
    objContexto.drawImage(imgMonstro, xMonstroR, yMonstroR);
}
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

        if (teclaPressionada == esquerda)
        {  
            if(xHeroi > 32)
            {
                MovimentoDoHeroi(2)
            }
            else
            {
                alert("O HERÓI MORREU:( TENTE NOVAMENTE!")
                Resetar();    
            }
        } 
        else if (teclaPressionada == cima) 
        {
            if(yHeroi > 32 )
            {
                MovimentoDoHeroi(3)
            }
            else
            {
                alert("O HERÓI MORREU :( TENTE NOVAMENTE!")
                Resetar();    
            }
        } 
        else if (teclaPressionada == direita) 
        {
            if(xHeroi < 512 - 64)
            {
                MovimentoDoHeroi(0)
            }
            else
            {
                alert("O HERÓI MORREU :( TENTE NOVAMENTE!")
                Resetar();
            }
        }
        else if (teclaPressionada == baixo)
        {
            if(yHeroi < 480 - 64)
            {
                MovimentoDoHeroi(1)
            }
            else
            {
                alert("O HERÓI MORREU :( TENTE NOVAMENTE!")
                Resetar();
            }
        }
        if(yMonstro > yHeroi - 64 || xMonstro > xHeroi - 64)
        {
                if(yMonstro < 480 - 64 && xMonstro < 512 - 64 && xMonstro > 32 && yMonstro > 32)
                    MovimentoDoMonstro(30)
                else{
                    alert("O MONSTRO MORREU :) TENTE NOVAMENTE!")
                    Resetar();
                }
        }
        MovimentoDoMonstro(10)
    }
    document.onkeydown = leDoTeclado;

//
function MovimentoDoHeroi (movH)
{
    // sorteia uma direção para a qual o heroi vai se dirigir
    
    switch (movH)
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
    var direcao = parseInt((Math.random()*mov) % 4);
    switch (direcao)
    {
        case 0:xMonstro=(xMonstro + mov); break;
        case 1:yMonstro=(yMonstro + mov); break;
        case 2:xMonstro=(xMonstro - mov); break;
        case 3:yMonstro=(yMonstro - mov); break;
    }
    AtualizaTela();
}

const minutesEl      = document.querySelector("#minutes")
const secondsEl      = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn       = document.querySelector("#startBtn")
const pauseBtn       = document.querySelector("#pauseBtn")
const resumeBtn      = document.querySelector("#resumeBtn")
const resetBtn       = document.querySelector("#resetBtn")

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", ComecarTempo)
pauseBtn.addEventListener("click", PararTempo)
resumeBtn.addEventListener("click", ContinuarTempo)
resetBtn.addEventListener("click", ResetarTempo)

function ComecarTempo() {
	interval = setInterval(() => {

		if(!isPaused) {
			milliseconds += 10;

			if(milliseconds === 1000) {
				seconds++;
				milliseconds = 0;
			}

			if(seconds === 60) {
				minutes++;
				seconds = 0;
			}

			minutesEl.textContent = FormatarTempo(minutes);
			secondsEl.textContent = FormatarTempo(seconds);
			millisecondsEl.textContent =  FormatarMilissegundos(milliseconds);
		}

	}, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function PararTempo() {
    isPaused = true;
    pauseBtn.style.display  = "none";
    resumeBtn.style.display = "block";
}

function ContinuarTempo() {
    isPaused = false;
    pauseBtn.style.display  = "block";
    resumeBtn.style.display = "none";
}

function ResetarTempo() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00"
	secondsEl.textContent = "00"
	millisecondsEl.textContent = "000"

    startBtn.style.display   = "block";
    pauseBtn.style.display   = "none";
    resumeBtn.style.display  = "none";
}

function FormatarTempo(time) {
	return time < 10 ? `0$(time)` : time;
}

function FormatarMilissegundos(time) {
	return time < 100 ? `$(time)`.padStart(3, "0") : time;
}