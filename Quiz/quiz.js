let errado = document.getElementById('respostas')
let resposta1 = document.getElementById('selectMenu1')
let resposta2 = document.getElementById('selectMenu2')
let resposta3 = document.getElementById('selectMenu3')
let elementoInputResultado = document.getElementById('Resultado')

function Enviar(){
    elementoInputResultado.value = Number(resposta1.value) + Number(resposta2.value) + Number(resposta3.value)

  if(elementoInputResultado.value == 3){
    alert('Parabéns você acertou todas!!')
  }

  else if (elementoInputResultado.value == 0){
    alert('Você errou todas.')
  }

  else if (elementoInputResultado.value == 1 || elementoInputResultado.value ==  2){
    alert('Você errou.')
  }

  else if(errado.value == resposta1, resposta2, resposta3){
    alert('Selecione as Respostas.')
  }

}