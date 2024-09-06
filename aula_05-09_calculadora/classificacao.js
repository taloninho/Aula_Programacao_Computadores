/*
Desenvolva um programa que leia a idade do usuário e informe a categoria de f8lme adequada: "Li8vre", "12 anos", "14 anos", "16 anos", ou "18 anos".
*/

var idade = parseInt(prompt("Digite a sua idade para verificarmos a classificação adequada:"));

if(idade <= 10){
    console.log("A classificação de filme adequada para sua idade é Livre.");
}else if(idade <= 13){
    console.log("A classificação de filme adequada para sua idade é 12 anos.");
}else if(idade <= 15){
    console.log("A classificação de filme adequada para sua idade é 14 anos.");
}else if(idade <= 17){
    console.log("A classificação de filme adequada para sua idade é 16 anos.");
}else if(idade >= 18){
    console.log("A classificação de filme adequada para sua idade é 18 anos.");
}
else {
    console.log("Digite número inteiro para definir sua idade.");
}