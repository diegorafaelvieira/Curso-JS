let valores =[8, 1, 7,  2, 9 ]

//Forma padrão de execução
console.log(valores)

/* Mostrar na tela com FOR*/ 
for(let pos = 0; pos <valores.length; pos++) {
	console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Jeito mais simplificado FOR IN
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 

