let num = [8, 5, 6, 2, 7]

num.push(1)
num.sort()
console.log(num)
console.log(`a Array tem ${num.length} posições`)
console.log(`O primeiro valor da Array é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`) 
} else {
    console.log(`O valor está na posição ${pos}`)
}