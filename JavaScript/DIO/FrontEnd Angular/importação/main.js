const {gets, print}= require('./funcoes-auxiliares'); //importa o que está sendo exportado


let maiorValor = 0;
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(maiorValor)
