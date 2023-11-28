function equation(x) {
    // Primeira equação
    return Math.pow(x, 4) - x - 2;
}

function equationDerivative(x) {
    // Derivada da equação
    return 4 * Math.pow(x, 3) - 1;
}

function newtonRaphson(initialGuess, tolerance, maxIterations) {
    let currentPoint = initialGuess;
    
    for (let iteration = 0; iteration < maxIterations; iteration++) {
        const functionValue = equation(currentPoint);
        const derivativeValue = equationDerivative(currentPoint);
        
        const error = Math.abs(functionValue);
        
        // Mostrando cada interação
        console.log(`Iteração ${iteration + 1}: Ponto Inicial = ${currentPoint}, Ponto Encontrado = ${currentPoint - functionValue / derivativeValue}, Erro = ${error}`);
        
        if (error < tolerance) {
            // Neste momento a raiz foi encontrada com boa precisão
            return { root: currentPoint, iterations: iteration, error: error };
        }
        
        currentPoint = currentPoint - functionValue / derivativeValue;
    }
    
    // Se atingir o máximo de iterações, retorna valor estimado
    return { root: currentPoint, iterations: maxIterations, error: Math.abs(equation(currentPoint)) };
}

const initialGuess = 1;
const tolerance = 0.001;  
const maxIterations = 100;

const result = newtonRaphson(initialGuess, tolerance, maxIterations);

console.log("A raiz é aproximadamente: " + result.root);
console.log("Número de iterações: " + result.iterations);
console.log("Erro estimado: " + result.error);
