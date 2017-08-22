
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
	var nome = document.getElementById('nome');
	var varnumero = document.getElementById('numero');
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



function calcularIMC(){
	var peso = document.getElementById('peso');
	var altura = document.getElementById('altura');
	var calculo = altura.value * altura.value;
	var imc = peso.value/calculo;
	
	if(imc < 17){
		comentario = 'seu IMC esta muito abaixo do peso ';
	}else 
	if(imc >= 17 && imc <= 18){
		comentario = 'seu IMC esta abaixo do peso ';
	}else 
	if(imc > 18 && imc < 25){
		comentario = 'seu peso esta normal ';
	}else 
	if(imc > 25 && imc <= 30){
		comentario = 'obsidade I ';
	}else 
	if(imc > 30 && imc <= 40) {
		comentario = 'obsidade II ';		
	}else if(imc > 40){
		comentario = 'vc esta morto ';
	}
			
	document.getElementById('resultadoImc').innerHTML = imc;		
	document.getElementById('comentarioImc').innerHTML = comentario;		
}

function loopWhile(){
	 x=10;
	 z='';
	while (x>0) {
		z = z +'Numero: ' + x + '<br/>';
		x--;
	}
	document.getElementById('while').innerHTML = z;
}

function loopFor(){
	 j = '';
	for(i=0; i<10; i++){
		j = j +'Numero: ' + i + '<br/>';
	}
	document.getElementById('for').innerHTML = j;
}