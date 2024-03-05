let preçoG = 5.79
let preçoE = 4.79
let tipo = "G"
let gasto = 10
let distancia = 200

let carrogasto = distancia/gasto

if(tipo === "E"){
    let gastoT = carrogasto * preçoE
    console.log(gastoT.toFixed(2))
} else if( tipo === "G"){
    let gastoT = carrogasto * preçoG
    console.log(gastoT.toFixed(2))
} else {
    console.log("Você inseriu um tipo inválido de combustível")
}

