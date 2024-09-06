/*
Crie um programa que leia um número inteiro e informe se ele é positivo, negativo ou zero.
*/

var number = parseInt(prompt("Digite um número inteiro: "));
 if(number > 0){
    console.log("O seu número é positivo.");

 }else if(number < 0){
    console.log("O seu número é negativo.");

 } else {
    console.log("O seu número é zero.");
 }