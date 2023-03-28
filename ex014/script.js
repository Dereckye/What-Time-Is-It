function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //Bom Dia
    img.src = 'Foto-Manha.png'
    document.body.style.background = '#b8e1fc'
}else if (hora >= 12 && hora < 18){
    //Boa Tarde
    img.src = 'Foto-Tarde.png'
    document.body.style.background = '#fc9531'
}else {
    //Boa Noite
    img.src = 'Foto-Noite.png'
    document.body.style.background = '#284c8c'
}

}