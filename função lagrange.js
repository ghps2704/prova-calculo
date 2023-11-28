function calcularPolinomioLagrange(pontos) {
    const grau = pontos.length - 1;

    function baseLagrange(x, k) {
        let resultado = 1;
        for (let i = 0; i <= grau; i++) {
            if (i !== k) {
                resultado *= (x - pontos[i][0]) / (pontos[k][0] - pontos[i][0]);
            }
        }
        return resultado;
    }

    function polinomioLagrange(x) {
        let resultado = 0;
        for (let k = 0; k <= grau; k++) {
            resultado += pontos[k][1] * baseLagrange(x, k);
        }
        return resultado;
    }

    function formatarPolinomio() {
        let polinomioFormatado = '';
        for (let k = 0; k <= grau; k++) {
            const termo = pontos[k][1] !== 0 ? `${pontos[k][1]}` : '';
            const base = k === 0 ? '' : `(x - ${pontos[k][0]})`;
            const sinal = termo && polinomioFormatado ? (pontos[k][1] > 0 ? ' + ' : ' - ') : '';
            polinomioFormatado += `${sinal}${termo}${base}`;
        }
        return polinomioFormatado || '0';
    }

    return { grau, polinomio: polinomioLagrange, formatarPolinomio };
}

// Exemplo de uso
// Pontos fornecidos (x, y)
const pontosConhecidos = [[1, 2], [2, 1], [3, 3]];

const { grau, polinomio, formatarPolinomio } = calcularPolinomioLagrange(pontosConhecidos);

console.log(`Grau do polinômio: ${grau}`);
console.log(`Polinômio resultante: ${formatarPolinomio()}`);
