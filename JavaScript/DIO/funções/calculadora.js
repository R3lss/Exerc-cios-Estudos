function calculadora(){
    const operacao = prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão(/)");

    let n1 = Number(prompt("Fale o primeiro número"));
    let n2 = Number(prompt("Fale o segundo número"));
    let resultado;
    function soma(){
        resultado = n1 + n2;  
        alert(`${n1} + ${n2} = ${resultado}`);     
        novaop();     
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);   
        novaop();
    }
    function multi(){
        resultado= n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaop();    
    }
    function divi(){
        resultado= n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaop();  
    }

    function novaop(){
        let opcao = prompt('Quer calcular dnv? 1-Sim\n 2-Não' );
        if (opcao == 1){
            calculadora();
        }
        else if (opcao == 2){
            alert("Até logo");
        }
        else{
            alert('Erro');
            novaop();
        }
    }

    if(operacao == 1){
        soma();
    }
    else if(operacao == 2){
        subtracao();
    }
    else if(operacao == 3){
        multi();
    }
    else if(operacao == 4){
        divi();
    }
}

calculadora();