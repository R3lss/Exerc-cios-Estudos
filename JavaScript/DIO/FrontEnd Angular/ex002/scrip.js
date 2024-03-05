let nota1 = 5
let nota2 = 5
let nota3 = 5
let media = (nota1 + nota2 + nota3) / 3

if(media < 5 ){
    console.log(`Sua média foi ${media}, e você foi REPROVADO!`)
} else if(media < 7){
    console.log(`Sua média foi ${media}, e você está de RECUPERAÇÃO!`)
} else{
    console.log(`Sua média foi ${media}, e você foi APROVADO !`)
}