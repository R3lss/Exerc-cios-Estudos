let peso = 85
let altura = 1.82
let IMC = peso /(altura * altura)

if(IMC < 18.5){
    console.log(`Seu IMC é de ${IMC.toFixed(2)}. Você está abaixo do peso`)
} else if( IMC < 25){
    console.log(`Seu IMC é de ${IMC.toFixed(2)}. Você está com o peso normal`)
} else if(IMC < 30){
    console.log(`Seu IMC é de ${IMC.toFixed(2)}. Você está acima do peso`)
} else if(IMC <= 40){
    console.log(`Seu IMC é de ${IMC.toFixed(2)}. Você está obeso`)
} else if(IMC > 40){
    console.log(`Seu IMC é de ${IMC.toFixed(2)}. Você está em obesidade grave`)
} else {
    console.log("Os números quer vc colocou estão errados")
}
