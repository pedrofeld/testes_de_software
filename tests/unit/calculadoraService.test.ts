/**
 * TESTE UNITÁRIO (TDD):
 * Primeiro escrevemos o teste, depois o código.
 * Aqui testamos apenas o service, isolado.
*/

import * as logger from '../../src/services/logger';
import {
  somar,
  subtrair,
  multiplicar,
  dividir
} from '../../src/services/calculadoraService';

jest.mock('../../src/services/logger');
/*
    Mockamos o logger para evitar que ele imprima mensagens no console durante os testes.
    Isso substitui o logger.ts real por uma versão falsa (mock)
    O console.log real não será executado
    Todas as funções viram funções monitoráveis do Jest
*/

describe('Calculadora Service - Testes Unitários', () => {

    beforeAll(() => {
        // Executa uma vez antes de todos os testes
        console.log('Iniciando testes unitários');
    });

    afterAll(() => {
        // Executa uma vez após todos os testes
        console.log('Finalizando testes unitários');
    });

    test.each([
        [1, 2, 3],
        [5, 5, 10],
        [-1, 1, 0]
    ])('somar(%i, %i) deve retornar %i', (a, b, resultado) => {
        expect(somar(a, b)).toBe(resultado);
        expect(logger.log).toHaveBeenCalled();
    });

    test.each([
        [5, 2, 3],
        [10, 5, 5]
    ])('subtrair(%i, %i) deve retornar %i', (a, b, resultado) => {
        expect(subtrair(a, b)).toBe(resultado);
    });

    test.each([
        [2, 3, 6],
        [5, 0, 0]
    ])('multiplicar(%i, %i) deve retornar %i', (a, b, resultado) => {
        expect(multiplicar(a, b)).toBe(resultado);
    });

    it('deve dividir corretamente', () => {
        expect(dividir(10, 2)).toBe(5);
    });

    it('deve lançar erro ao dividir por zero', () => {
        expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
    });
});