/**
 * TESTE DE INTEGRAÇÃO:
 * Testa a comunicação entre controller e service.
*/

import { executarOperacao } from '../../src/controllers/calculadoraController';

describe('Calculadora Controller - Testes de Integração', () => {

    test.each([
        ['somar', 2, 2, 4],
        ['subtrair', 5, 2, 3],
        ['multiplicar', 3, 3, 9],
        ['dividir', 10, 2, 5]
    ])(
        'operação %s com %i e %i deve retornar %i',
        (operacao: string, a: number, b: number, resultado: number) => {
            expect(
                executarOperacao(
                    operacao as 'somar' | 'subtrair' | 'multiplicar' | 'dividir',
                    a,
                    b
                )
            ).toBe(resultado);
        }
    );

});