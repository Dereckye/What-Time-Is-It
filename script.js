function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minhaDiv = document.querySelector(".digital")
if(hora >= 0 && hora < 12){
    //Bom Dia
    msg.innerHTML= '&#65039'
    img.src = 'Foto-Manha.png'
    document.body.style.background = '#b8e1fc'
    minhaDiv.style.color = '#b8e1fc'
    document.title= 'Dia'
}else if (hora >= 12 && hora < 18){
    //Boa Tarde
    msg.innerHTML= '&#9925'
    img.src = 'Foto-Tarde.png'
    document.body.style.background = '#fc9531'
    minhaDiv.style.color = '#fc9531'
    document.title= 'Tarde!'
}else {
    //Boa Noite
    msg.innerHTML= '&#127747'
    img.src = 'Foto-Noite.png'
    document.body.style.background = '#284c8c'
    minhaDiv.style.color = '#284c8c'
    document.title= 'Noite!'
}
}
let digitalElement = document.querySelector('.digital');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60 ) * second)
    
}

function fixZero(time){
  return time < 10 ? `0${time}` : time;
}


setInterval(updateClock, 1000);
