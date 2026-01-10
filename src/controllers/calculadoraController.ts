import * as calculadora from '../services/calculadoraService';

/**
 * Controller que integra as funções do service.
 * Em aplicações reais, ele receberia dados de rotas ou interfaces.
*/

export function executarOperacao(
  operacao: 'somar' | 'subtrair' | 'multiplicar' | 'dividir',
  a: number,
  b: number
): number {
  return calculadora[operacao](a, b);
}