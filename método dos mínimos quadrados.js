function calcularMinimosQuadrados(pontos) {
    const n = pontos.length;
    
    // Calcular as somas necessárias para as fórmulas
    let somaX = 0;
    let somaY = 0;
    let somaXY = 0;
    let somaXQuadrado = 0;

    for (const ponto of pontos) {
        const x = ponto[0];
        const y = ponto[1];
        somaX += x;
        somaY += y;
        somaXY += x * y;
        somaXQuadrado += x * x;
    }

    // Calcular os coeficientes a e b
    const a = (n * somaXY - somaX * somaY) / (n * somaXQuadrado - somaX * somaX);
    const b = (somaY - a * somaX) / n;

    return { a, b };
}

// Exemplo de uso
// Pontos fornecidos (x, y)
const pontosConhecidos = [[1, 2], [2, 1], [3, 3]];

const { a, b } = calcularMinimosQuadrados(pontosConhecidos);

console.log(`A reta de ajuste linear é: y = ${a}x + ${b}`);
