function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}


function saudar(nome: string): string {
    return `Olá ${nome}`;
}


const resultadoMultiplicacao = multiplicar(7, 12);
const mensagemSaudacao = saudar("João");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);