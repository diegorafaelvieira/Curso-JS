let num = [5,  8,  2,  9,  3]

num.push(1)/* Aqui coloco o valor 1 na última posição do array*/ 
num.sort() /* Aqui ordena o array */
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //Pocura no vetor onde esta o valor 8
console.log(`O valor 8 está na posição ${pos}`)
let pos2 = num.indexOf(4) // Aqui procuro um valor que não existe no array
if (pos2 == -1) {
    console.log(`O valor 4 não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos2}`)
}
