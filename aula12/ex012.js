var agora = new Date() //Pegar Data
var hora = agora.getHours(); //Pegar Hora da Data
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}