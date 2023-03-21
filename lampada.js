var lamp = window.document.getElementById("lampada")
// var s = ""
// Minha solução está comentada, usei apenas lógica para resolver a regra de negócio, mas encontrei uma função nova na solução o professor e gostei.

function estaQuebrada(){
	return lamp.src.indexOf("quebrada") > -1
}

function ligar(){
	// if( s != "quebrada" ){
	if(!estaQuebrada()){
		lamp.src = "assets/ligada.svg"
	}
}

function desligar(){
	// if( s != "quebrada" ){
		if(!estaQuebrada()){
		lamp.src = "assets/desligada.svg"
	}
}

lamp.addEventListener("click", quebrar)
function quebrar(){
	lamp.src = "assets/quebrada.svg"
	// s = "quebrada"
}
