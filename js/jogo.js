
// -------- Variáveis Globais ---------

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 120;
var nivel = (window.location.search).replace('?','');
var mosqmorto = 0;

var velocidadeAparicaoMosquito = undefined;

if (nivel ==='normal'){
	velocidadeAparicaoMosquito = 2000;
} else if (nivel ==='dificil'){
	velocidadeAparicaoMosquito = 1200;
} else if (nivel === 'chucknorris'){
	velocidadeAparicaoMosquito = 750;
}


// ---------- Definindo o tamanho da  tela do jogo ---------------------
function tamanhoTelaJogo(){
	altura = window.innerHeight;
	largura = window.innerWidth;
}

tamanhoTelaJogo();

// --------------- Fim da Tela do Jogo ---------------------

//Cronometro do Jogo
var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0){
		clearInterval(cronometro);
		clearInterval(criarMosquito);
		window.location.href = 'vitoria.html';
	} else{
		document.getElementById('cronometro').innerHTML = tempo;
	}
}, 1000);



// --------------- Posicao do Mosquito ------------------
function posicaoMosquitos(){

	//removendo mosquito
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove();

		//Diminuindo os pontos de vidas
		if (vidas > 5){
			window.location.href = 'gameover.html';
		} else{
			document.getElementById('v'+vidas).src = "img/coracao_vazio.png";
			vidas += 1;
		}	
	}
	
	//Posicao do mosquito de forma aleatória 
	var posicaoX = Math.floor(Math.random() * largura) - 150;
	var posicaoY = Math.floor(Math.random() * altura) - 150;

	//Não ultrapassar os eixos
	if (posicaoX < 0){
		posicaoX = 0;
	} else if (posicaoY < 0){
		posicaoY = 0;
	}

	//Colocando mosquito na tela do jogo de acordo com as características
	var mosquito = document.createElement('img');
	mosquito.src = 'img/mosca.png';
	mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';

	//Matando o mosquito
	mosquito.onclick = function(){
		this.remove();
		mosqmorto ++;
		document.getElementById('mosqmorto').innerHTML = mosqmorto;
	}

	//Adicionado o mosquito no corpo da página
	document.body.appendChild(mosquito);
}

//Definido tamanho do mosquito de forma aleatória
function tamanhoMosquito() {
	var tamanho = Math.floor(Math.random() * 3);

	switch (tamanho){
		case 0:
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}
}

//Invertendo imagem do mosquito
function ladoMosquito() {
	var lado = Math.floor(Math.random() * 2);

	switch (lado){
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';

	}
}

function recarregarJogo(){
	window.location.href = 'home.html';
}
