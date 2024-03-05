class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso,altura){
        this.nome = nome 
        this.peso = peso 
        this.altura = altura
    }
    calcularIMC(){
        const IMC = this.peso / (this.altura * this.altura)
        return IMC
    }
    classificarIMC(){
        const imc = this.calcularIMC();
        if(imc < 18.5){
            return `Seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso`
        } else if( imc < 25){
            return `Seu IMC é de ${imc.toFixed(2)}. Você está com o peso normal`
        } else if(imc < 30){
            return `Seu IMC é de ${imc.toFixed(2)}. Você está acima do peso`
        } else if(imc <= 40){
            return `Seu IMC é de ${imc.toFixed(2)}. Você está obeso`
        } else if(imc > 40){
            return `Seu IMC é de ${imc.toFixed(2)}. Você está em obesidade grave`
        } else {
            return `Os números quer vc colocou estão errados`
        }
    }

}   
const José = new Pessoa("José", 70, 1.75)
console.log(José.calcularIMC())
console.log(José.classificarIMC())