const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
let soma = 0
for (let i = 0; i < notas.length; i++) {
    let n = notas[i]
    soma += n 
}
const media = soma/notas.length
console.log(media)
