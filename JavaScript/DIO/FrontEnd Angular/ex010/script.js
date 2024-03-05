const numeros = [1, 2 ,3 ,4 ,5 ,6 ,7, 8, 9, 10]
numeros.push(12)
for (let i = 0; i < numeros.length; i++) {
    const e = numeros[i];
    if (e % 2 == 0){
        console.log(e)
    }
}