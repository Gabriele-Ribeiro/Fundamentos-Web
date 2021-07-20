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
    }

}

function validaEmail(){
    txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
    txtEmail.innerHTML = "Email Inválido!"
    txtEmail.style.color= 'rgb(228, 32, 163)'
} else{
    txtEmail.innerHTML = ("Email Válido!")
    txtEmail.style.color= 'rgb(141, 233, 105)'
}
}