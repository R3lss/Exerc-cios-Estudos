function carregar(){
var agora = new Date()
var hora = agora.getHours()
var para = document.getElementById("horas")
var img = document.getElementById("imagem")
if ( hora >= 12 && hora < 12){
    para.innerText = `<p>Agora São ${hora} horas</p>`
    img.src = 'imagens/manha.png'
    document.body.style.background = '#e2cd9f'
} else if( hora > 12 && hora <= 18){
    para.innerHTML = `<p>Agora são ${hora} horas</p>`
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#b9846f'
} else{
    para.innerHTML = `<p>Agora são ${hora} horas</p>`
    img.src = 'imagens/noite.png'
    document.body.style.background = '#515154'
}
}