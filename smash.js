document.querySelector("#mario").addEventListener('click', marioMelee)
document.querySelector("#cptFalcon").addEventListener('click',cptFalcon)
document.querySelector("#ness").addEventListener('click', nessMelee)
document.querySelector("#fox").addEventListener('click', foxMelee)
document.querySelector("#link").addEventListener('click', linkMelee)
document.querySelector("#mewTwo").addEventListener('click', mewTwoMelee)
document.querySelector("#roy").addEventListener('click', royMelee)
document.querySelector("#samus").addEventListener('click', samusMelee)

function marioMelee() {
    document.querySelector('body').style.backgroundImage = "url('stagem.webp')"
}
function cptFalcon() {
    document.querySelector('body').style.backgroundImage = "url('stagecpt.webp')";
}
function nessMelee() {
    document.querySelector('body').style.backgroundImage = "url('stagen.webp')";
}
function foxMelee() {
    document.querySelector('body').style.backgroundImage = "url('Corneria.webp')";
}
function linkMelee() {
    document.querySelector('body').style.backgroundImage = "url('Temple.webp')";
}
function mewTwoMelee() {
    document.querySelector('body').style.backgroundImage = "url('pokemon.webp')";
}
function royMelee(){
    document.querySelector('body').style.backgroundImage = "url('fire.webp')";
}
function samusMelee() {
    document.querySelector('body').style.background = "url('metroid.webp')";
}
