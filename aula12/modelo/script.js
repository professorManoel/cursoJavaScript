
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'imagens/manha.jpg'
    msg.innerHTML= `Agora são ${hora} horas, BOM DIA!!!!`
    window.document.body.style.background = '#e2cd9f'
}else if (hora >=12 && hora < 18){
    //boa tarde
    img.src = 'imagens/tarde.jpg'
    msg.innerHTML= `Agora são ${hora} horas, BOA TARDE!!!`
    window.document.body.style.background = '#b9846f'
} else {
    //boa noite
    img.src = 'imagens/noite.jpg'
    msg.innerHTML= `Agora são ${hora} horas, BOA NOITE!!!`
    window.document.body.style.background = '#515154'
}

}