const numeros = [5, 50, 10, 98, 23]
let n = 0
function gets(){
    const valor = numeros[n];
    n++;
    return valor;
}
function print(texto){
    console.log(texto);
}

module.exports = {gets, print}