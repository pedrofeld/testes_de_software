class Calculadora {
    public somar(a: number, b: number): number {
        return a + b;
    }
}

describe("Calculadora", () => {
    // Deveria <retorno> se <condição>

    // Teste de soma
    test("deveria somar dois números corretamente", () => {
        // Arrange
        const calculadora = new Calculadora();
        const a = 2;
        const b = 3;
        const resultadoEsperado = 5;

        // Act (action)
        const resultado = calculadora.somar(a, b);

        // Assert (assertion / validação)
        expect(resultado).toBe(resultadoEsperado);
    });

    //Também poderia ser escrito como:
    // it("deve somar dois números corretamente", () => {
    //     const resultado = 2 + 3;
    //     expect(resultado).toBe(5);
    // });

    // Teste de subtração
    it("deve subtrair dois números corretamente", () => {
        const resultado = 5 - 2;
        expect(resultado).toBe(3);
    });

    // Teste de multiplicação
    it("deve multiplicar dois números corretamente", () => {
        const resultado = 4 * 3;
        expect(resultado).toBe(12);
    });

    // Teste de divisão
    it("deve dividir dois números corretamente", () => {
       const resultado = 10 / 2;
       expect(resultado).toBe(5);
    });
});