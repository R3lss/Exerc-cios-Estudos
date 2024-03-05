class Pessoa {
    nome;
    idade;
    anodenascimento;

    constructor(nome, idade){ //se não receber valor nenhum o constructor bota esse valor de instância
        this.nome =  nome;
        this.idade = idade;
        this.anodenascimento = 2023 - idade;
    }

    descrever() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e vc nasceu em ${this.anodenascimento}`)  
    }
}
const erik = new Pessoa("Erik", 19);
erik.descrever()