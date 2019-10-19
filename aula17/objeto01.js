let amigo = {nome: 'José',
 sexo:'M',
peso: 85.4,
engordar(p=0){ /* Coloca ZERO caso não informe valor */
    console.log('Engordou')
    this.peso += p
}}
console.log(amigo)
console.log(amigo.nome) /* Aqui só mostro o nome */
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

amigo.engordar(2) /* Aqui engorda 2 kg */

console.log(`${amigo.nome} pesa agora ${amigo.peso} kg`)