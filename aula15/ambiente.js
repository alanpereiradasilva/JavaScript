let num = [5, 8, 2, 9, 3] // array(vetor)
num.push(1) // acrescenta independente do tamanho(length)
num.sort() //ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`) // length é atributo que exibe o tamanho
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
