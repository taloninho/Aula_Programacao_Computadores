/*

var palavraVariavel = ?

FUÇÕES
prompt(""):string
parseInter("""):number
parseFloat(""):number
console.log(""):void

+ soma ou concatena
- subtrai
* multiplica
/ divide

CONDIÇÕES
if(var ou texto/number ___ var ou texto/number)
== igual/comparação
> maior que
< menor que
> maior igual
< menor igual
!= diferente

*/


var anoAtual = 2024;
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
var idade = anoAtual - anoNascimento;

if(idade >= 18) {
    console.log("Você é maior de idade no Brasil");
    console.log("Você é obrigado a votar!");
}else{
   console.log("Você é menor de idade no Brasil!");
}

// Manipulando o IF
console.log("Usando apenas o > (idade > 17)");
if(idade > 17){
    console.log("Maior de Idade");
}else{
    console.log("Menor de Idade");
}

console.log("Invertendo o resultado idade < 18");
if (idade < 18){
    console.log("Menor de Idade!");
}else{
    console.log("Maior de Idade");
}

/*
Elabore um programa que:
1. Inicie o saldo da conta zerado.
2. Solicite um valor a ser depositado.
2. Solicite um valor a ser sacado.
4. Apresente se é possivel sacar ou não o valor.
*/

var saldoZero = 0;
var deposito = parseFloat(prompt("Digite o valor do deposito:"));
var saque = parseFloat(prompt("Digite o valor a ser sacado"));
var saldo = deposito + saldoZero;

if(saque > saldo){
    console.log("Você não possui essa quantia em sua conta");
    }else{(saque <= saldo)
    console.log("Você tem esse valor disponivel para saque");
}