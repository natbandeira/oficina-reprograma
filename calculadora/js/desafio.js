// console.log("hello, world!");

let inputValorHora = document.querySelector("#valor-hora"); // atribuindo à variavel "inputValorHora", o elemento selecionado.
let inputHorasProjeto = document.querySelector("#horas-projeto");

function calculaValor(){
    let valorHora = inputValorHora.valueAsNumber; // atribuindo à variavel "valorHora", o valor do input como tipo Number.
    let horasProjeto = inputHorasProjeto.valueAsNumber;
    let total = (valorHora * horasProjeto).toFixed(2); // atribuindo à variavel "total", a multiplicação das variáveis + método toFixed() para espicificar o número de casas decimais.
    alert(`O Valor total do seu projeto é: R$ ${total}`); // alert com template literals
}

// Apresentar o valor/hora que o usuário digitar do projeto; -ok
// Apresentar a hora total do projeto que o usuário digitar do projeto; -ok
// Apresentar o cálculo.; -pk
// Apresentar o resultado com duas casas depois da vírgula -ok
// Apresentar o resultado formatado (ex.: R$ 100,00); -ok