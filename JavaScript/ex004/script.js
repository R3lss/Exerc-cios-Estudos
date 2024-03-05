var nome = window.prompt("Qual teu nome? ").toUpperCase()
document.write(`Seu nome é ${nome} e tem ${nome.length} letras`)

n1 = 1231.5
n1.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL' })
window.alert(n1)
