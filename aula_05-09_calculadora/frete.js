/*
Desenvolva um programa que calcule o valor do frete para uma compra: frete grátis para compras acima de 300 reais, caso contrário, calcule o frete de 50 reais.
*/

var valor = parseFloat(prompt("Digite o valor de sua compra, somente números, sem simbolos: "));
var frete = 50;
var valorFrete = valor + frete;

if (valor < 300){
    
    console.log("O valor total de sua compra com o frete é de: " + "R$" + valorFrete);

}else if(valor >= 300){
    console.log("Você possui frete grátis, o valor de sua compra é de: " + "R$" + valor);
}else {
    console.log("O calcúlo é inválido.");
}