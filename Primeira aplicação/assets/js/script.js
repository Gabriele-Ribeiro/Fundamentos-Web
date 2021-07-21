/*
Case Sensitive = reconhece letras maiúsculas e minúsculas.
tag = getElementByTagName()
id = getElementById() 
nome = getElementsByName()
classes = getElementsByClassName()
seletor = querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2){
        txtNome.innerHTML = ("Nome Inválido!")
        txtNome.style.color= 'rgb(228, 32, 163)'
    } else{
        txtNome.innerHTML = ("Nome Válido!")
        txtNome.style.color= 'rgb(141, 233, 105)'
        let nomeOk = ftrue
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
    txtEmail.innerHTML = "Email Inválido!"
    txtEmail.style.color= 'rgb(228, 32, 163)'
} else{
    txtEmail.innerHTML = ("Email Válido!")
    txtEmail.style.color= 'rgb(141, 233, 105)'
    let emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Erro! Texto acima de 100 caracteres." 
        txtAssunto.style.color= 'rgb(228, 32, 163)'
    }
    else{
        txtAssunto.style.display = 'none'
        let assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert ('Formulário enviado com sucesso!')
    } else{
    alert ('Preencha o formulário corretamente antes de enviar!')
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '350px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '200px'
}