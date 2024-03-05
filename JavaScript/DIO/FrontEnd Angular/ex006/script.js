class Carro {
    marca;
    cor;
    gastoM;

    constructor(marca, cor, gastoM, ){
        this.marca = marca;
        this.cor = cor;
        this.gastoM = gastoM;
    }
    calculargasto(Km, preço){
        const gastoT = preço * (Km/this.gastoM)
        return `Seu carro de marca ${this.marca} vai gastar em média ${this.gastoM} L/km, e no percurso selecionado vai gastar ${gastoT} R$`
    }
  
}

const carro = new Carro("toyota", "azul", 12)
console.log(carro.calculargasto(150, 5))