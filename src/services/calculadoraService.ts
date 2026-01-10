import { log } from './logger';

/*
    Service com regras de negócio da calculadora.
    Cada método é facilmente testável de forma unitária.
*/

export function somar(a: number, b: number): number {
    log('Somando valores');
    return a + b;
}

export function subtrair(a: number, b: number): number {
    log('Subtraindo valores');
    return a - b;
}

export function multiplicar(a: number, b: number): number {
    log('Multiplicando valores');
    return a * b;
}

export function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    log('Dividindo valores');
    return a / b;
}