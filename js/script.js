
function primeiraFuncao(msg){
	alert(msg)

}

function apagarTexto(){
	document.getElementById('title').style.display = 'none';
}
function mostraTexto(){
	document.getElementById('title').style.display = 'block';
}
function mudaCortexto(){
	document.getElementById('title').style.color = 'red';
}
function voltaCortexto(){
	document.getElementById('title').style.color = 'black';
}

function trocaTexto(){
	document.querySelector('.p1').innerHTML = '02 - Lorem ipsum dolor sit amet';
}
function voltaTexto(){
	document.querySelector('.p1').innerHTML = '01 - Lorem ipsum dolor sit amet';
}

function formulario(){
	nome = document.getElementById('nome');
	numero = document.getElementById('numero');
	if(nome.value == '' && numero.value == ''){
			alert('Por Favor, preencha os campos!');
	}else 
		if(nome.value == nome.value && numero.value == ''){
			alert('Verifique todos os campos!, *campo numero vazio');
	}else 
		if(nome.value == '' && numero.value == numero.value){
			alert('Verifique todos os campos!, *campo nome vazio');	
	}
	else{
		alert('Dados carregados com sucesso!');
	}

}