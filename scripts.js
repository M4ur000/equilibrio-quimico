function calculateKc() {
    const reactantCoefficients = document.getElementById('reactantCoefficients').value.split(',').map(Number);
    const reactants = document.getElementById('reactants').value.split(',').map(Number);
    const productCoefficients = document.getElementById('productCoefficients').value.split(',').map(Number);
    const products = document.getElementById('products').value.split(',').map(Number);

    if (reactants.length !== reactantCoefficients.length || products.length !== productCoefficients.length) {
        alert('Por favor, ingrese las concentraciones correctas de reactivos y productos.');
        return;
    }

    const reactantTerm = reactants.reduce((acc, conc, idx) => acc * Math.pow(conc, reactantCoefficients[idx]), 1);
    const productTerm = products.reduce((acc, conc, idx) => acc * Math.pow(conc, productCoefficients[idx]), 1);

    const kc = productTerm / reactantTerm;
    document.getElementById('kcResult').innerText = `Kc: ${kc}`;
    document.getElementById('kcImage').innerHTML = `<circle cx="50" cy="50" r="40" fill="green" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">Kc = ${kc.toFixed(2)}</text>`;
}

function applyLeChatelier() {
    const change = document.getElementById('change').value.toLowerCase();
    let resultText;

    if (change.includes('añadir') && change.includes('reactivo')) {
        resultText = 'El equilibrio se desplazará hacia los productos.';
    } else if (change.includes('eliminar') && change.includes('reactivo')) {
        resultText = 'El equilibrio se desplazará hacia los reactivos.';
    } else if (change.includes('añadir') && change.includes('producto')) {
        resultText = 'El equilibrio se desplazará hacia los reactivos.';
    } else if (change.includes('eliminar') && change.includes('producto')) {
        resultText = 'El equilibrio se desplazará hacia los productos.';
    } else {
        resultText = 'Cambio no reconocido. Por favor, especifique un cambio válido.';
    }

    document.getElementById('leChatelierResult').innerText = resultText;
    const svgColor = resultText.includes('productos') ? 'blue' : 'red';
    const svgText = resultText.includes('productos') ? 'Productos' : 'Reactivos';
    document.getElementById('leChatelierImage').innerHTML = `<rect width="100" height="100" fill="${svgColor}" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">${svgText}</text>`;
}

// Añadir ventanas emergentes de ayuda
function showHelp(message) {
    alert(message);
}

// Añadir event listeners para botones de ayuda (si es necesario)
document.addEventListener('DOMContentLoaded', () => {
    const helpButtons = document.querySelectorAll('.help-button');
    helpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            showHelp(message);
        });
    });
});
